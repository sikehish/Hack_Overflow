const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
budget: {
type: Number,
required: [true, 'Please enter the budget to track your expenses'],
validate: {
  validator: function(value) {
    return value > 0;
  },
  message: 'Budget must be greater than zero.'
}
},
tags: {
    type: [{
      name: String,
      percentage: Number,
    }],
    default: [],
  },
})
const Budget=mongoose.model('budget', budgetSchema)
module.exports = Budget