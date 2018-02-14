"use strict";

var React = require('react');
var Input = require('../common/textInput');

var authorForm = React.createClass({

    render: function () {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input name="firstName"
                    placeholder="First Name"
                    label="Last Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}/>
                <br />
                <Input name="lastName"
                       placeholder="Last Name"
                       label="Last Name"
                       value={this.props.author.lastName}
                       onChange={this.props.onChange}/>
                <br />
                <input type="submit" value="Save" className="btn btn-default"/>
            </form>
        );
    }
});

module.exports = authorForm;