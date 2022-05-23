const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}
})

// User names the modela schema and userschema passs it through
const User = mongoose.model('Users', UserSchema)
module.exports = User;

// prevent error that model is already used 