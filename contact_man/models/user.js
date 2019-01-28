const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

// Find a user by username wrapper
module.exports.getUserByUsername = function(username, callback) {
  const query = { username: username }
  User.findOne(query, callback);
}

// add user to db wrapper
module.exports.addUser = function(newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// Compare candidatePassword with passowrd
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}

// Add contact newContact to user by id
module.exports.addContact = function(id, newContact, callback) {
  User.findByIdAndUpdate(id,
     { $push: { "contacts": newContact } },
     { new: true },
     (err, model) => {
       if (err) throw err;
       callback(err, model);
     }
  );
};
