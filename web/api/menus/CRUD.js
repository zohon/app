function generateSchema(mongoose) {

	var menusSchema = mongoose.Schema({
	    name : String,
	    type : String,
	    amount : Number,
	    collaborative : Boolean
	})

	return menusSchema;
}

module.exports.generateSchema = generateSchema;