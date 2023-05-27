const Budget=require('../models/budgetModel')
const asyncWrapper=require('express-async-handler')

exports.createBudget=asyncWrapper(async(req,res)=>{
    const budgetData={...(req.body),uid:req.user};
    const data = await Budget.create(budgetData)

    if(isNaN(data.budget) || !(data.budget)){
      res.status(400)
      throw new Error('Invalid amount')
  }

    res.status(200).json({
      status:'success',
      data : data
  })
})

exports.getBudget=asyncWrapper(async(req,res)=>{
    const data=await Budget.find({uid:req.user});

      if(data<0 || !data || !(data.length)){
        res.status(404)
        throw new Error('Budget has to be a positive number')
      }

    res.status(200).json({status:'success',
    data});
})

exports.editBudget=asyncWrapper(async(req,res)=>{
    const budgetData=await budget.findOneAndUpdate({uid:req.user},req.body,{
      new: true,
      runValidators: true
    })
})