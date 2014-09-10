define([
    'jquery',
    'underscore',
    'backbone',

    'modules/realisations/collections/realisationsCollection',
    'modules/realisations/models/realisationModel',
    'modules/realisations/views/realisationsView'

    ], function ($, _, Backbone, collection, model, view) {

    var exports = {};

    exports.collection =  collection;
    exports.model =  model;
    exports.view =  view;

    return exports;
});