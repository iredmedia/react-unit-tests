/**
 * @jsx React.DOM
 */

// Sets the child property to hello world when clicked (for example, how a button/toggle/throbber would be tested)
var HelloWorld = React.createClass({
    handleClick: function(){
        this.props.children = "Hello World";
        this.setState({liked: false});
    },

    render: function () {
        return (
            <p ref="p" onClick={this.handleClick}>{this.props.children}</p>
        );
    }
});

