const express=require('express')
const budgetRouter= express.Router()

const { createBudget, getBudget, editBudget } = require('../controllers/budgetController')

budgetRouter.route('/').post(createBudget).get(getBudget)
budgetRouter.route('/:id').patch(editBudget)

module.exports=budgetRouter