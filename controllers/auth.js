// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Post = require('../models/Post');
// const bcrypt = require('bcrypt')








// // router.get('/', (req, res) => {
// // 	res.send('hello')
// // });

// // sign uproute
// router.post('/signup',(req,res)=>{
//     const {name, email, password} = req.body
//     // requires all fields to be present 
//     if (!name || !email || !password){
//         return res.status(422).json({error:'Please add all required fields'})
//     }
//     User.findOne({email:email})
//     .then((savedUser) =>{
//         if(savedUser){
//             return res.status(422).json({error: 'A user with this email already exsits'})
//         }
//         bcrypt.hash(password,9)
//         .then(hashedpassword =>{
//             const user = new User({
//                 name,
//                 email,
//                 password: hashedpassword
//             })
//         user.save()
//         .then(user =>{
//             res.json({message:'saved'})
//         })
//         .catch(err =>{
//             console.log(err)
//         })
//     })
   
// }) .catch(err=>{
//   console.log(err)
// })
// })

// router.post('/signin',(req,res)=>{
//     const {email,password} = req.body
//     if(!email || !password){
//        return res.status(422).json({error:"please add email or password"})
//     }
//     User.findOne({email:email})
//     .then(savedUser =>{
//         if(!savedUser){
//             return res.status(422).json({error:"Invalid Email or password"})
//          }
//     })
//     bcrypt.compare()
// })
// module.exports = router