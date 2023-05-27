const Expense = require('../models/expenseModel');
const { sendMail } = require('../utils/mailFunc');
const validator=require('validator');
const asyncWrapper=require('express-async-handler');
const Budget = require('../models/budgetModel');

exports.getAllExpenses=asyncWrapper(async (req, res)=>{
    // const data = await Expense.find({})

    // if(!data || !(data.length)){
    //     res.status(404)
    //     throw new Error('No expenses found')
    // }

    const pipeline = [
        {
            $group: {
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

// Get the current date
const currentDate = new Date();

// Extract the year and month from the current date
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

exports.getAnalysedData=asyncWrapper(async (req,res)=>{
    const pipeline = [
        {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: [{ $year: '$createdAt' }, currentYear] },
                      { $eq: [{ $month: '$createdAt' }, currentMonth] }
                    ]
                  }
                }
        },
        {
            $group: {
            _id: "$tag" ,
            expenses: {
                $sum: "$amount",
                
            },
                count:{
                    $sum :1
                }
        }}
      ];

      const aggregatedData= await Expense.aggregate(pipeline)
      console.log(req.user)

          if(!aggregatedData ||!(aggregatedData.length)){
        res.status(404)
        throw new Error('No expenses found')
    }
    const { tags, budget }= await Budget.findOne({ uid: req.user})
    console.log(tags)
      const tagData=tags.map((ele, i)=>{
          return {...aggregatedData[i],
            name: ele.name.toLowerCase(),
            targetExpense: ele.percentage/100 * budget
        }
    })
    console.log(budget + JSON.stringify(tagData))
      
    res.status(200).json({
        status:'success',
        budget,
        data: tagData,
    })
})