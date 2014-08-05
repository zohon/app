define(['jquery', 'underscore', 'backbone', 'text!../modules.json'], function ($, _, Backbone, modulesJSON) {

    var exports = {};

    var load = exports.load =  function (module) {

            var listModules = JSON.parse(modulesJSON);
            
            var titleModule = listModules[module];

            var urlModule = "../modules/"+titleModule;

            // getConfig module
            var module_url = "text!"+urlModule+"/"+titleModule+".json";

            require([module_url], function(moduleJson) {

            });
    }


    return exports;

});