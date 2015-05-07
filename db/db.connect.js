'use strict';

var mongoose = require('mongoose');

module.exports = function() {

    mongoose.connect(process.env.DB_CONNECTION,
        {
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        });

};