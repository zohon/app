var http = require("http");
var fs = require('fs');
var counter = 0;
var port = Number(process.env.PORT || 5000);


var webDirectory = "./web/";

var server = http.createServer(function(req, res) {

  counter++;
  console.log("Request: " + req.url + " (" + counter + ")");
  
  if(req.url == "/index.html") {

    fs.readFile(webDirectory+"index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;

  }

  res.setHeader("Content-Type", "text/html");
  res.end("<p>Hello World. Request counter: " + counter + ".</p>");

});

console.log("Starting web server at " + port);
server.listen(port);