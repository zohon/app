requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.10.2.min',
        'underscore': 'lib/underscore',
        'backbone' : 'lib/backbone',
        'text' : 'lib/text',
        'modules' : 'modules'
    },
    shim: {
        underscore: {
          exports: '_'
        },
        backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
        },
        jquery: {
            exports: '$'
        },
    }
});