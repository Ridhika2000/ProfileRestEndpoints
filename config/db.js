const mysql = require("mysql");

// create connection

db = mysql.createConnection({
  host: "localhost",
  user: process.env.user,
  password: process.env.password,
  database: "profiledata",
});

module.exports = db;
