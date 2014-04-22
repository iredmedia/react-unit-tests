/**
 * @jsx React.DOM
 */

var App = React.createClass({

    render: function(){
        return (
            <div>
                Application not is Ready
                <Label>Label Text</Label>
            </div>
            );
    }
});

var appInstance  = <App key="AppKey" />;

React.renderComponent(
    appInstance,
    document.getElementById('container')
);

