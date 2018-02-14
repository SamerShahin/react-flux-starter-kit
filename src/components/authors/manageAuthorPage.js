"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var manageAuthorPage = React.createClass({

    getInitialState: function () {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },
    setAuthorState: function(event){
      /* set the author state one a field is changed*/
      var field = event.target.name;
      var value = event.target.value;
      this.state.author[field] = value;
      return this.setState({author: this.state.author});
    },
    render: function () {
        return (
          <div>
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}/>
          </div>
        );
    }
});

module.exports = manageAuthorPage;