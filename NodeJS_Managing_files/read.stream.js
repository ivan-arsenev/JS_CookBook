const { createReadStream } = require('fs');

const stream = createReadStream('./data/app.log', {
  highWaterMark: 9550, //max number of bytes that will read once
  encoding: 'utf8'
});

stream.on('data', data => {
  stream.pause();
  console.log(data);
  setTimeout(() => {
    stream.resume();
  }, 2000);
});

// stream reads by default 64kb of data
// call1 64kb of data
// call2 30kb of data
// so it cuts butes of data
