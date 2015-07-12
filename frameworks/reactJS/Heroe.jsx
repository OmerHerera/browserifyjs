/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div class="col-md-4">
                <p href={this.props.id}>{this.props.name}</p>
                <img src={this.props.picture} alt={this.props.name} />
                <p>{this.props.description}</p>
            </div>
        )
    }
});