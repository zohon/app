exports.generateSchema = function (mongoose) {

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

	return clientsSchema;
}

exports.init = function (mongoose) {
	var clientsSchema = this.generateSchema(mongoose);
  	var clients = mongoose.model('clients', clientsSchema); // init model
	return clients;
}

exports.index = function(mongoose, params) {

	if(params) {
		params.search = {};
	} else {
		params = {};
	}
	
	this.search(mongoose, params);
}

exports.search = function(mongoose, params) {

	search = {};

	if(params && params.search) {
		search = params.search;
	}

	var clients = this.init(mongoose);

	var mongoosedb = mongoose.connection;
	mongoosedb.on('error', console.error.bind(console, 'connection error:'));
	mongoosedb.once('open', function callback () {
	  console.log("We are searching in mongodb");

	  clients.find(search, function (err, clients) {
	  	if(params.callbacks && params.callbacks.success) {
	  		params.callbacks.success.call(this, clients);
	  	}
	  });
		
	});	

}

exports.save = function(mongoose, item) {

	var clients = this.init(mongoose);

	var mongoosedb = mongoose.connection;
	mongoosedb.on('error', console.error.bind(console, 'connection error:'));
	mongoosedb.once('open', function callback () {
	  console.log("We are connected to mongodb");

		item.save(function (err, client) {
	    if (err) return console.error(err);
	    	console.log("client save");
		});	
  
  });
}

module.exports = exports;