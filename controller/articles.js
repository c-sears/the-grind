const db = require('../models')


const saveArticle = (article)=> db.Article.create(article)


const getArticles = ()=> db.Article.find()

const getArtComments = (art_id)=>{
    return db.Article.findById(art_id)
        .populate('comments')
}


module.exports = {
    saveArticle,
    getArticles,
    getArtComments
}