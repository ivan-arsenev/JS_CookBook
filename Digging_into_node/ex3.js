#!/usr/bin/env node

"use strict";
let util = require('util')
let path = require("path")
let fs = require("fs")
let Transform = require('stream').Transform // transform stream constructor to step in meedle of stream pipe
var zlib = require('zlib') // to compress 
// let getStdin = require("get-stdin")

let args = require("minimist")(process.argv.slice(2), {
    boolean: ['help', 'in', 'out', 'compress', 'uncompress'],
    string: ['file']
})

let BASE_PATH = path.resolve(
    process.env.BASE_PATH || __dirname
)


let OUTFILE = path.join(BASE_PATH, 'out.txt')


if (process.env.HELLO) {
    console.log(process.env.HELLO)
}

if (args.help) {
    printHelp();
}
else if (args.in || args._.includes('-')) {
    processFile(process.stdin)

}
else if (args.file) {
    let stream = fs.createReadStream(path.join(BASE_PATH, args.file))
    processFile(stream)
}
else {
    error("Incorrect usage.", true)
}

function processFile(inStream) {
    let outStream = inStream

    // this step unzip
    if (args.uncompress) {
        let gunzipStream = zlib.createGunzip()
        outStream = outStream.pipe(gunzipStream)
    }

    let upperStream = new Transform({
        // transforming writable stream to read chunks of data and change it to upperCase
        transform(chunk, enc, cb) {
            this.push(chunk.toString().toUpperCase())
            //setTimeout(cb, 500)
            cb()
        }
    })

    outStream = outStream.pipe(upperStream)

    if (args.compress) {
        let gzipStream = zlib.createGzip();
        outStream = outStream.pipe(gzipStream)
        OUTFILE = `${OUTFILE}.gz`
    }

    let targetStream
    // output to console (writable stream)
    if (args.out) targetStream = process.stdout
    else targetStream = fs.createWriteStream(OUTFILE); // Make a file stream to dump stream data to other file 

    outStream.pipe(targetStream) // pipe readable outStream to writable stram target
}

function error(msg, includeHelp = false) {
    console.error(msg)
    if (includeHelp) {
        console.log("")
        printHelp();
    }
}

function printHelp() {
    console.log('ex1 usage')
    console.log('')
    console.log("ex1.js --file=[FILENAME]")
    console.log('')
    console.log('--help                  print this help')
    console.log("--file=[FILENAME]       process the file")
    console.log("--in                    process stdin")
    console.log("--out                   print to stnout")
    console.log("--compress              gzip the output")
    console.log("--uncompress            un-gzip the input")
    console.log("EXAMPLE USAGE")
    console.log("copy in memory zip file and pipe it to out program that takes that stream and uncompress it to console")
    console.log('cat out.txt.gz | ./ex2.js --uncompress --in --out')
}