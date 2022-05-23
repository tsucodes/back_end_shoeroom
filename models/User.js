const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}
})

// User names the modela schema and userschema passs it through
mongoose.model('User', userSchema)

// prevent error that model is already used 