const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');

try {
  const data = readFileSync('./data/pulitzer-circulation-data.csv', 'utf8');

  console.table(convertCsv(data));
} catch (error) {
  console.log(`Error with file: ${error}`);
}
