import express from "express";
import {Register,Login, Logout, getMyProfile} from "../controllers/userController.js"
import { Bookmark } from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";
const router=express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthenticated,Bookmark)
router.route("/profile/:id").get(isAuthenticated,getMyProfile);
export default router; 