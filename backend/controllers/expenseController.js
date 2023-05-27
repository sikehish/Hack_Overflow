const Expense = require('../models/expenseModel');
const { sendMail } = require('../utils/mailFunc');
const validator=require('validator');
const asyncWrapper=require('express-async-handler');
const Budget = require('../models/budgetModel');
const { getAnalysedData } = require('../utils/analysedData');

exports.getAllExpenses=asyncWrapper(async (req, res)=>{
    // const data = await Expense.find({})

    // if(!data || !(data.length)){
    //     res.status(404)
    //     throw new Error('No expenses found')
    // }
    console.log(typeof(req.user))
    const pipeline = [
                { $match: { $expr : { $eq: [ '$uid' , { $toObjectId: req.user } ] } } }
,
           { $group: {
                _id: { $substr: ["$createdAt", 0, 9] },
                expenses: {
                    $push: "$$ROOT",
                },
            },
        },
      ];

      const aggregatedData= await Expense.aggregate(pipeline)

      if(!aggregatedData || !(aggregatedData.length)){
        res.status(404)
        throw new Error('No expenses found')
    }
      
    res.status(200).json({
        status:'success',
        data: aggregatedData
    })
})

exports.createExpense=asyncWrapper(async (req, res)=>{

        console.log(req.body)
    let { title, tag, amount } = req.body
    let uid = req.user

    if(title!=undefined) title=title.trim()
    if(tag!=undefined)  tag=tag.trim()

    if(!title || !tag){
        res.status(400)
        throw new Error('Invalid data')
    }
    
    if(isNaN(amount) || !amount){
        res.status(400)
        throw new Error('Invalid amount')
    }

    const data= await Expense.create({uid, title, tag, amount})

    const { tagData, budget} = await getAnalysedData(req)

    const filteredData = tagData.find(ele => ele.name === tag.toLowerCase())

    const { email, name } = await User.findById(req.user)

    
    const percentage= filteredData.expenses/filteredData.targetExpense * 100

    if(filteredData.expenses>filteredData.targetExpense) {
        const subject = `fintrk: ${tag} expenses is ${percentage}% over Target Expenditure`
        const html= `<h2>Hello, ${name}!</h2>
        <p>Your expenses related to ${tag} have increased. </p>
        <p>Expenses: ${filteredData.expenses} and Target Expense: ${filteredData.targetExpense} </p>`
        sendMail(email,subject, html)
    }

    if(percentage == 100){
        const subject = `fintrk: ${tag} expense has met the target expenditure`
        const html= `<h2>Hello, ${name}!</h2>
        <p>Your expenses related to ${tag} have increased. </p>
        <p>Expenses: ${filteredData.expenses} and Target Expense: ${filteredData.targetExpense}</p>`
        sendMail(email,subject, html)
    }

    if(percentage>90){
        const subject = `fintrk: ${tag} expense is nearing the target expenditure`
        const html= `<h2>Hello, ${name}!</h2>
        <p>Your expenses related to ${tag} have increased. </p>
        <p>Expenses: ${filteredData.expenses} and Target Expense: ${filteredData.targetExpense}</p>`
        sendMail(email,subject, html)
    }

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

    console.log(req.body)
    
    if(isNaN(amount)){
        res.status(400)
        throw new Error('Invalid amount')
    }

    const newDoc= await Expense.findByIdAndUpdate(id, {title, tag, amount},{
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



exports.getAnalysedData=asyncWrapper(async (req,res)=>{

    const { tagData, budget} = await getAnalysedData(req)
      
    res.status(200).json({
        status:'success',
        budget,
        data: tagData,
    })
})