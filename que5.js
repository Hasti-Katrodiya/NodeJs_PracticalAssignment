var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./abc.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./abc.txt.gz'));

console.log("txt file Compressed Sucessfully!!");