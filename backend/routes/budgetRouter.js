const express=require('express')
const budgetRouter= express.Router()

const { createBudget, getBudget, editBudget } = require('../controllers/budgetController')

budgetRouter.route('/').post(createBudget)
budgetRouter.route('/:id').patch(editBudget).get(getBudget)

module.exports=budgetRouter