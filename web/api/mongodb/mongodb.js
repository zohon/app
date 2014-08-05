
function mongooseInit() {
  var account = {
    login : 'erabany',
    password : 'zohon182'
  };

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://'+account.login+':'+account.password+'@ds061248.mongolab.com:61248/zohon');
  return mongoose;
}

module.exports.mongoose = mongooseInit;