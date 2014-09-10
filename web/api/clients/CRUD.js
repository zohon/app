var mongoose = require('mongoose');

/*
var clientsSchema = mongoose.Schema({
    name: String,
    menus : String,
    collaborative: Boolean,
    total : Number,
    paid : Boolean,
    paid_ticket : Number,
    paid_money : Number,
    ticket_amount : Number
})

clientsSchema.methods.addTicket = function (number) {

	if(!this.paid_ticket) {
		this.paid_ticket = 0;
	}

	if(number) {
		this.paid_ticket = paid_ticket+number;
	} else {
		this.paid_ticket = paid_ticket+1;
	}

}

clientsSchema.methods.paidMoney = function (amount) {
	this.paidMoney = amount;
}

var clients = mongoose.model('clients', clientsSchema);
*/
var clients = mongoose.model('clients');

exports.index = function(params) {

	if(params) {
		params.search = {};
	} else {
		params = {};
	}
	
	this.search(params);
	
}

exports.search = function(params) {

	search = {};

	if(params && params.search) {
		search = params.search;
	}

	clients.find(search, function (err, clients) {

		if(err){
			mongoose.connection.close();
		}else{
			mongoose.connection.close();
			console.log(clients);
			if(params.callbacks && params.callbacks.success) {
				params.callbacks.success.call(this, clients);
			}
		}

	 });

/*
	if(!this.mongoosedb) {
		this.mongoosedb = mongoose.connection;
	}

	this.mongoosedb.once('open', function callback () {
	  console.log("We are searching in mongodb");

	  that.clients.find(search, function (err, clients) {

		if(err){
			mongoose.connection.close();
		}else{
			mongoose.connection.close();
			console.log(clients);
			if(params.callbacks && params.callbacks.success) {
				params.callbacks.success.call(this, clients);
			}
		}

	  });
		
	});	*/

}

exports.save = function(mongoose, item) {
/*
	var clients = this.init(mongoose);

	if(!this.mongoosedb) {
		this.mongoosedb = mongoose.connection;
	} else {

	}
	
	this.mongoosedb.on('error', console.error.bind(console, 'connection error:'));
	this.mongoosedb.once('open', function callback () {
	  console.log("We are connected to mongodb");

		item.save(function (err, client) {
	    if (err) return console.error(err);
	    	console.log("client save");
		});	
  
  });
*/
}

module.exports = exports;