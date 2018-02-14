"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        {/*if the path is not set then the path = the name*/}
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="about" path="about" handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')} defaultProps="" />
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
    </Route>
);

module.exports = routes;