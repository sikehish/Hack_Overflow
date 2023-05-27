const express=require('express')
const budgetRouter= express.Router()

const { createBudget, getBudget, editBudget } = require('../controllers/expenseController')

budgetRouter.route('/').post(createBudget)
budgetRouter.route('/:id').patch(editBudget).get(getBudget)

module.exports=BudgetRouter