define(['jquery', 'underscore', 'backbone', 'modules/realisations/models/realisationModel'], function ($, _, Backbone, model) {

    var exports = {};

    var realisationsCollections = exports.realisationsCollections =  Backbone.Collection.extend({
    	model : model.realisationModel
    });

    return exports;

});
