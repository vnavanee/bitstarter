var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var outfile = "index.html";
var readfile =fs.readFileSync(outfile);
var btos = readfile.toString();

response.send(btos) ;
fil});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

