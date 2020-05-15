const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'chatdb';

const client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to db");

  const db = client.db(dbName);

  client.close();
});