import mongoose from 'mongoose';

import Post  from '../models/Post';
import shoeSeed from './postData.json';

const shoeData = shoeSeed.map(post => {
    return post;
})

Post.deleteMany({})
    .then(() => {
        Post.insertMany(shoeData);
})
.catch(console.error)