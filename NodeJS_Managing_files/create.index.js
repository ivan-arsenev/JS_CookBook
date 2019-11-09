const { closeSync, openSync, readdirSync, watch, writeSync } = require('fs');
const camelCase = require('camelcase');

// watch files in read folder if something changes it will update it
watch('./read', () => {
  const indexFd = openSync('./index.js', 'w'); // open a file and write in it

  const files = readdirSync('./read'); // get list of file for export

  files.map(f => {
    const name = f.replace('.js', '');
    console.log(`Adding a file: ${f}`);

    writeSync(
      indexFd,
      `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`
    ); // write line for each file
  });

  closeSync(indexFd); // close file
});
