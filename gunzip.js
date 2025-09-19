var zlib = require('zlib');
var crypto = require('crypto');
process.stdin
    .pipe(zlib.createGunzip())
    .pipe(crypto.createHash('sha512', { encoding: 'hex' }))
    .pipe(process.stdout);
    // node gunzip.js < greetz.txt.gz
    // shasum -a 512 greetz.txt