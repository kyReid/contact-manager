const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require ('../config/database');
var ContactSchema = require('./contact')

// Define schema for User object
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
      type: String,
      required: true
  },
  contacts: [ContactSchema]
});

const User = module.exports = mongoose.model('User', UserSchema);

// Find a user by id wrapper
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

// Find a user by username wrapper
module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

// add user to db wrapper
module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
