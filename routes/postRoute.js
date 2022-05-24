import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost, soldPost } from '../controllers/postController.js';

const router = express.Router();

// router.get('/', (req, res) =>{
//     res.send('workiingggggng');
// });

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/soldPost', soldPost);

export default router;