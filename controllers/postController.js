const express = require('express');
const router = express.Router();
const PostShoe = require('../models/Post.js');


// // // get all post
router.get('/', async ( res) => { 
     try {
        const shoeCard = await PostShoe.find();         
    res.status(200).json(shoeCard);
} catch (error) {
    res.status(404).json({ message: error.message });
}
});

// // get all post by ID
router.get('/:id',async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostShoe.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// // create new post
router.post('/', async (req, res) => {
    const { name, 
            brand, 
            size, 
            condition, 
            image } = req.body;
    const newShoePost = new PostShoe({ name, brand, size, condition, image})
    try {
        await newShoePost.save();
        res.status(201).json(newShoePost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
});
// // edit post
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, 
            brand, 
            size, 
            condition, 
            image} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`Post not found, id: ${id}`);
    const updatedPost = { name, brand, size, condition, image, _id: id };
    await PostShoe.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
})
// // delete post
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostShoe.findByIdAndDelete(id);
    res.json({ message: "Sold , Traded, Trashed!" });
})

module.exports = router;
