var $                   = require("jquery")
    , Backbone          = require("backbone")
    , Router            = require("./routers/router")

Backbone.$ = $;
$(document).ready(function () {
    var router = new Router();
    Backbone.history.start();
});
