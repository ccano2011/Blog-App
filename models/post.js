const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
  },
    //This is where we get the 'Created at:' & 'Updated at:'
    { timestamps: true }
)

module.exports = mongoose.model('Post', Post)