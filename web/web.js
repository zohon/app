var http = require("http");
var url = require("url");
var path = require("path");
var fs = require('fs');
var express = require("express");

var counter = 0;

var port = Number(process.env.PORT || 5000);

var mongoose = require('./api/mongodb/mongodb.js').mongoose();
/*
var parameters = {
callbacks : {
  success : function(data) {
    console.log(data);
  }
}
};

var clients = require('./api/clients/CRUD.js').index(mongoose, parameters);
*/


var clients = require('./api/clients/CRUD.js');

var parameters = {
params : { id: /^53e0d673852539fc13b662d9/ },
callbacks : {
  success : function(data) {
    console.log(data);
  }
}
};

clients.search(mongoose, parameters);


var webDirectory = "web/";

var server = http.createServer(function(request, response) {

  var uri = webDirectory+url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

  var contentTypesByExtension = {
    '.html': "text/html",
    '.css':  "text/css",
    '.js':   "text/javascript"
  };

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      var headers = {};
      var contentType = contentTypesByExtension[path.extname(filename)];
      if (contentType) headers["Content-Type"] = contentType;
      response.writeHead(200, headers);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Starting web server at " + port);