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
      const isMatch = await bcryptjs.compare(Password, user.Password);
      if (!isMatch) {
        return res.status(401).json({
          message: "InCorrect Email or Password",
          success: false
        })
      }
      else {

        const token = await jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
          message: `Welcome back ${user.UserName}`,
          success:true
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({
      message: error,
      success: false
    })

  }
}
export const Bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id; // User's ID
    const echoId = req.params.id;      // Echo's ID from route params

    console.log("My echoId------>", echoId);

    // Find the Echo document
    const user = await User.findById(loggedInUserId);
    if (user.bookmarks.includes(echoId)) {
      await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: echoId } });
      return res.status(200).json({ message: "Removed from Bookmark" });

    } else {
      await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: echoId } });
      return res.status(200).json({ message: "Added to Bookmark" });

    }


  } catch (error) {
    console.error("Error in Bookmark:", error);
    return res.status(500).json({
      message: "An error occurred",
      success: false,
    });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).select("-Password");
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
}

export const getOtherUsers = async (req, res) => {
  try {
    const {id} = req.params;
    const otherUsers = await User.find({_id:{$ne:id}}).select("-password");
    if(!otherUsers){
       return res.status(401).json({
           message:"Currently do not have any users."
       })
    };
    return res.status(200).json({
       otherUsers
   })
} catch (error) {
   console.log(error);
}
}
export const Logout = async (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    messgae: "Logged Out Successfully",
    success: true
  });
}
export const follow = async(req,res)=>{
    try {
        const loggedInUserId = req.body.id; 
        console.log("logged in user",loggedInUserId);
        const userId = req.params.id; 
        console.log("UserId ",userId);
        const loggedInUser = await User.findById(loggedInUserId);
        const user = await User.findById(userId);
        if(!user.followers.includes(loggedInUserId)){
            await user.updateOne({$push:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$push:{following:userId}});
        }else{
            return res.status(400).json({
                message:`User already followed to ${user.Name}`
            })
        };
        return res.status(200).json({
            message:`${loggedInUser.Name} just follow to ${user.Name}`,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
export const unfollow = async (req,res) => {
    try {
        const loggedInUserId = req.body.id; 
        const userId = req.params.id; 
        const loggedInUser = await User.findById(loggedInUserId); 
        const user = await User.findById(userId);   
        if(loggedInUser.following.includes(userId)){
            await user.updateOne({$pull:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$pull:{following:userId}});
        }else{
            return res.status(400).json({
                message:`User has not followed yet`
            })
        };
        return res.status(200).json({
            message:`${loggedInUser.Name} unfollow to ${user.Name}`,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}