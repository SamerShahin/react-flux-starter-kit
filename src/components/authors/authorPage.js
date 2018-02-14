"use strict";
var React = require('react');
var AuthorApi = require('../../api/authorApi.js');
var AuthorList = require('./authorList.js');
var Router = require('react-router');
var Link = Router.Link;

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        //make sure that the component is mounted to the dom
        if(this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },
    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;