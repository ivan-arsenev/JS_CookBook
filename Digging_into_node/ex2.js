#!/usr/bin/env node

"use strict";
let util = require('util')
let path = require("path")
let fs = require("fs")

// let getStdin = require("get-stdin")

let args = require("minimist")(process.argv.slice(2), {
    boolean: ['help'],
    string: ['file']
})

let BASE_PATH = path.resolve(
    process.env.BASE_PATH || __dirname
)

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
    let outStream = inStream;
    let targetStream = process.stdout
    outStream.pipe(targetStream)
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
    console.log("--in, -                 process the file")
    console.log('')
}