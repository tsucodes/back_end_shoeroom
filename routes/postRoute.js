
import express from 'express';
// import { getPosts, getPostByID, createPost, updatePost, deletePost } from '../controllers/postController.js';
import { getPosts } from '../controllers/postController.js'
const router = express.Router();
// import auth from "../middleware/jwtAuth.js";

// router.get('/:id', getPostByID);
router.get('/', getPosts);
// router.post('/',auth,  createPost);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);

export default 