'use strict';

var mongoose = require('mongoose');
// Adding mongoose random plugin to allow random word querying
var random = require('mongoose-random');

var WordSchema = mongoose.Schema({

    word: {
        type: String, index: {
            unique: true,
            dropDups: true
        }
    }

});

WordSchema.plugin(random, {path: 'r'});

var WordModel = mongoose.model('word', WordSchema);

module.exports = WordModel;