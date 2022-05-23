
const mongoose = require('./connection');

const Post = require('../models/Post');
const User = require('../models/User');
const PostSeed = require('./postData.json');
const Userseed = require('./userData.json');

Post.deleteMany({})
   .then(() => User.deleteMany({}))
   .then(() => {
       return User.create({Userseed})
       .then((user) =>
       PostSeed.map((post) => ({...post, owner: user._id}))
       )
       .then((posts) => Post.insertMany(posts));
   })
   .then(console.log)
   .catch(console.error)
   .finally(() => {
       process.exit();
   });




// const mongoose = require('./connection');

// const Post = require('../models/Post');
// const User = require('../models/User');
// const PostSeed = require('./postData.json');
// const Userseed = require('./userData.json');

// const sneakerData = PostSeed.map((post) => {
//     return {
//         "name": post.name,
//         "brand": post.brand,
//         "size": post.size,
//         "condition": post.condition,
//         "image": post.image
//     }
// })

// Post.deleteMany({})
//    .then(() => {
//        sneakerData.map((post) => {
//            Post.insertMany(post);
//        })
//    })
//    .catch(console.error)

// const userData = Userseed.map((user) =>{
//     return{
//         email: user.email
//     }
// })
// User.deleteMany({})
// .then(() => {
//     userData.map((user) =>{
//         User.insertMany(user);
//     })
// })