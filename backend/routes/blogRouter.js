const express=require('express')
const blogRouter=express.Router()

const { createblog,getallblog} = require('../controllers/blogController')

blogRouter.route('/').post(createblog)
blogRouter.route('/').get(getallblog)

module.exports=blogRouter