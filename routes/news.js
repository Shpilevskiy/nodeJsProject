var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();
var UserModel = require('../models/user').UserModel;
var config = require('../config');

var dogsJson = require('../json_data/dogs.json'); // get article file
var catsJson = require('../json_data/cats.json'); // get article file
var rabbitsJson = require('../json_data/rabbits.json'); // get article file


router.get('/', function (req, res) {
    var newsArticle = req.query.article;

    var resultAnswer;
    if (newsArticle == dogsJson.page) resultAnswer = dogsJson;
    if (newsArticle == catsJson.page) resultAnswer = catsJson;
    if (newsArticle == rabbitsJson.page) resultAnswer = rabbitsJson;


    if (resultAnswer) res.json(resultAnswer);
    else res.json("Error: error");

    res.render('newsPage', {
        title: resultAnswer.title,
        date: resultAnswer.date,
        rate: resultAnswer.rate,
        text: resultAnswer.text,
        category: resultAnswer.category,
        sources: resultAnswer.sources,
        author: resultAnswer.author
    }
    )
});

module.exports = router;
