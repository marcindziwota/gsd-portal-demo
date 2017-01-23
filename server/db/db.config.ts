interface IDBConfig {
    connection: {},
    schema: string
}

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dreamhouse';
var client = new pg.Client(connectionString);
var schema = 'salesforce.';
client.connect();

client.query('SELECT * FROM salesforce.Account', function(error, data) {
  if (error !== null) {
    require('../db/demo.js')(client);
  }
  else {
    var schema = 'salesforce.';
  }
});

export const myConfig: IDBConfig = {
    connection: client,
    schema: schema
};