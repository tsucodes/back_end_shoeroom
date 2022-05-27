const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});


const User = mongoose.model('User', UserSchema);
module.exports = User;

// User names the modela schema and userschema passs it through
// const User = mongoose.model('Users', UserSchema)
// module.exports = User;

// prevent error that model is already used 