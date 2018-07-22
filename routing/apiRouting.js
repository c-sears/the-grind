// handle all api routing

const { article, comment } = require('../controller')
const scrape = require('../scraping')

module.exports.handleRequest = app =>{

    // Scrape for new articles and save new content
    app.get('/scrape', (req,res)=>{
        scrape()
        .then(art =>{
            for(const x of art) {
                article.saveArticle(x)
            }
        })
        .then(() => res.send(200))
    })
    
    // Send back all saved articles
    app.get('/articles', (req,res)=>{
        article.getArticles()
            .then(articles => res.json(articles))
    })

    // Grab one article with all comments
    app.get('/getComments/:id', (req,res)=>{
        const article_id = req.params.id
        article.getArtComments(article_id)
            .then(article => res.json(article))
    })

    // Save comment on article
    app.post('/addComment/:id', (req,res)=>{
        comment.saveComment(req.body, req.params.id)
            .then(() => res.send(200))
    })
}
