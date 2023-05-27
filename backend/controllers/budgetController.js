const budget=require('../models/budgetModel')
const asyncWrapper=require('express-async-handler')

exports.createBudget=asyncWrapper(async(req,res)=>{
    const budgetData=req.body;
    const budgetInstance = new Budget(budgetData);

budgetInstance.save((err) => {
  if (err) {
    console.error('Error saving data:', err);
  } else {
    console.log('Data saved successfully');
  }
})
})

exports.getBudget=asyncWrapper(async(req,res)=>{
    const budgetData=await budget.find({uid:req.user});
    res.status(200).json({budgetData});
})
exports.editBudget=asyncWrapper(async(req,res)=>{
    const budgetData=await budget.findOneAndUpdate({uid:req.user})


})