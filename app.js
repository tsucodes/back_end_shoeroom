// basic config
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.set('port', process.env.PORT || 8000);
// const cors = require('cors');
// register models for use when needed
require('./models/User')


// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(require('./controllers/auth'))

// custom middleware takes incoming get request and modifyies it before it reaches route handler
const middleware = (req,res, next)=>{
	console.log('custom middleware executed!')
	next()
}

// app.use(middleware)

// redirect
app.get('/', (req, res) => {
	console.log('home')
	res.send('hello')
});

app.get('/MyCloset', middleware, (req, res) => {
	console.log('MyCloset')
	res.send('MyCloset')
});
// start controllers
// const sneakerControllers = require('./controllers/sneakerController');
// app.use('/sneaker', sneakerControllers);













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