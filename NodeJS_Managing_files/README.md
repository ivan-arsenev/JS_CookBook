# This some summary of course on working files with node.js

## Reasons to Read a File

1. Load data into database
2. Display contents

### Files in this project

- promisified.read.js -async/await and promise file reading [link][1]
- csv.parse.js -split hanlder function for useing csv files [link][2]
- asynchronous.read.patial.js -async read only part of file using buffer [link][3]
- asynchronous.read.js -Asynchronously reads the entire contents of a file.[link][4]
- asynchronous.read.chunk.js -Async reads chunks of file, main problem is that data is going non ordered in right positions, becouse of async. [link][5]
- synchronous.read.patial.js -treveling chunk by chunk through file in right order [link][6]
- file.descriptor.error.js -opens a lot of files, and example how bad is not closing files after opening them [link][7]
- asynchronous.write.js -write string to file, but overwrite it [link][8]
- asynchronous.append.js -s [link][9]

---

- data/pulitzer-circulation-data.csv --simple data csv file
- data/app.log --simple file log data

---

#### Any time you have a file descriptor, you are responsible for closing the file

Any time you have a file descriptor, you are responsible for closing the file.
**No need to Close**
readFile("data.csv", "utf8", (err, data) => {

        })

**Need to close, becouse we pass file descriptor**
readFile(fs, "utf8", (err, data) => {

        })

**File Flags:**

- **r** Read mode
- **W** Write mode
- **a** Append mode

  **Addon flags**

- **X** Exclusive
- **+** Multiple modes
- **S** Synchronous modes

w+ read and write mode
a+ read and append
as append synch

## Requirements for building a file

- Open file
- Get list of files
- Iterate over list of file
- Write to file
- Close file

---

[1]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/promisified.read.js 'promisified'
[2]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/csv.parse.js 'csv.parse'
[3]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/read/asynchronous.read.patial.js 'asynchronous patial'
[4]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/read/asynchronous.read.js 'asynchronous'
[5]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/read/asynchronous.read.chunk.js' 'asynchronous chunks'
[6]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/read/synchronous.read.patial.js' 'asynchronous chunks'
[7]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/read/synchronous.read.patial.js' 'bad file opening'
[8]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/asynchronous.write.js' 'async write to file'
[9]: https://github.com/ivan-arsenev/JS_CookBook/blob/master/NodeJS_Managing_files/asynchronous.append.js' 'async write to file'
