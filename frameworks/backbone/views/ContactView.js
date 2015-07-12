var _           = require("underscore")
    , $         = require("jquery")
    , Backbone  = require("backbone")
//    , template = require("./../templates/contactTemplate.hbs");


module.exports = Backbone.View.extend({
    tagName: "article",
    className: "contact-container",
    template: $("#contactTemplate").html(),
//    template: template,

    render: function () {
        var tmpl = _.template(this.template);
//        $(this.el).html(template(this.model.toJSON()));
        $(this.el).html(tmpl(this.model.toJSON()));
        return this;
    }
//    ,
//
//    _open: function () {
//        debugger;
//        alert("OPEN");
//    }
});