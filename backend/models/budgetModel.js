const mongoose = require('mongoose')
const budgetSchema = new mongoose.Schema({
budget: {
type: String,
required: [true, 'Please enter the budget to track your expenses'],
},

tags: {
    type: [{
      name: String,
      amount: Number,
    }],
    default: [],
  },
})
module.exports = mongoose.model('budget', budgetSchema)