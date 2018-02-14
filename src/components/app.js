/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars such as jQuery.
$ = jQuery = require('jquery');

var React = require('react');
var Header = require('./common/header.js');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});


module.exports = App;