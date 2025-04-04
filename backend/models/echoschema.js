import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    Description: { type: String, require: true },
    like: { type: Array,default:[] },
    userId:{type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookmarks: { type: Array,default:[] },
    Password: { type: String, require: true },
    userDetails:{type:Array,default:[]}
}, { timestamps: true })

export const Echo=mongoose.model("Echo",tweetSchema);