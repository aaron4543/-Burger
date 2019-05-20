var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableName) {
        return new Promise(function (resolve, reject) {
            var queryString = "SELECT * FROM " + tableName + ";";

            connection.query(queryString, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });

        });
    },
    insertOne: function (colName, burgerName) {
        return new Promise(function (resolve, reject) {
            var queryString = "INSERT INTO burger (" + colName + ") VALUES ('" + burgerName + "');";

            connection.query(queryString, function (err, result) {

                if (err) {
                    reject(err);
                }
                resolve(result);
            });

        });
    },
    updateOne: function (tableName, burgerId) {
        return new Promise(function (resolve, reject) {
            var queryString = "UPDATE " + tableName + " SET devoured = true WHERE id = " + burgerId + ";";

            connection.query(queryString, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });

        });
    },
    deleteAll: function (tableName, condition) {
        return new Promise(function (resolve, reject) {
            var queryString = "DELETE FROM " + tableName + " WHERE " + condition + ";";

            connection.query(queryString, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
};

// export module
module.exports = orm;