const cheerio = require('cheerio')
const axios = require('axios')

/**
 * @returns (Promise)
 */
const scrape = async ()=>{
    
    const articles = await axios.get('https://www.nytimes.com/section/technology')
        .then(resp => cheerio.load(resp.data))
        .then($ =>{
            const holder = []
            $('div.stream').find('ol').children('li').each((i,elem)=>{

                const article = $(elem).find('div.story-body').find('a.story-link')
                const title = $(article).find('h2.headline').text().trim()
                const link = $(article).attr('href')
                const summary = $(article).find('p.summary').text().trim()
                const image = $(article).find('img').attr('src')
                const date = $(elem).find('footer.story-footer').find('time.dateline').text()
                
                holder.push({title,link,summary,image,date})
            })
            return holder
        })
        
    // console.log(articles)
    return await articles
}



module.exports = scrape

