"use strict";
var keyMirror = require('react/lib/keyMirror');
//Key mirror basically copies the key to the value of the Key(as a string)
module.exports = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null,
    UPDATE_AUTHOR: null,
    DELETE_AUTHOR: null
});