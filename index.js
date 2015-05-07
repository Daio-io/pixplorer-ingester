'use strict';

var connectionString = process.env.DB_STRING || 'mongodb://localhost/pixplorer';
var dbConnect = require('./db/db.connect');
var ingester = require('./ingest/pixplorer.ingester');

// Connect to DB
dbConnect(connectionString);
ingester.startIngest();
