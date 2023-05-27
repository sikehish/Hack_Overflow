const Expense = require('../models/expenseModel');
const { sendMail } = require('../utils/mailFunc');
const validator=require('validator');
const asyncWrapper=require('express-async-handler')

exports.getAllExpenses=asyncWrapper(async (req, res)=>{
    const data = await Expense.find({})

    if(!data){
        res.status(404)
        throw new Error('No expenses found')
    }

    res.status(200).json({
        status:'success',
        data
    })
})

exports.createExpense=asyncWrapper(async (req, res)=>{

    let { title, tag, amount } = req.body
    let uid = req.user

    title=title.trim()
    tag=tag.trim()
    
    if(isNaN(amount)){
        res.status(400)
        throw new Error('Invalid amount')
    }

    if()

    res.status(200).json({
        status:'success',
        data
    })
})
