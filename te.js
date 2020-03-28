const { parse } = require('node-html-parser');
const got = require('got');

const vgmUrl= 'https://www.instagram.com/ashishchanchlani/';

got(vgmUrl).then(response => {
  parser(response.body);
}).catch(err => {
  console.log(err);
});

function parser(html){
  var data = parse(html);
  console.log(data.querySelector('a'));
}