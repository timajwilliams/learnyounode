var fs = require('fs')
var file = (process.argv[2])
var buffer = fs.readFileSync(file)
 
var lines = buffer.toString().split("\n").length - 1
console.log(lines)
