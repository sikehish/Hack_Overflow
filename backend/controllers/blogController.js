const blog=require('../models/blogModel')
const asyncWrapper=require('express-async-handler')

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