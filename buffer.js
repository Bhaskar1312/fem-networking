var split = require('split');
var through = require('through2');

process.stdin
    .pipe(split())
    .pipe(through(function (buf, enc, next) {
        console.log(buf);
        next();
    }))

    // echo -e 'one\ntwo\nthree' |  node buffer.js 