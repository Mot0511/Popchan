const osmosis = require('osmosis');
osmosis
    .get('https://www.kinoafisha.info/rating/movies/')
    .find('.ratings_list')
    .set(['.movieList_item'])
    .data(data => {
        console.log(data);
    })
// const axios = require('axios')
// const fs = require('fs')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom
//
// const pagesNumber = 0
// const baseLink = 'https://www.kinoafisha.info/rating/movies/?page='
// let page = 0
//
// for (let i = page; i <= pagesNumber; i++){
//     let link = baseLink + page
//     axios.get(link)
//         .then(res => {
//             let currentPage = res.data
//             const dom = new JSDOM(currentPage)
//             const elements = dom.window.document.querySelector('.movieList_item').innerHTML
//             console.log(elements)
//         })
// }
