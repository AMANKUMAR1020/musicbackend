import Song from "../models/Song.js";
import User from "../models/User.js";

//@desc Get all the songs
//@route GET /api/songs
//@access public
const getSongs = async (req, res) => {
	const songs = await Song.find({});

	if (!songs) {
		return res.status(400).json({ message: "An error occured!" });
	}

	const shuffledSongs = songs.sort(() => (Math.random() > 0.5 ? 1 : -1));

	res.status(200).json(shuffledSongs);
};

const getTopSongs = async (req, res) => {

	try {
		const songs = await Song.find({});

		const results = songs.sort((a, b) => (a.likes.size() < b.likes.size() ? 1 : -1));
		
		res.status(200).json(results);
	
	} catch (error) {
	
		res.status(400).json({ message: error.message });
	
	}
};

//@desc Like or unlike a song
//@route PATCH /api/songs/like/:id
// //@access private
// const likeSong = async (req, res) => {
// 	const { id } = req.user;
// 	const songId  = req.body;
// //	console.log(songId)
  
// 	const user = await User.findById(id);
// 	if (!user) {
// 	return res.status(404).json({ message: "User not found!" });
// 	}

// 	const song = await Song.findById(songId);
// 	if (!song) {
// 	return res.status(404).json({ message: "Song not found!" });
// 	}

// 	try {

// 	  const isLiked = song.likes.includes(id);
// 	  console.log(isLiked)

// 	  if (!isLiked) {
// 		song.likes.push(id);
// 		await song.save();
		
// 		user.favorites.push(songId);
// 		await user.save()
		
// 		return res.status(200).json({ message: "You liked it" });
	  
// 	} else {
// 		song.likes.pull(id);
// 		await song.save();

// 		user.favorites.pull(songId);
// 		await user.save()

// 		return res.status(200).json({ message: "You disliked it" });
// 	}
	
// 	} catch (error) {
// 	  return res.status(500).json({ error: error.message });
// 	}
// };
// kl
  const likeSong = async (req, res) => {
	const { id } = req.user;
	const { songId } = req.body; // Destructure songId from req.body
  
	try {
	  const user = await User.findById(id);
	  if (!user) {
		return res.status(404).json({ message: "User not found!" });
	  }
  
	  const song = await Song.findById(songId);
	  if (!song) {
		return res.status(404).json({ message: "Song not found!" });
	  }
  
	  const isLiked = song.likes.includes(id);
  
	  if (!isLiked) {
		song.likes.push(id);
		await song.save();
  
		user.favorites.push(songId);
		await user.save();
  
		return res.status(200).json({ message: "You liked it" });
	  } else {
		song.likes.pull(id);
		await song.save();
  
		user.favorites.pull(songId);
		await user.save();
  
		return res.status(200).json({ message: "You disliked it" });
	  }
	} catch (error) {
	  return res.status(500).json({ error: error.message });
	}
  };
  

const createSong = async (req, res) => {
	const { id } = req.user;
	const data = req.body;
	const user = await User.findById(id);
  
	if (!user) {
	  return res.status(404).json({ message: "User not found!" });
	}

	if(!data || !data.title || !data.songUrl){
		return res.status(404).json({ message: "data field are required" });
	}
  
	const newSong = await Song.create({ title: data.title, songUrl: data.songUrl, Artiste:user.name, userId:id});

	if (newSong) {

		user.songs.push(newSong._id);
		await user.save();
	
		return res.status(200).json(newSong);
	
	} else {
	
		res.status(500).json({ message: "Failed to create new song!" });
	}
}
  

const deleteSong = async (req, res) => {
	const { id } = req.user;
	const songid = req.params.songid;

	const user = await User.findById(id);
	const song = await Song.findById(songid);
  
	if (!user) {
	  return res.status(404).json({ message: "User not found!" });
	}
	if (!song) {
	  return res.status(404).json({ message: "Song not found!" });
	}
  
	const allusers = await User.find({});
  
	await Promise.all(
	  allusers.reduce((accumulator, user) => {
		if (user.favorites.includes(songid)) {
		  user.favorites.pull(songid);
		  return user.save();
		}
		return accumulator;
	  }, [])
	);
  
	if (user.songs.includes(songid)) {
	  user.songs.pull(songid);
	  await user.save();
	}
  
	const deleteSong = await song.deleteOne();
  
	if (deleteSong) {
	  return res.status(200).json(deleteSong);
	} else {
	  return res.status(500).json({ message: "Failed to delete song!" });
	}
};
  

const getSongsById = async(res,req)=>{
	const { id } = req.params;
	//const { id } = req.body;
	const user = await User.findById(id);
  
	if (!user) {
	  return res.status(404).json({ message: "User not found!" });
	}
  
	const userFavorites = await Promise.all(
	  user.songs.map((id) => Song.findById(id))
	);
  
	if (!userFavorites) {
	  return res.status(404).json({ message: "Not found!" });
	}
//	res.status(200).json({user:user, userFavorites:userFavorites});
	res.status(200).json(userFavorites);
}
  
export {
	getSongs,
	getTopSongs,
	likeSong,
	createSong,
	deleteSong,
	getSongsById
};
















// import Song from "../models/Song.js";
// import User from "../models/User.js";

// //@desc Get all the songs
// //@route GET /api/songs
// //@access public
// const getSongs = async (req, res) => {
// 	const songs = await Song.find({});

// 	if (!songs) {
// 		return res.status(400).json({ message: "An error occured!" });
// 	}
// 	const shuffledSongs = songs.sort(() => (Math.random() > 0.5 ? 1 : -1));

// 	res.status(200).json(shuffledSongs);
// };

// //@desc Get the top songs
// //@route GET /api/songs/top
// //@access public
// const getTopSongs = async (req, res) => {
// 	try {
// 		const results = await Song.aggregate([
// 			{
// 				$project: {
// 					title: 1,
// 					duration: 1,
// 					coverImage: 1,
// 					artistes: 1,
// 					songUrl: 1,
// 					artistIds: 1,
// 					type: 1,
// 					likes: {
// 						$size: {
// 							$objectToArray: "$likes",
// 						},
// 					},
// 				},
// 			},
// 			{ $sort: { likes: -1 } },
// 			{ $limit: 8 },
// 		]);
// 		res.status(200).json(results);
// 	} catch (error) {
// 		res.status(400).json({ message: error.message });
// 	}
// };

// //@desc Get the new releases
// //@route GET /api/songs/releases
// //@access public
// const getNewReleases = async (req, res) => {
// 	const songs = await Song.find({});

// 	const result = songs.slice(-11, -1);
// 	const shuffledSongs = result.sort(() => (Math.random() > 0.5 ? 1 : -1));

// 	res.status(200).json(shuffledSongs);
// };

// //@desc Get random songs
// //@route GET /api/songs/random
// //@access public
// const getRandom = async (req, res) => {
// 	const songs = await Song.find({});

// 	const shuffledSongs = songs.sort(() => (Math.random() > 0.5 ? 1 : -1));
// 	const result = shuffledSongs.slice(-11, -1);

// 	res.status(200).json(result);
// };

// //@desc Get the popular songs around you
// //@route GET /api/songs/popular
// //@access public
// const getAroundYou = async (req, res) => {
// 	const songs = await Song.find({});

// 	const result = songs.slice(0, 11);
// 	const shuffledSongs = result.sort(() => (Math.random() > 0.5 ? 1 : -1));

// 	res.status(200).json(shuffledSongs);
// };

// //@desc Like or unlike a song
// //@route PATCH /api/songs/like/:id
// //@access private
// const likeSong = async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const userId = req.user.id;
// 		const song = await Song.findById(id);
// 		const user = await User.findById(userId);

// 		if (!user) {
// 			return res.json(404).json({ message: "User not found!" });
// 		}
// 		if (!song) {
// 			return res.json(404).json({ message: "Song not found!" });
// 		}

// 		const isLiked = song.likes.get(userId);

// 		if (isLiked) {
// 			song.likes.delete(userId);
// 			user.favorites = user.favorites.filter((songId) => songId !== id);
// 		} else {
// 			song.likes.set(userId, true);
// 			user.favorites.push(id);
// 		}

// 		const savedSong = await song.save();
// 		const savedUser = await user.save();

// 		if (!savedSong || !savedUser) {
// 			return res.status(400).json({ message: "An error occured" });
// 		}

// 		const returnUser = {
// 			id: savedUser.id,
// 			username: savedUser.username,
// 			favorites: savedUser.favorites,
// 			playlists: savedUser.playlists,
// 		};

// 		res.status(200).json(returnUser);
// 	} catch (error) {
// 		return res.status(409).json({ message: error.message });
// 	}
// };

// export {
// 	getSongs,
// 	getTopSongs,
// 	getNewReleases,
// 	getRandom,
// 	getAroundYou,
// 	likeSong,
// };