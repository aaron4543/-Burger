var orm = require("../config/orm.js");

var burger = {
    showAll: function () {
        return new Promise(function (resolve, reject) {
            orm.selectAll("burger").then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    add: function (burgerName) {
        return new Promise(function (resolve, reject) {
            orm.insertOne("burger_name", burgerName).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    devour: function (burgerId) {
        return new Promise(function (resolve, reject) {
            orm.updateOne("burger", burgerId).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    cleanUp: function () {
        return new Promise(function (resolve, reject) {
            orm.deleteAll("burger", "devoured = true").then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    }
}

module.exports = burger;