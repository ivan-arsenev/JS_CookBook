const { appendFile } = require('fs');
// by using flag: a
// we append content to last line of file   { flag: 'a' }, if using writeFile
appendFile(
  './data/app.log', //path
  `64.186.102.8 - - [21/09/2019:10:07:21 -0500] "TEST!!!!!!!!!!" 203 7698`, // content to write
  err => (err ? console.log(err) : console.log('file saved'))
);
