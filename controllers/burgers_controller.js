var express = require("express");
var router = express.Router();
var burger = require("../models/burgerCode.js");

var db = require("../models");

// module.exports = function(router) {
	router.get("/", function(req, res) {
		db.Burger.findAll({}).then(function(results) {
			// console.log(results);
			// console.log(db);
			
			// console.log(db.Burger[0]);
			// res.json(results);
			res.render("index", results);
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
// };	


module.exports = router;





// router.get("/", function(req, res) {
// 	burger.all(function(data) {
// 		var hbsObject = {
// 			burgers: data
// 		};
// 		console.log(hbsObject);
// 		res.render("index", hbsObject);
// 	});
// });

// router.post("/api/burgers", function(req, res) {
// 	burger.create([
// 		"burger_name"
// 	], [
// 		req.body.burger_name
// 	], function(result) {
// 	    res.json({ id: result.insertId });
// 	    console.log("a burg has been added");
// 	});
// });

// router.put("/api/burgers/:id", function(req, res) {
// 	var condition = "id = " + req.params.id;

// 	console.log("condition", condition);

// 	burger.update ({
// 		devoured: req.body.devoured
// 	}, condition, function(result) {
// 		if (result.changedRows == 0) {
// 	    	return res.status(404).end();
//   		} else {
// 	  		res.status(200).end();
// 	  	}
// 	});
// });
// // this is exported to server.js
// module.exports = router;


