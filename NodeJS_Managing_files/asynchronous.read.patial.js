const { convertCsv } = require('./csv.parse');
const { open, read } = require('fs');

open('./data/pulitzer-circulation-data.csv', (err, fd) => {
  // Creates and allocate new buffer 200bytes long

  const buffer = Buffer.alloc(200);
  read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
    console.log('and more 🚍');
  }); //start from 0 byte and read full buffer
});
