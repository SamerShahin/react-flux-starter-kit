"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events');
/*The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
 It will return the target object.*/
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

//use object assign to create a new object , extend that object to utilize EventEmitter.prototype, and finally add the event function/object .
var AuthorStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function () {
        return _authors;
    },
    getAuthorById: function (id) {
        return _.find(_authors, {id: id});
    }
});
Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR :
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR :
            //replace the existing author with the new author (by id)
            var existingAuthor = _.find(_authors, {id: action.author.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR :
            var authorToDelete = _.find(_authors, {id: action.id});
            var authorToDeleteIndex = _.indexOf(_authors, authorToDelete);
            _authors.splice(authorToDeleteIndex, 1);
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        default:
            //
    }
});

module.exports = AuthorStore;