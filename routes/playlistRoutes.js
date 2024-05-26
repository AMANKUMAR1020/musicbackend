import express from "express";
import {
	createPlaylist,
	editPlaylist,
	getPlaylist,
	getPlaylists,
	deletePlaylist
} from "../controllers/playlistController.js";
import { verifyToken } from "../middleware/validateToken.js";

const router = express.Router();

router.get("/", getPlaylists);
router.get("/:id", getPlaylist); //post id number
router.post("/create", verifyToken, createPlaylist);
router.put("/:id", verifyToken, editPlaylist);//give id of playlist
router.delete("/:playlistid", verifyToken, deletePlaylist);//give id of playlist

export { router as playlistRouter };

















// const express = require('express')
// const router = express.Router()
// const  {playlistController} = require("../controllers/playlistController.js");
// const { verifyToken } = require("../middleware/validateToken.js");

// router.route("/")
// 	.get(playlistController.getPlaylists);

// router.route("/playlist")
// 	.post(verifyToken,playlistController.getPlaylist);//post id number

// router.route("/create")
// 	.post(verifyToken ,playlistController.createPlaylist);

// router.route("/:id")
// 	.put(playlistController.editPlaylist);//give id of playlist

// router.route("/:playlistid")
// 	.delete(verifyToken , playlistController.deletePlaylist);//give id of playlist

// module.exports = router














// import express from "express";
// import {
// 	createPlaylist,
// 	editPlaylist,
// 	getPlaylist,
// 	getPlaylists,
// 	deletePlaylist
// } from "../controllers/playlistController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getPlaylists);
// router.post("/playlist", getPlaylist); //post id number
// router.post("/create", verifyToken, createPlaylist);
// router.put("/:id", verifyToken, editPlaylist);//give id of playlist
// router.delete("/:playlistid", verifyToken, deletePlaylist);//give id of playlist

// export { router as playlistRouter };















// import express from "express";
// import {
// 	createPlaylist,
// 	editPlaylist,
// 	getPlaylist,
// 	getPlaylists,
// 	deletePlaylist
// } from "../controllers/playlistController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getPlaylists);
// router.post("/playlist", getPlaylist); //post id number
// router.post("/create", verifyToken, createPlaylist);
// //router.put("/edit", verifyToken, editPlaylist);//give id of playlist
// router.put("/:id", verifyToken, editPlaylist);//give id of playlist
// router.delete("/:playlistid", verifyToken, deletePlaylist);//give id of playlist

// export { router as playlistRouter };











// import express from "express";
// import {
// 	createPlaylist,
// 	editPlaylist,
// 	getPlaylist,
// 	getPlaylists,
// } from "../controllers/playlistController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getPlaylists);
// // router.get("/:id", getPlaylist);
// router.post("/create", verifyToken, createPlaylist);
// router.patch("/edit/playlist", verifyToken, editPlaylist);
// router.patch("/edit/playlistsong", verifyToken, editPlaylistsong);
// router.delete("/delete", verifyToken, deletePlaylist);

// export { router as playlistRouter };
















// import express from "express";
// import {
// 	createPlaylist,
// 	editPlaylist,
// 	getPlaylist,
// 	getPlaylists,
// } from "../controllers/playlistController.js";
// import { verifyToken } from "../middleware/validateToken.js";

// const router = express.Router();

// router.get("/", getPlaylists);
// router.get("/:id", getPlaylist);
// router.post("/create", verifyToken, createPlaylist);
// router.patch("/:id", verifyToken, editPlaylist);

// export { router as playlistRouter };
