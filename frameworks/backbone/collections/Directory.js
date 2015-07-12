var _               = require("underscore")
    , Backbone      = require("backbone")
    , ContactModel  = require("./../models/ContactModel")


module.exports = Backbone.Collection.extend({
//    model: ContactModel,
    url: "http://gateway.marvel.com:80/v1/public/characters?ts=1&apikey=047d34076dca78bfb1fd6ba191996354&hash=aab07edc087e0ae82a8ddbea3b300086"
});