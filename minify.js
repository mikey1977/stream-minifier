var fs = require('fs');
var util = require('util');
var stream = require('stream');

//create array from terminal input
var inputArray = process.argv[2];

// read from file app.css
var readableStdin = fs.createReadStream('app.css');

//create app.min.css file
var writeableStdout = fs.createWriteStream('app.min.css');

var transformInput;


readableStdin.on('data', function(chunk) {


  writeableStdout.write()
})
//read - in

//transform stream - removing line breaks

//write - out minified file