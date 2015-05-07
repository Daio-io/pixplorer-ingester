'use strict';

var WordModel = require('./words.model');
var fs = require('fs');

exports.startIngest = function() {

    fs.readFile('./ingest/words.json', function (err, data) {

        var wordsList = JSON.parse(data);

        wordsList.map(function (item) {

            new WordModel({word: item.word}).save(function (err) {

                if (err) {
                    console.log('Error adding word: ', item.word, err);
                }
                else {
                    console.log(item.word, 'Added to DB');
                }

            });

        });

    });

};