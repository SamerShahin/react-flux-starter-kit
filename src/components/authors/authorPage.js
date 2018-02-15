"use strict";
var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList.js');
var Router = require('react-router');
var Link = Router.Link;

var AuthorPage = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function () {
        //subscribe to the onChange event when the element is being created
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        //onSubscribe from the onChange event when the element is being destroyed
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
      this.setState({authors: AuthorStore.getAllAuthors()});
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