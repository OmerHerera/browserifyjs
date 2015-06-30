var _               = require("underscore")
    , $             = require("jquery")
    , Backbone      = require("backbone")
    , ContactView   = require("./../views/ContactView")
    , Directory     = require("./../collections/Directory")
    , data          = require("./../../../data/characters.json")

module.exports = Backbone.View.extend({
    el: $("#contacts"),

    initialize: function () {
        this.views      = [];

        var contacts = data.results;
        this._setThumbnail(contacts);
        this.collection = new Directory(contacts);

//        this.collection = new Directory();
//        var that = this;
//        this.collection.fetch({
//            success: function (result) {
//                that._setThumbnail(result.models[0].attributes.data.results);
//                that.collection.add(result.models[0].attributes.data.results);
//                that.render();
//            },
//            error: function (err) {
//            }
//        });


    },

    render: function () {
        var that = this;
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },

    renderContact: function (item) {
        var contactView = new ContactView({
            model: item
        });

        this.$el.append(contactView.render().el);
        this.views.push(contactView);
    },


    removeContacts: function () {
        _.each(this.views, function (view) {
            view.remove();

        }, this);

        this.views.length = 0;
    },
    _setThumbnail: function (results) {
        _.forEach(results, function (item, key) {
            if (item.thumbnail && item.thumbnail.path && item.thumbnail.extension) {
                results[key].picture = item.thumbnail.path + "/portrait_xlarge." + item.thumbnail.extension;
            }
//            console.log(results[key].picture);
        });
    }

});
