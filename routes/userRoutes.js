import express from "express";
import {
	getUserFavoriteSongs,
	loginUser,
	registerUser,
	getUserId,
	getAllUser,
	editUser
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/validateToken.js";

const router = express.Router();

router.get("/allusers", getAllUser);// artistes
router.get("/:id",verifyToken,getUserId);//all infornamtion will get for any user //post id number
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/favorites", verifyToken, getUserFavoriteSongs);
router.put("/myprofile",verifyToken,editUser)//only name and photo eill change

export { router as userRouter };















// const express = require('express')
// const router = express.Router()
// const userController = require("../controllers/userController.js");
// const verifyToken  = require("../middleware/validateToken.js");

// router.route("/allusers")
// 	.get(userController.getAllUser)// artistes

// router.route("/user")
// 	.post(verifyToken, userController.getUserId)//all infornamtion will get for any user //post id number

// router.route("/login")
// 	.post(userController.loginUser)

// router.route("/register")
// 	.post(userController.registerUser)

// router.route("/favorites")
// 	.get(verifyToken, userController.getUserFavoriteSongs)

// router.route("/myprofile")
// 	.put(verifyToken, userController.editUser)//only name and photo eill change

// module.exports = router










// import express from "express";
// import {
// 	getUserFavoriteSongs,
// 	loginUser,
// 	registerUser,
// 	getUserId,
// 	getAllUser,
// 	editUser
// } from "../controllers/userController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/allusers", getAllUser);// artistes
// router.post("/user",verifyToken,getUserId);//all infornamtion will get for any user //post id number
// router.post("/login", loginUser);
// router.post("/register", registerUser);
// router.get("/favorites", verifyToken, getUserFavoriteSongs);
// router.put("/myprofile",verifyToken,editUser)//only name and photo eill change

// export { router as userRouter };














// import express from "express";
// import {
// 	getUserFavoriteSongs,
// 	loginUser,
// 	registerUser,
// 	getSongsByUserId,
// 	getAllUser
// } from "../controllers/userController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/allusers", getAllUser);
// router.get("/:id", getSongsByUserId);
// router.post("/login", loginUser);
// router.post("/register", registerUser);
// router.get("/favorites", verifyToken, getUserFavoriteSongs);

// export { router as userRouter };
