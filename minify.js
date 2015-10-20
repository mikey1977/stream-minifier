// var fs = require('fs');
// var util = require('util');
// var Transform = require('stream').Transform;
// var inherits = require('util').inherits;


// //create array from terminal input and slice off first two properties
// var inputArray = require('minimist')(process.argv.slice(2));


// // read from file app.css
// var readableStdin = fs.createReadStream(inputArray.input);

// // fs.writeFile(inputArray.output);

// //create app.min.css file
// var writeableStdout = fs.createWriteStream(inputArray.output);

// //constructor
// function Transformer() {
//   Transform.call(this);
// }

// inherits(Transformer, Transform);

// Transformer.prototype._transform = function(chunk, encoding, done) {
//   chunk = chunk.toString().replace(/(\r\n|\n|\r|\s)/gm, "");
//   this.push(chunk);
//   done();
// };


// readableStdin.pipe(new Transformer).pipe(writeableStdout);


//===========================================

var fs = require('fs');
var util = require('util');
var Transform = require('stream').Transform;
var inherits = require('util').inherits;


//create array from terminal input and slice off first two properties
// var inputArray = require('minimist')(process.argv.slice(2));


// read from file app.css
var readableStdin = fs.createReadStream('app.css');

// fs.writeFile(inputArray.output);

//create app.min.css file
var writeableStdout = fs.createWriteStream('app.min.css');

//constructor
function Transformer() {
  Transform.call(this);
}

inherits(Transformer, Transform);

Transformer.prototype._transform = function(chunk, encoding, done) {
  chunk = chunk.toString().replace(/(\r\n|\n|\r|\s)/gm, "");
  this.push(chunk);
  done();
};


readableStdin.pipe(new Transformer).pipe(writeableStdout);