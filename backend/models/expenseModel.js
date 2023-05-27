const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { isEmail, isStrongPassword } = require('validator');

// Define the User schema
const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, 'Your title cannot be less than 3 characters'],
    maxlength: [20,'Your tttle cannot exceed 20 characters']
  },
  tag: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
    min:[0.1, 'Amount cannot be less than 0.1']
  },
},{
  timestamps: true
});

// Create the Expense model
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;