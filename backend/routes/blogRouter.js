const express=require('express')
const blogRouter=express.Router()

const { createblog,getallblog,deleteblog,editblog} = require('../controllers/blogController')

blogRouter.route('/').get(getallblog).post(createblog)
blogRouter.route('/:id').delete(deleteblog).patch(editblog)

module.exports=blogRouter