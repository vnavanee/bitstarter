var express -=require('express');
var fs = require('fs');

var app= express.createServer(express.logger());

app.get('/', function(request, response) {
var outfile = "images/plazapage1.png";
var readfile = fs.readFileSync(outfile);
var btos = readfile.toString();

response.send(readfile);

var port = process.env.PORT || 8081;
app.listen(port, function()  {
console.log("listening on "+port);
});
