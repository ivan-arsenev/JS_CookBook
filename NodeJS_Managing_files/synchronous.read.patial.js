const fs = require('fs');

const fd = fs.openSync('./data/app.log');

let count = 0;
do {
  const buffer = Buffer.alloc(200); // initialize with 0 every time

  count = fs.readSync(fd, buffer, 0, buffer.length, null); // return number of bytes read | first 200 bytes || when it's null node will start with last point when he stoped

  // get data display to screen
  console.log(buffer.toString());
} while (count > 0);
