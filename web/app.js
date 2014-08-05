define(['jquery', 'underscore', 'backbone', 'modules/clients/clients'], function ($, _, Backbone, clients) {

	window.clientsCollections = new clients.collection.clientsCollections();
	ClientView = new clients.view.clientView({collection : clientsCollections});

	$('.client').html(ClientView.render().$el);

	window.clientsCollections.add({title : 'test'});

});