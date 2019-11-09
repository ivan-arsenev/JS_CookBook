const { convertCsv } = require('./csv.parse');
const { readFile } = require('fs');

readFile('./data/pulitzer-circulations-data.csv', 'utf8', (err, data) => {
  const vals = convertCsv(data);

  console.table(vals);
});
