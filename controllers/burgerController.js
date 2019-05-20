var express = require("express");
var router = express.Router();

// import model to use its DB function
var burger = require("../models/burger.js");

// Create routes
router.get("/", function (req, res) {
    burger.showAll().then(function (result) {
        console.log(result);

        res.render("index", { burger: result });
    }).catch(function (err) {
        console.log(err);
    });
});

router.post("/api/burger", function (req, res) {
    console.log(req.body);

    burger.add(req.body.burger_name).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });
});

router.put("/api/burger/:id", function (req, res) {

    burger.devour(req.params.id).then(function (result) {
        console.log(result);
        res.json(result);
    }).catch(function (err) {
        console.log(err);
    });

});

router.delete("/api/burger/delete", function (req, res) {
    burger.cleanUp().then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
    });
});


module.exports = router;