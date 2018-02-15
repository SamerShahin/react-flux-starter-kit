"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./routs');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

//Router.HistoryLocation works in IE10+
// it is used to avoid making urls with Hash i.e www.example.com/#Home - > www.example.com/Home
Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});