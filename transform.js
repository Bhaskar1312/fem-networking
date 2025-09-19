var fs = require('fs');
var through = require('through2');

fs.createReadStream('greetz.txt')
.pipe(through(toUpper))
.pipe(process.stdout);


function toUpper(buf, enc, next) {
	next(null, buf.toString().toUpperCase());
}
