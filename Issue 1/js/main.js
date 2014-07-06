require.config({
    baseUrl: "js/",
    paths: {
        "jquery": "../bower_components/jquery/jquery",
        "underscore": "../bower_components/underscore/underscore",
        "backbone": "../bower_components/backbone/backbone",
        "backbone.localStorage": "../bower_components/backbone.localStorage/backbone.localStorage"
    },
    shim: {
        'underscore': {
              'exports': '_'
            },
        "backbone": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Backbone"
        },
        'backbone.localStorage': {
              deps: ['backbone'],
              exports: 'Backbone'
            }   
    }
});
require([
    'jquery',
    'backbone',
    'models/todo',
    'collections/todos',
    'views/todo-view',
    'views/app-view',
    'routers/router',
    'app'
  ], function($, Backbone, ModelTodo, CollectionTodo, TodoView, AppView ,Routers, app) {
        
        var ENTER_KEY = 13;
        var ESC_KEY = 27;
        console.log(app);

});