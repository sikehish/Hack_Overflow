const express=require('express')
const app=require('../app')
const expenseRouter= express.Router()

const { createExpense, getAllExpenses, deleteExpense, editExpense, getAnalysis } = require('../controllers/expenseController')

expenseRouter.route('/').get(getAllExpenses).post(createExpense)
expenseRouter.route('/:id').patch(editExpense).delete(deleteExpense)
expenseRouter.route('/analysis').get(getAnalysis)

module.exports=expenseRouter