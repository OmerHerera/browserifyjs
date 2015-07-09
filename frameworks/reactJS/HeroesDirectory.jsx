/** @jsx React.DOM */

var React   = require("react")
    , Heroe = require("./Heroe.jsx")

module.exports = React.createClass({
    render: function() {
        return (
            <div class="row" id="contacts">
            {
                this.props.heroes.map(function (heroe) {
                    return (<article class="contact-container">
                            <Heroe id={heroe.id} name={heroe.name} picture={heroe.picture} description={heroe.description} />
                            </article>
                            )
                })
            }
            </div>
        )
    }
});