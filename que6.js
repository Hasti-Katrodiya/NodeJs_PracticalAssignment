var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('./abc.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./abc.txt', 'utf-8'));

console.log("zip file Decompressed Successfully..!!");