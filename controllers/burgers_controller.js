var db = require("../models");
var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
        var hbsObject = {
        	burgers: results
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(results) {
        res.json({ id: results.insertId });
        console.log("a burg has been added");
    })
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update ({
        devoured: true
    	}, {    
        where: {
            id: req.params.id
        }
    }).then(function(results) {
        res.json(results);
        // res.render("index", results);

    }).catch(function(err) {
    	res.json(err);
    });
});

module.exports = router;