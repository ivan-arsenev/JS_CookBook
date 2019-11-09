const { convert } = require('./csv.parse');
const { open, read } = require('fs');

open('./data/pulitzer-circulation-data.csv', 'utf8', (err, fd) => {
  // Creates and allocate new buffer 200bytes long
  const buffer = Buffer.alloc(200);
  read(fd);
});
