const fs = require('fs');

// Any time you have a file descriptor, you are responsible for closing the file
console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync('./data/app.log');
  console.log(fd);

  // adding file closing
}
