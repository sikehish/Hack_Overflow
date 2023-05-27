const Expense = require('../models/expenseModel');
const { sendMail } = require('../utils/mailFunc');
const validator=require('validator');
const asyncWrapper=require('express-async-handler')

exports.getAllExpenses=async (req, res)=>{
    const data = await Expense.find({})

    if(!data){
        
    }

}