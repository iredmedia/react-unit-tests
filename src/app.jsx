/**
 * @jsx React.DOM
 */

var App = React.createClass({
    render: function(){
        return (
            <div>
                {"Application is Ready"}
                <Label>{"Label Text"}</Label>
                <HelloWorld>{"This will fail at first, then work"}</HelloWorld>
            </div>
        );
    }
});

var appInstance = <App key="AppKey" />;

React.renderComponent(
    appInstance,
    document.getElementById('container')
);

