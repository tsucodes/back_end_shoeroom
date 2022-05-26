// const express = require('express');
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose');
// const cors = require('cors');
// updated syntax
import express from 'express';

// import mongoose from 'mongoose';
import cors from 'cors';

// import all post routes
import Route from './routes/postRoute.js';
const app = express();

app.set('port', process.env.PORT || 8000);
// Middleware

// everyroute will start wth post
// instantiate express
// limits size incase pictures are too big 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
 // custom middleware takes incoming get request and modifyies it before it reaches route handler
const middleware = (req,res, next)=>{
console.log('custom middleware executed!');
	next();
};
app.use(middleware);

// set routes for all endpoint to start with /post
app.use('/post', Route);
// app.get('/', (req, res) =>{
//   res.redirect('/post');
// })



// err handling
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
  });

// start server
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
