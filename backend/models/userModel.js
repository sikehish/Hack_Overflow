const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail, isStrongPassword } = require('validator');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
  timestamps: true
});


userSchema.methods.createToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_KEY, { expiresIn: "2d" });    
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;