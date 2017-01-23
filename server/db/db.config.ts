interface IDBConfig {
    connection: {},
    schema: string
}

var pg = require('pg');

var connectionString = 'postgres://localhost:5432/dreamhouse';
var schema = '';

if (process.env.DATABASE_URL) {
  connectionString = process.env.DATABASE_URL;
  schema = 'salesforce.';
}

var client = new pg.Client(connectionString);

client.connect();

client.query('SELECT * FROM salesforce.Account', function(error, data) {
  if (error !== null) {
    require('../db/demo.js')(client);
  }
});

export const myConfig: IDBConfig = {
    connection: client,
    schema: schema
};