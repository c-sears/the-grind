// handle all html routing requests

const { article } = require('../controller')

module.exports.handleRequest = app =>{

    // Landing page / articles page
    app.get('/',(req,res)=>{
        article.getArticles()
            .then(articles =>{
                res.render('index', {articles})
            })
    })

    //  Comments page / single article
    app.get('/comment/:id',(req,res)=>{
        article.getArtComments(req.params.id)
            .then(article =>{
                console.log(article)
                res.render('comment', {article})
            })
    })
}