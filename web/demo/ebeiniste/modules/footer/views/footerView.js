define(
	['jquery', 'underscore', 'backbone', 
	'masonry',
	'text!modules/footer/templates/footersTemplate.html'
	], 
	function ($, _, Backbone, Masonry, templates) {
    var exports = {};

    if(!window.footersTemplate) {
    	window.footersTemplate = document.createElement("div");
    	$(window.footersTemplate).append(templates);
    }

    var footerView = exports.FooterView =  Backbone.View.extend({
  		tagName : 'div',
	    className : "FooterView col-sm-12",
	    template : _.template($(window.footersTemplate).find(".footer_view").html()),
	    events : {
	    },
	    initialize : function() {
	    },
	    render : function() {
	    	this.$el.html(this.template());
	    	return this;
	    }
    });
	  
    return exports;

});
