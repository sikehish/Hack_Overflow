const blog=require('../models/blogModel')
const asyncWrapper=require('express-async-handler');
const { find } = require('../models/expenseModel');

exports.createblog=asyncWrapper(async(req,res)=>{
    const blogData={...(req.body),uid:req.user};
    const data = await blog.create(blogData)
    res.status(201).json({data})
})

exports.getallblog=asyncWrapper(async(req,res)=>{
    const data = await blog.find({})
    if(!data){
        return res.status(404).json({message:"No blog post found"})
    }
    res.status(200).json({data});
})
exports.deleteblog=asyncWrapper(async(req,res)=>{
    const data = await blog.findByIdAndDelete(req.params.id)
    // if(!data){
    //     return res.status(404).json({message:"NO such blog post exists"})
    // }   
    res.status(200).json({deletedblog: data})
})
exports.editblog=asyncWrapper(async(req,res)=>{
    const id=req.params.id;
    // if(!blog.isValid(id))
    // {
    //     return res.status(404).json({message:"NO such blog post exists"})
    // }
    const data = await blog.findByIdAndUpdate(id,req.body,{ new: true, runValidators: true})
    res.status(200).json(data)
})