const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    // define title
    text: {
        type: String,
        required: true
    },
    // original poster
    OP: {
        type: String,
        required: true
    },
    // Time stamp
    timeStamp: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', commentSchema)

// exporting comment data model
module.exports = Comment