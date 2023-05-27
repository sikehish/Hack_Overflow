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

    if(!title || !tag){
        res.status(400)
        throw new Error('Invalid data')
    }
    
    if(isNaN(amount)){
        res.status(400)
        throw new Error('Invalid amount')
    }

    const data= await Expense.create({uid, title, tag, amount})

    res.status(200).json({
        status:'success',
        data
    })
})

exports.deleteExpense=asyncWrapper(async (req, res)=>{

    const { id } = req.params

    const data= await Expense.findByIdAndDelete(id)

    if (!data) {
        res.status(404)
        throw new Error("Expense doesn't exist")
     }
 

    res.status(204).json({
        status:'success',
        message:'User data deleted successfully.'
    })
})

exports.editExpense=asyncWrapper(async (req, res)=>{

    let { title, tag, amount } = req.body
    const { id } = req.params
    let uid = req.user

    title= title!=undefined && title.trim()
    tag=tag!=undefined && tag.trim()
    
    if(isNaN(amount)){
        res.status(400)
        throw new Error('Invalid amount')
    }

    const newDoc= await Expense.findByIdAndUpdate({id, title, tag, amount},{
        new: true,
        runValidators: true
      })

      if (!newDoc) {
        res.status(404)
        throw new Error("Expense doesn't exist")
      }

    res.status(200).json({
        status:'success',
        data: newDoc
    })
})

