// Import and Initialize express
var express = require("express");
var app = express();

// PORT use for heroku
var PORT = process.env.PORT || 8080;

// Import Handlebats
var exphbs = require("express-handlebars");

// Import Routes
var routes = require("./controllers/burgerController.js");

// Serve static content to the app from the public directory
app.use(express.static("public"));

// Patse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give server access to Routes
app.use(routes);

// Start Server
app.listen(PORT, function () {
    console.log("Server listening on: https://localhost:" + PORT);
});