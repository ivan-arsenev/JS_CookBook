const fs = require('fs');

module.exports.read = () => {
  let totalSize = 0;
  fs.stat('./data/app.log', (err, { size }) => (totalSize = size)); // takes size of file

  fs.open('./data/app.log', (err, fd) => {
    const buffer = Buffer.alloc(200);

    // second param is total size / indevidal chunck that will loop through
    for (let i = 0; i < totalSize / buffer.length; i++) {
      fs.read(
        fd,
        buffer,
        0,
        buffer.length,
        i * buffer.length, // position param in read 200bytes * number of iteration
        (err, count, buff) => {
          console.log(buff.toString());
        }
      );
    }
    if (err) console.log(err);
  });
};
