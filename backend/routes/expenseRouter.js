const express=require('express')
const app=require('../app')
const expenseRouter= express.Router()

const { checkAuth } = require('../middleware/checkAuth')
const { createExpense, getAllExpenses, deleteExpense, editExpense } = require('../controllers/expenseController')

expenseRouter.route('/').get(getAllExpenses).post(createExpense)
expenseRouter.route('/:id').patch(editExpense).delete(deleteExpense)

module.exports=expenseRouter