var path = require("path");
var burger = require("../models/burgerCode.js");
// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    // cms route loads cms.html
    get("/cms", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
    });

    // blog route loads blog.html
    get("/blog", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    // authors route loads author-manager.html
    get("/authors", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    });
};