// post controller 
// import express from 'express';
// import mongoose from 'mongoose';
// import PostShoe from '../models/Post.js';

// // // // get all post
// export const getPosts = async (req, res, next) => { 
//     PostShoe.find({})
// 		.then((posts) => res.json(posts))
// 		.catch(next);
// };

// // // get all post by ID
// export const getPostByID = async (req, res) => { 
//     try {
// 		const postID = await PostShoe.findById(req.params.id);
// 		res.json(postID);
// 	} catch (err) {
// 		next(err);
// 	}
// };

// // // create new post
// export const createPost = async (req, res) => {
//     const { name, 
//             brand, 
//             size, 
//             condition, 
//             image } = req.body;
//     const newShoePost = new PostShoe({ name, brand, size, condition, image})
//     try {
//         await newShoePost.save();
//         res.status(201).json(newShoePost );
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }
// // // edit post
// export const updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { name, 
//             brand, 
//             size, 
//             condition, 
//             image} = req.body;
//     if (!mongoose.Types.ObjectId.isValid(id)) 
//     return res.status(404).send(`Post not found, id: ${id}`);
//     const updatedPost = { name, brand, size, condition, image, _id: id };
//     await PostShoe.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// }
// // // delete post
// export const deletePost = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//     await PostShoe.findByIdAndDelete(id);
//     res.json({ message: "Sold , Traded, Trashed!" });
// }

// export default router;



// {
//     "name": "cement 4",
//     "brand": "jordan",
//     "size": "7",
//     "condition": "worn",
//     "image": "url here"
// }