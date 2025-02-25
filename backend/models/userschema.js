import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: { type: String, require: true },
    UserName: { type: String, require: true, unique: true },
    Email: { type: String, require: true, unique: true },
    Password: { type: String, require: true },
    followers:{type:Array,default:[]},
    following:{type:Array,default:[]},
    bookmarks: { type: Array,default:[] }
}, { timestamps: true })

export const User=mongoose.model("User",userSchema);