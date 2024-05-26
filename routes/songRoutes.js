import express from "express";
import {
	getSongs,
	getTopSongs,
	likeSong,
	createSong,
	deleteSong,
} from "../controllers/songController.js";
import { verifyToken } from "../middleware/validateToken.js";

const router = express.Router();

router.get("/", getSongs);
router.get("/top", getTopSongs);
router.patch("/like",verifyToken, likeSong);//click to like the song
router.post("/create",verifyToken,createSong);// there is also need to do some work >>>
router.delete("/:songid",verifyToken,deleteSong);//pass the song id in it

export { router as songsRouter };















// const express = require('express')
// const router = express.Router()
// const  {songController} = require("../controllers/songController.js");
// const { verifyToken } = require("../middleware/validateToken.js");

// router.route("/")
// 	.get(songController.getSongs)

// router.route("/top")
// 	.get(songController.getTopSongs)

// router.route("/like")
// 	.patch(verifyToken,songController.likeSong)//click to like the song

// router.route("/create")
// 	.post(verifyToken,songController.createSong)// there is also need to do some work >>>

// router.route("/:id")
// 	.delete(verifyToken,songController.deleteSong)//pass the song id in it

// module.exports = router












// import express from "express";
// import {
// 	getSongs,
// 	getTopSongs,
// 	likeSong,
// 	createSong,
// 	deleteSong,
// } from "../controllers/songController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getSongs);
// router.get("/top", getTopSongs);
// router.patch("/like",verifyToken, likeSong);//click to like the song
// router.post("/create",verifyToken,createSong);// there is also need to do some work >>>
// router.delete("/:id",verifyToken,deleteSong);//pass the song id in it

// export { router as songsRouter };









// import express from "express";
// import {
// 	getAroundYou,
// 	getNewReleases,
// 	getRandom,
// 	getSongs,
// 	getTopSongs,
// 	likeSong,
// } from "../controllers/songController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getSongs);
// router.get("/top", getTopSongs);
// router.get("/releases", getNewReleases);
// router.get("/random", getRandom);
// router.get("/popular", getAroundYou);
// router.patch("/like/:id", verifyToken, likeSong);

// export { router as songsRouter };
















// import express from "express";
// import {
// 	getSongs,
// 	getTopSongs,
// 	likeSong,
// 	createSong,
// 	deleteSong,
// 	getSongsById
// } from "../controllers/songController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getSongs);
// router.get("/top", getTopSongs);
// router.get("/:id", getSongsById);
// router.get("/like",verifyToken, likeSong);
// router.post("/create",verifyToken,createSong);
// router.delete("/delete",verifyToken,deleteSong);
// export { router as songsRouter };









// // import express from "express";
// // import {
// // 	getAroundYou,
// // 	getNewReleases,
// // 	getRandom,
// // 	getSongs,
// // 	getTopSongs,
// // 	likeSong,
// // } from "../controllers/songController.js";
// // import { verifyToken } from "../middleware/validateToken.js";

// // const router = express.Router();

// // router.get("/", getSongs);
// // router.get("/top", getTopSongs);
// // router.get("/releases", getNewReleases);
// // router.get("/random", getRandom);
// // router.get("/popular", getAroundYou);
// // router.patch("/like/:id", verifyToken, likeSong);

// // export { router as songsRouter };
