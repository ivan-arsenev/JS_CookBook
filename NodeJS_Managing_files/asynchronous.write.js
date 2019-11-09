const { constants, writeFile } = require('fs');

// all async func need a callback
// flag for if file already exist
writeFile(
  './data/newapp.log',
  `64.186.102.8 - - [21/09/2019:10:07:21 -0500] "TEST!!!!!!!!!!" 203 7698`,
  {
    encoding: 'utf8'
  },
  err => (err ? console.log(err) : console.log('file saved'))
);
