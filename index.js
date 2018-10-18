var express = require("express");
var bodyParser = require("body-parser");
var Titles = require('./models/models'); //created model loading here
var  mongoose = require('mongoose');

var app = express();
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var routes = require('./routes/routes'); //importing route
routes(app);

var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});