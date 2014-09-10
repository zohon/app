define(
	['jquery', 'underscore', 'backbone', 
	'masonry',
	'text!modules/realisations/templates/realisationsTemplate.html',
	'modules/realisations/views/realisationViewItem'
	], 
	function ($, _, Backbone, Masonry, templates, realisationViewItem) {
    var exports = {};

    if(!window.realisationsTemplate) {
    	window.realisationsTemplate = document.createElement("div");
    	$(window.realisationsTemplate).append(templates);
    }

    var realisationView = exports.realisationView =  Backbone.View.extend({
  		tagName : 'div',
	    className : "RealisationView",
	    template : _.template($(window.realisationsTemplate).find(".realisation_view").html()),
	    events : {
	    },
	    initialize : function() {

	    	this.listenTo(this.collection, 'add', this.addItem);
	    	this.listenTo(this.collection, 'sync', this.initMasonry);

	    },
	    render : function() {
	    	this.$el.html(this.template());
	    	this.$el.find('.listRealisation').attr('id','realisations');
	    	this.loadAllItems();
	    	return this;
	    },
	    loadAllItems : function() {
	    	console.log("loadAllItems");
	    	this.collection.each(_.bind(function(model, index) {
	    		this.addItem(model);
	    	},this));

	    	this.initMasonry();
	    },
	    addItem : function(model) {
	    	item = new realisationViewItem.realisationViewItem({model : model});
	    	this.$el.find('.listRealisation').append(item.render().$el);
	    	this.initMasonry();
	    },
	    initMasonry : function() {
			var container = this.$el.find('.listRealisation')[0];

			if(this.timeoutInitMasonry) {
				clearTimeout(this.timeoutInitMasonry);
			}

			if($(container).width() <= 100 || $(container).height() <= 0) {
		    	this.timeoutInitMasonry = setTimeout(_.bind(function(){
		    		this.initMasonry()
		    	},this), 100);
			} else {
				var msnry = new Masonry( container, {
				  // options
				  itemSelector: '.RealisationViewItem'
				});
			}

	    }
    });
	  
    return exports;

});
