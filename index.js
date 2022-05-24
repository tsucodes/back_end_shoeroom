// const express = require('express');
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose');
// const cors = require('cors');
// updated syntax
import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoute from './routes/postRoute.js';

const app = express();

// Middleware
// everyroute will start wth post
app.use('/post', postRoute);


// instantiate express

// limits size incase pictures are too big
app.use(bodyparser.json({limit: "30mb", extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = process.env.DATABASE_URL
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(error.message));









//=============================================================================
// ROUTES
//=============================================================================
// // Redirect
// app.get('/', (req, res) => {
// 	res.redirect('/shoeroom');
// });
// /* START CONTROLLERS HERE */
// const postController = require('./controllers/postController');
// app.use('/shoeroom, postController');

// const userController = require('./controllers/userController');
// app.use('/users/', userController);
// /* END CONTROLLERS HERE */
// // err handling
// app.use((err, req, res, next) => {
// 	const statusCode = res.statusCode || 500;
// 	const message = err.message || 'Internal Server Error';
// 	res.status(statusCode).send(message);
//   });
// //=============================================================================
// // START SERVER
// //=============================================================================
// app.listen(app.get('port'), () => {
// 	console.log(`✅ PORT: ${app.get('port')} 🌟`);
// });


// // // basic config
// // const express = require('express');
// // const { default: mongoose } = require('mongoose');
// // const app = express();
// // app.set('port', process.env.PORT || 8000);
// // // const cors = require('cors');
// // // register models for use when needed
// // require('./models/User')


// // // middleware
// // app.use(express.json());
// // // app.use(express.urlencoded({ extended: true }));
// // // app.use(cors());
// // app.use(require('./controllers/auth'))

// // // custom middleware takes incoming get request and modifyies it before it reaches route handler
// // const middleware = (req,res, next)=>{
// // 	console.log('custom middleware executed!')
// // 	next()
// // }

// // // app.use(middleware)

// // // redirect
// // app.get('/', (req, res) => {
// // 	console.log('home')
// // 	res.send('hello')
// // });

// // app.get('/MyCloset', middleware, (req, res) => {
// // 	console.log('MyCloset')
// 	res.send('MyCloset')
// });
// // start controllers
// // const sneakerControllers = require('./controllers/sneakerController');
// // app.use('/sneaker', sneakerControllers);


// // err handling
// app.use((err, req, res, next) => {
// 	const statusCode = res.statusCode || 500;
// 	const message = err.message || 'Internal Server Error';
// 	res.status(statusCode).send(message);
//   });

// // start server
// app.listen(app.get('port'), () => {
// 	console.log(`✅ PORT: ${app.get('port')} 🌟`);
// });