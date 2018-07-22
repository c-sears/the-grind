const db = require('../models')

const saveComment = (comment, article_id)=>{

    return db.Comment.create(comment)
        .then(dbComment => db.Article.findOneAndUpdate({_id:article_id}, {$push:{comments:dbComment._id}}))

}

module.exports = {
    saveComment
}