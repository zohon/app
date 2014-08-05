define(
	['jquery', 'underscore', 'backbone', 

	'text!modules/clients/templates/clientsTemplate.html',
	'modules/clients/views/clientViewItem'
	], 
	function ($, _, Backbone, templates, clientViewItem) {
    var exports = {};

    if(!window.clientsTemplate) {
    	window.clientsTemplate = document.createElement("div");
    	$(window.clientsTemplate).append(templates);
    }

    var clientView = exports.clientView =  Backbone.View.extend({
  		tagName : 'div',
	    className : "ClientView",
	    template : _.template($(window.clientsTemplate).find(".client_view").html()),
	    events : {
	    },
	    initialize : function() {
	    	this.listenTo(this.collection, 'add', this.addItem);
	    },
	    render : function() {
	    	this.$el.html(this.template());
	    	return this;
	    },
	    addItem : function(model) {
	    	item = new clientViewItem.clientViewItem({model : model});
	    	this.$el.find('.listClient').append(item.render().$el);
	    }
    });
	  
    return exports;

});
