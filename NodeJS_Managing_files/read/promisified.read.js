const { convertCsv } = require('../csv.parse');
const fs = require('fs');
const { promisify } = require('util');
module.exports.read = () => {
  const readFilePromise = promisify(fs.readFile);
  // with promise
  readFilePromise('./data/pulitzer-circulation-data.csv', 'utf8')
    .then(data => console.table(convertCsv(data)))
    .catch(error => console.log(error));

  // async/await version
  const read = async () => {
    const data = await readFilePromise(
      './data/pulitzer-circulation-data.csv',
      'utf8'
    );
    console.table(convertCsv(data));
  };

  read();
};
