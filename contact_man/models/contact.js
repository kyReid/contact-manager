const mongoose = require('mongoose');

// Define schema for Contact object
const ContactSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
      type: String
  },
  email: {
    type: String
  },
  mobile_phone: {
    type: String
  },
  home_phone: {
    type: String
  },
  address: {
    type: String
  }
});

module.exports = ContactSchema;
