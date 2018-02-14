"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        //this functions is triggered once the user navigates to the page
        willTransitionTo: function (transition, params, query, callback) {
            /*when a user navigates to this page a popup will appear that would require him to confirm his action*/
            if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
                transition.about();
            } else {
                callback();
            }
        },
        //this functions is triggered once the user navigates from the page(to another)
        willTransitionFrom: function (transition, component) {
            if (!confirm('Are you sure you want to such an exiting page?')) {
                transition.about();
            }
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browsify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;