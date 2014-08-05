define(
	['jquery', 'underscore', 'backbone',
	'text!modules/clients/templates/clientsTemplate.html'
	], 
	function ($, _, Backbone, templates) {
    var exports = {};

    if(!window.clientsTemplate) {
    	window.clientsTemplate = document.createElement("div");
    	$(window.clientsTemplate).append(templates);
    }
   	
    var clientViewItem = exports.clientViewItem =  Backbone.View.extend({
  		tagName : 'div',
	    className : 'ClientViewItem',
	    template : _.template( $(window.clientsTemplate).find(".client_view_item").html()),
	    events : {
	    },
	    initialize : function() {
	    	
	    },
	    render : function() {
	    	console.log(this.model);
	    	this.$el.html(this.template({model : this.model}));
	    	console.log(this.$el);
	    	return this;
	    }
    });

    return exports;
});
