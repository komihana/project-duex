// var moment = require('moment');
var db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/survey", function (req, res) {
        res.render("survey");
    });
    app.get("/learn", function(req, res){
        res.render("learn");
    });

    app.get("/results/:id", function (req, res) {
        var id = req.params.id;
        console.log(id);
        
        //This is the key to assign the value of the results from the survey

        //Based on the survey results we will match small cap, mid cap, or large cap investment

        db.Investments.findAll({
            where: {
                id: id
            }
        }).then(function (response) {
            res.render("results", {product: response});

            
        });

    })
}