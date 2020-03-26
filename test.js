const args = process.argv.slice(2)
console.log(args[0]);

const save = require('instagram-save');
 
save(args[0], 'myDir').then(res => {
  console.log(res.file);
});