import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/dbConnection.js";
import { songsRouter } from "./routes/songRoutes.js";
import { userRouter } from "./routes/userRoutes.js";
//import { artisteRouter } from "./routes/artisteRoutes.js";
import { playlistRouter } from "./routes/playlistRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/songs/", songsRouter);
app.use("/api/users/", userRouter);
//app.use("/api/artistes/", artisteRouter);
app.use("/api/playlists/", playlistRouter);

const port = process.env.PORT || 6000;

app.listen(port, async () => {
	console.log(`server is running on port ${port}`);
});






// const express = require('express')
// require('dotenv').config()
// const app = express()
// const cookieParser = require('cookie-parser')
// const cors = require('cors')
// const connectDB = require('./config/dbConnection.js')
// const mongoose = require('mongoose')
// const PORT = process.env.PORT || 3500

// console.log(process.env.NODE_ENV)

// connectDB()
// app.use(cors())
// app.use(express.json())
// app.use(cookieParser())

// app.use('/api/users', require('./routes/userRoutes'))
// app.use('/api/songs', require('./routes/songRoutes'))
// app.use('/api/playlists', require('./routes/playlistRoutes'))

// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.json({ message: 'An Error occurred' })
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })

// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB')
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// })

// mongoose.connection.on('error', err => {
//     console.log(err)
// })














// import dotenv from 'dotenv'
// dotenv.config()

// import 'express-async-errors'
// import express from 'express'
// import cookieParser from 'cookie-parser'
// import cors from 'cors'
// import connectDB from './config/dbConnection.js'
// import mongoose from 'mongoose'

// const app = express()
// const PORT = process.env.PORT || 3500

// console.log(process.env.NODE_ENV)

// connectDB()
// app.use(cors.default())
// app.use(express.json())
// app.use(cookieParser())

// app.use('/api/users', require('./routes/userRoutes'))
// app.use('/api/songs', require('./routes/songRoutes'))
// app.use('/api/playlists', require('./routes/playlistRoutes'))

// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.json({ message: 'An Error occur' })
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })

// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB')
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// })

// mongoose.connection.on('error', err => {
//     console.log(err)
// })

// export default app

















// require('dotenv').config()
// require('express-async-errors')
// const express = require('express')
// const app = express()
// const cookieParser = require('cookie-parser')
// const cors = require('cors')
// const connectDB = require('./config/dbConnection.js')
// const mongoose = require('mongoose')
// const PORT = process.env.PORT || 3500

// console.log(process.env.NODE_ENV)

// connectDB()
// app.use(cors())
// app.use(express.json())
// app.use(cookieParser())

// app.use('/api/users', require('./routes/userRoutes'))
// app.use('/api/songs', require('./routes/songRoutes'))
// app.use('/api/playlists', require('./routes/playlistRoutes'))

// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
// 		res.json({ message: 'An Error occur' })
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })

// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB')
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// })

// mongoose.connection.on('error', err => {
//     console.log(err)
// })











// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { connectDb } from "./config/dbConnection.js";
// import { songsRouter } from "./routes/songRoutes.js";
// import { userRouter } from "./routes/userRoutes.js";
// //import { artisteRouter } from "./routes/artisteRoutes.js";
// import { playlistRouter } from "./routes/playlistRoutes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// connectDb();

// app.use("/api/songs/", songsRouter);
// app.use("/api/users/", userRouter);
// app.use("/api/playlists/", playlistRouter);
// //app.use("/api/artistes/", artisteRouter);

// const port = process.env.PORT || 6000;

// app.listen(port, async () => {
// 	console.log(`server is running on port ${port}`);
// });















// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { connectDb } from "./config/dbConnection.js";
// import { songsRouter } from "./routes/songRoutes.js";
// import { userRouter } from "./routes/userRoutes.js";
// //import { artisteRouter } from "./routes/artisteRoutes.js";
// import { playlistRouter } from "./routes/playlistRoutes.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// connectDb();

// app.use("/api/songs/", songsRouter);
// app.use("/api/users/", userRouter);
// //app.use("/api/artistes/", artisteRouter);
// app.use("/api/playlists/", playlistRouter);

// const port = process.env.PORT || 6000;

// app.listen(port, async () => {
// 	console.log(`server is running on port ${port}`);
// });