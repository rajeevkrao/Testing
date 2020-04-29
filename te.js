var ig = require('instagram-scraping');

ig.scrapeUserPage('ashishchanchlani').then(result => {
  console.dir(result.medias[0]['shortcode']);
  
});