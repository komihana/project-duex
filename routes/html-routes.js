// var moment = require('moment');
var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    })

    app.get("/survey", function (req, res) {
        res.render("survey");
    })

    app.get("/results", function (req, res) {
        res.render("results");
    })
}
