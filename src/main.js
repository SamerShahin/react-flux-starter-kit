//since jQuery is a global variable we cannot use "use strict" here
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage.js');
var About = require('./components/about/aboutPage.js');
var Header = require('./components/common/header.js');
var Authors = require('./components/authors/authorPage.js');

(function (win) {
    //we added all our code in this function so that its variables become local and not global ,
    // and this way we can use "use strict" inside the function without interfering with the global variables such as jQuery.
    //this method is called ifi or so
    "use strict";
    var App = React.createClass({
        render: function() {
            var Child;
            //Some minimal dummass routing method
            switch (this.props.route){
                case 'about': Child = About; break;
                case 'authors': Child = Authors; break;
                default: Child = Home;
            }
            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route}/>, document.getElementById("app"));
    }
    //event that triggers when the hash of the url changes
    win.addEventListener('hashchange', render);
    render();
})(window);
