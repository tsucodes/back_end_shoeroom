import express from 'express';
import mongoose from 'mongoose';

import PostShoe from '../models/Post.js';

const router = express.Router();

// get all post
export const getPosts = async (req, res) => { 
    try {
        const postedShoes = await PostShoe.find();
        res.status(200).json(postedShoes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get all post by ID
export const getPost = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostShoe.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
// create new post
export const createPost = async (req, res) => {
    const { name, brand, size, condition, image, sold } = req.body;
    const newShoePost = new PostShoe({ name, brand, size, condition, image, sold})
    try {
        await newShoePost.save();
        res.status(201).json(newShoePost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
// edit post
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { name, brand, size, condition, image, sold} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = { name, brand, size, condition, image, sold, _id: id };
    await PostShoe.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}
// delete post
export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostShoe.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

// controller to mark as sold

export const soldPost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { new: true });
    res.json(updatedPost);
}


export default router;


// Routes
