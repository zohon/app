requirejs.config({
    paths: {
        'jquery': 'lib/jquery-1.11.1.min',
        'underscore': 'lib/underscore-min',
        'backbone' : 'lib/backbone-min',
        'text' : 'lib/text',
        'bootstrap' : 'lib/bootstrap.min',
        'masonry' : 'lib/masonry.pkgd.min',
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
        bootstrap: {
          deps: ["jquery"],
          exports: "bootstrap"
        },
        masonry: {
          deps: ["jquery"],
          exports: "masonry"
        }, 
        jquery: {
            exports: '$'
        },
    }
});