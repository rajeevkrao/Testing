const cheerio = require('cheerio');
const got = require('got');

const vgmUrl= 'https://www.instagram.com/ashishchanchlani/';

got(vgmUrl).then(response => {
  const $ = cheerio.load(response.body);
  console.log($.html);
  $('a').each((i, link) => {
    const href = link.attribs.href;
    console.log(href);
  });
}).catch(err => {
  console.log(err);
});