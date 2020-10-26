const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        name: { type: String, required: true },
        imgURL: { type: String, required: true },
    },
    //This is where we get the 'Created at:' & 'Updated at:'
    { timestamps: true }
)

module.exports = mongoose.model('posts', Post)