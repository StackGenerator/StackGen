const { Pool } = require("pg")

const PG_URI = 'postgres://mytuyety:VEA7eWYZtIjieNwgv0uIXes1aCGdyKga@chunee.db.elephantsql.com/mytuyety';

const pool = new Pool({
    connectionString: PG_URI
});

pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected to PostgresDB");
  });

  module.exports = {
    query: (text, params, callback) => {
      console.log("executed query", text);
      return pool.query(text, params, callback);
    },
  };