// var path = require("path");
// var burger = require("../routes/api-routes.js");
// // Routes
// // export to server.js
// module.exports = function(app) {

//     // index route 
//     app.get("/", function(req, res) {
//         burger.all(function(data) {
//             var hbsObject = {
//                 burgers: data
//             };
//             console.log(hbsObject);
//             res.render("index", hbsObject);
//         // res.sendFile(path.join(__dirname, "../public/blog.html"));
//         });
//     });
// };