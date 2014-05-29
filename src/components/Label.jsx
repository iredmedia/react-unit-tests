/**
 * @jsx React.DOM
 */

var Label = React.createClass({
    handleClick: function(){
        this.props.children = "Text After Click";
        this.setState({liked: false});
    },

    render: function () {
        return (<p ref="p" onClick={this.handleClick}>{this.props.children}</p>);
    }
});

