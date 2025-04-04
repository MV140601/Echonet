import { Echo } from "../models/echoschema.js";
import { User } from "../models/userschema.js";
export const createEcho=async(req,res)=>{
    try {
        const {Description,id}=req.body;
        if(!Description || !id){
            return res.status(401).json({
                message:"Fields are Required.",
                success:false
            });
        };
        const user=await User.findById(id).select("-Password"); 
        console.log("user",user)
        await Echo.create({
            Description,
            userId:id,
            userDetails:user
        });
        return res.status(201).json({
            message:"Echo Created Successfully",
            success:true
        })
    } catch (error) {
        
    }
}

export const deleteEcho=async(req,res)=>{
try {
   const {id}=req.params ;
   await Echo.findByIdAndDelete(id);
   return res.status(200).json({
    message:"Echo Deleted Successfully",
    success:true
   })
} catch (error) {
    console.log(error)
}
}

export const LikeorDislike = async (req, res) => {
    try {
        const loggedInUserId = req.body.id; // User's ID
        const echoId = req.params.id;      // Echo's ID from route params

        console.log("My echoId------>", echoId);

        // Find the Echo document
        const echo = await Echo.findById(echoId);

        if (!echo) {
            return res.status(404).json({
                message: "Echo not found",
                success: false,
            });
        }

        console.log("My Echo------>", echo);

        // Check if user already liked the echo
        if (echo.like.includes(loggedInUserId)) {
            // User has liked the echo, so remove their like
            await Echo.findByIdAndUpdate(
                echoId,
                { $pull: { like: loggedInUserId } },
                { new: true }
            );

            return res.status(200).json({
                message: "Echo disliked successfully",
                success: true,
            });
        } else {
            // User hasn't liked the echo, so add their like
            await Echo.findByIdAndUpdate(
                echoId,
                { $push: { like: loggedInUserId } },
                { new: true }
            );

            return res.status(200).json({
                message: "Echo liked successfully",
                success: true,
            });
        }
    } catch (error) {
        console.error("Error in likeOrDislike:", error);
        return res.status(500).json({
            message: "An error occurred",
            success: false,
        });
    }
};

export const getAllEchos = async (req,res) => {
    // loggedInUser ka tweet + following user tweet
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const loggedInUserEchos = await Echo.find({userId:id});
        const followingUserEcho = await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Echo.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            Echos:loggedInUserEchos.concat(...followingUserEcho),
        })
    } catch (error) {
        console.log(error);
    }
}
export const getFollowingEchos = async (req,res) =>{
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id); 
        const followingUserEcho = await Promise.all(loggedInUser.following.map((otherUsersId)=>{
            return Echo.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            Echos:[].concat(...followingUserEcho)
        });
    } catch (error) {
        console.log(error);
    }
}