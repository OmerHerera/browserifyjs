/** @jsx React.DOM */

var React   = require("react")
    , Heroe = require("./Heroe.jsx")

module.exports = React.createClass({
    render: function() {
        return (
            <div class="row" id="contacts">
                <Heroe id={this.props.id} name={this.props.name} picture={this.props.picture} description={this.props.description} />
            </div>
        )
    }
});