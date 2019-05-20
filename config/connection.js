require("dotenv").config();
var mysql = require("mysql");

// define MySql connection
var connection = mysql.createConnection({
    host: localhost,
    port: 3306,
    user: root,
    password: process.env.DB_PASS,
    database: "burger_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

// Export conenction as module for ORM use
module.exports = connection;