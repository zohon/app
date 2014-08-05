define(['jquery', 'underscore', 'backbone', 'modules/clients/models/clientModel'], function ($, _, Backbone, model) {

    var exports = {};

    var clientsCollections = exports.clientsCollections =  Backbone.Collection.extend({
    	model : model.clientModel
    });

    return exports;

});
