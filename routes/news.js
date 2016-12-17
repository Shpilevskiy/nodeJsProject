var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();
var UserModel = require('../models/user').UserModel;
var config = require('../config');

router.get('/', function (req, res) {
    // var newsArticle = req.query.loginError
    // res.json('status: removed')

    res.render('newsPage')
});

module.exports = router;
