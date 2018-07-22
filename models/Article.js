const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    // define title
    title: {
        type: String,
        required: true,
        unique: true
    },
    // define link
    link: {
        type: String,
        required: true
    },
    // define description
    summary: {
        type: String,
        required: true
    },
    // define image
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    // referance comments to populate on load
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
})

const Article = mongoose.model('Article', articleSchema)

// exporting article data model
module.exports = Article