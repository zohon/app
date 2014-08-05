define([
    'jquery',
    'underscore',
    'backbone',

    'modules/clients/collections/clientsCollection',
    'modules/clients/models/clientModel',
    'modules/clients/views/clientView'

    ], function ($, _, Backbone, collection, model, view) {

    var exports = {};

    exports.collection =  collection;
    exports.model =  model;
    exports.view =  view;

    return exports;
});