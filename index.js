'use strict';

var dbConnect = require('./db/db.connect');
var ingester = require('./ingester');

// Connect to DB
dbConnect();
