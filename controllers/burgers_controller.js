var db = require("../models");
var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
        // console.log(results);
        // console.log(db);
        var hbsObject = {
        	burgers: results
        };
        // console.log(db.Burger[0]);
        // res.json(results);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(results) {
        res.json({ id: results.insertId });
        console.log("a burg has been added");
        // res.json(results);
        // res.render("index", results);

    })
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update ({
        devoured: true,
        where: {
            id: req.body.id
        }
    }).then(function(results) {
        // res.json(results);
        res.render("index", results);

    });
});

module.exports = router;