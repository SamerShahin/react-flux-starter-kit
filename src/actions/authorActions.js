"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');
var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);

        //Dispatch the action
        // every action have a type and a data.
        //the dispatcher will notify all the stores that an author was created.
        Dispatcher.dispatch({
           actionType: ActionTypes.CREATE_AUTHOR,
           author: newAuthor
        });
    }
};

module.exports = AuthorActions;