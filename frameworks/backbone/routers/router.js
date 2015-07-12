var Backbone            = require("backbone")
    , _                 = require("underscore")
    , DirectoryView     = require("./../views/DirectoryView")
//    , ContactView       = require("./../views/ContactView")

module.exports = Backbone.Router.extend({

    initialize: function() {
        //create instance of master view
        this.directory = new DirectoryView();
    },

    routes: {
        "":         "_home",
        "contact/:contactId": "_openContact"
    },

    _home: function () {
        this.directory.removeContacts();
        this.directory.render();
    },
    _openContact: function (id) {
        //        contactView.render();
//        var contactView = new ContactView({
//            model: this.directory.collection.get(id)
//        });
        this.directory.removeContacts();
        this.directory.renderContact(this.directory.collection.get(id));

//        this.directory.remove();

//        this.$el.append(contactView.render().el);
    }

});