define(
	['jquery', 'underscore', 'backbone',
	'text!modules/realisations/templates/realisationsTemplate.html'
	], 
	function ($, _, Backbone, templates) {
    var exports = {};

    if(!window.realisationsTemplate) {
    	window.realisationsTemplate = document.createElement("div");
    	$(window.realisationsTemplate).append(templates);
    }
   	
    var realisationViewItem = exports.realisationViewItem =  Backbone.View.extend({
  		tagName : 'div',
	    className : 'RealisationViewItem realisation',
	    template : _.template( $(window.realisationsTemplate).find(".realisation_view_item").html()),
	    events : {

	    	'click .content-realisation img' : 'showMoreInfo',
	    	'click .content-realisation realisation-info' : 'showMoreInfo',
	    	'click .content-realisation .realisation-info-complete .close' :'closeInfo'

	    },
	    initialize : function() {
	    	
	    },
	    render : function() {

	    	this.$el.html(this.template({model : this.model}));

	    	if(this.model.get('width')) {
	    		this.$el.addClass('w'+this.model.get('width'));
	    	}

	    	return this;
	    },
	    showMoreInfo : function() {
	    	console.log("showMoreInfo");
			if(!this.$el.hasClass('active')) {
				this.$el.addClass('active');
			}
	    },
	    closeInfo : function() {

			if(this.$el.hasClass('active')) {
				this.$el.removeClass('active');
			}
	    }	    
    });

    return exports;
});
