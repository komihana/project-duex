var moment = require('moment');
var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {


// ROUTE for adding new client
app.post("/api/investor/new", function(req, res) {
    console.log("here is a new investor");
    db.User.create(req.body).then(function(dbInvestors) {
        res.json(dbInvestors);
    });
});



};