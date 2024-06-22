import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/dbConnection.js";
import { songsRouter } from "./routes/songRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
import { corsOptions } from "./config/corsOptions.js";
//import { artisteRouter } from "./routes/artisteRoutes.js";
import { playlistRouter } from "./routes/playlistRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());

connectDB();

app.use("/api/songs/", songsRouter);
app.use("/api/users/", userRouter);
//app.use("/api/artistes/", artisteRouter);
app.use("/api/playlists/", playlistRouter);

const port = process.env.PORT || 3500;

app.listen(port, async () => {
	console.log(`server is running on port ${port}`);
});
