import express from "express";
import { createEcho, deleteEcho, LikeorDislike,getAllEchos,getFollowingEchos } from "../controllers/echoController.js";
import isAuthenticated from "../config/auth.js";
const router=express.Router();

router.route("/createecho").post(isAuthenticated,createEcho);
router.route("/deleteecho/:id").delete(isAuthenticated,deleteEcho)
router.route("/likeecho/:id").put(isAuthenticated,LikeorDislike)
router.route("/allechos/:id").get(isAuthenticated, getAllEchos);
router.route("/followingechos/:id").get(isAuthenticated, getFollowingEchos);
export default router;