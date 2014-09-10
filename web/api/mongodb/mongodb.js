var account = {
login : 'erabany',
password : 'zohon182'
};

var mongoose = require('mongoose');
var mongodbUrl = 'mongodb://'+account.login+':'+account.password+'@ds061248.mongolab.com:61248/zohon';
mongoose.connect(mongodbUrl);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('error',function (err) {
	console.log('Mongoose default connection error: ' + err);
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});