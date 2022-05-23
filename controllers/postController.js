const express = require('express');
const router = express.Router();
const Sneaker = require('../models/Sneaker');

//READ: get all sneakers
router.get('/', (req, res, next) => {
	Sneaker.find({})
		.then((sneakers) => res.json(sneakers))
		.catch(next);
});

//READ: get all sneakers by ID
router.get('/:id', async (req, res, next) => {
	try {
		const sneakerID = await Sneaker.findById(req.params.id);
		res.json(sneakerID);
	} catch (err) {
		next(err);
	}
});

//CREATE: add sneaker
router.post('/', async (req, res, next) => {
	try {
		const addsneaker = await Sneaker.create(req.body);
        //Use this line if I don't want to redirect
		// res.status(201).json(addsneaker);
		res.redirect(303, '/');
	} catch (err) {
		next(err);
	}
});

//UPDATE: update sneaker by id
router.put('/:id', async (req, res, next) => {
	try {
		const SneakerToUpdate = await Sneaker.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (SneakerToUpdate) {
			res.redirect(303, '/');
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

//DELETE sneaker
router.delete('/:id', async (request, response, next) => {
	try {
	const SneakerToDelete = await Sneaker.findByIdAndDelete(request.params.id);
	if (SneakerToDelete) {
		response.redirect(303, '/');
	}else{
		response.sendStatus(404);
	}
}catch(error) {
	next(error);
}
})
module.exports = router;