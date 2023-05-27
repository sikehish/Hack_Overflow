const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
title: {
type: String,
required: [true, 'title must be provided'],
},
body:{
    type: String,
    required: [true, 'body must be provided'],
}
})
module.exports = mongoose.model('blog', blogSchema)