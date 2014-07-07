require.config({
    paths: {
                //tries to load jQuery from Google's CDN first and falls back
                //to load locally
        "jquery": "libs/jquery/jquery",
        "underscore": "../bower_components/underscore/underscore",
        "backbone": "../bower_components/backbone/backbone",
        "backbone.localStorage": "../bower_components/backbone.localStorage/backbone.localStorage",
        "react": "lib/react",
        "JSXTransformer": "lib/JSXTransformer",
    },
    shim: {
        "backbone": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Backbone"
        },
        "react":{
            "exports":"React"
      }
    }
});