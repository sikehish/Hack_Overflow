const express=require('express')
const expenseRouter= express.Router()

const { checkAuth } = require('../middleware/checkAuth')

expenseRouter.route('/').get(getAllExpense).post(createExpense)
expenseRouter.route('/:id').patch(editExpense).delete(deleteExpense)

module.exports=expenseRouter