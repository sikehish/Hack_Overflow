const mongoose = require('mongoose');

// Define the User schema
const expenseSchema = new mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
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
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'Amount must be greater than zero.'
    }
  },
},{
  timestamps: true
});

// Create the Expense model
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;