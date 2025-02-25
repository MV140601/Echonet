import { User } from "../models/userschema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


export const Register = async (req, res) => {
  try {
    const { Name, UserName, Email, Password } = req.body;
    //basic validation 
    if (!Name || !Email || !UserName || !Password) {
      return res.status(404).json({ message: "Please provide all the details", success: false })
    }
    const user = await User.findOne({ Email });


    if (user) {
      console.log("User Found", user);
      return res.status(401).json({
        message: "User Already Exists",
        success: false
      })
    }
    const hashedPassWord = await bcryptjs.hash(Password, 16);
    await User.create({
      Name,
      UserName,
      Email,
      Password: hashedPassWord
    })
    return res.status(200).json({
      message: "Account Created Successfully.",
      success: true
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error,
      success: false
    })
  }
}

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log({ Email, Password })
    if (!Email || !Password) {
      return res.status(404).json({ message: "Please provide all the details", success: false })
    }
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({
        message: "EmailId does not Exists,Please Register.",
        success: false
      })
    }
    else {
      const isMatch = await bcryptjs.compare( Password,user.Password);
      if (!isMatch) {
        return res.status(401).json({
          message: "InCorrect Email or Password",
          success: false
        })
      }
      else{
         
        const token =await jwt.sign({ userId: user._id },process.env.TOKEN_SECRET,{expiresIn:"1d"});
        return res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
          message:`Welcome back ${user.UserName}`
        });
      }
    }
  } catch (error) {
    console.log(error.message);
     return res.status(401).json({
      message:error,
      success:false
     })

  }
} 
export const Bookmark = async (req, res) => {
  try {
      const loggedInUserId = req.body.id; // User's ID
      const echoId = req.params.id;      // Echo's ID from route params

      console.log("My echoId------>", echoId);

      // Find the Echo document
      const user =await User.findById(loggedInUserId);
      if(user.bookmarks.includes(echoId)){
        await User.findByIdAndUpdate(loggedInUserId,{$pull:{bookmarks:echoId}});
        return res.status(200).json({message:"Removed from Bookmark"});

      }else{
          await User.findByIdAndUpdate(loggedInUserId,{$push:{bookmarks:echoId}});
        return res.status(200).json({message:"Added to Bookmark"});
         
      }

       
  } catch (error) {
      console.error("Error in Bookmark:", error);
      return res.status(500).json({
          message: "An error occurred",
          success: false,
      });
  }
};

export const getMyProfile=async(req,res)=>{
  try {
    const id=req.params.id;
    const user =await User.findById(id).select("-Password");
    return res.status(200).json({user});
  } catch (error) {
    console.log(error);
  }
}
export const Logout=async(req,res)=>{
  return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
    messgae:"Logged Out Successfully",
    success:true
  });
}