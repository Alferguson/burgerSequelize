var db = require("../models/burger.js");

module.exports = function(app) {
	app.get("/", function(req, res) {
		var query ={};
		db.Burger.findAll({
			where: query
		}).then(function(results) {
			res.json(results);
		});
	});

	app.post("/api/burgers", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(results) {
			res.json(results);
		})
	});

	app.put("/api/burgers/:id", function(req, res) {

		db.Burger.update ({
			devoured: true,
			where: {
				id: req.body.id
			}
		}).then(function(results) {
			res.json(results)
		});
	});
};	