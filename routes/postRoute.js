
import express from 'express';
const router = express.Router();
// import controllers 
import { getPosts, getPostByID, createPost, updatePost, deletePost } from '../controllers/postController.js';
import auth from "../middleware/jwtAuth.js";

// api endpoints
//  / is local host 5000 
// router.get('/', (req,res) => {
//     res.send('hello')
// })


router.get('/:id', getPostByID);
router.get('/', getPosts);
router.post('/',  createPost);

router.patch('/:id', updatePost);
// router.patch('/:id', auth, updatePost);
router.delete('/:id', deletePost);
// router.delete('/:id', auth, deletePost);

export default router;