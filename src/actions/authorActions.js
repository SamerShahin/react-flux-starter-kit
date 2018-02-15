"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

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
    },
    updateAuthor: function (author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);
        //Dispatch the action
        // every action have a type and a data.
        //the dispatcher will notify all the stores that an author was created.
        Dispatcher.dispatch({
           actionType: ActionTypes.UPDATE_AUTHOR,
           author: updatedAuthor
        });
    },
    deleteAuthor: function (id) {
        AuthorApi.deleteAuthor(id);
        Dispatcher.dispatch({
           actionType: ActionTypes.DELETE_AUTHOR,
           id: id
        });
    }
};

module.exports = AuthorActions;