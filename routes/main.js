var express = require('express');
var cookieParser = require('cookie-parser');
var jwt = require("jsonwebtoken");
var config = require('../config');

var router = express.Router();

var dogsJson = require('../json_data/dogs.json'); // get article file
var catsJson = require('../json_data/cats.json'); // get article file
var rabbitsJson = require('../json_data/rabbits.json'); // get article file

router.use(function (req, res, next) {
    var token = req.cookies.auth;

    if (token) {
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                return res.redirect('/?loginError=true');
            } else {
                // if everything is good, save to request for use in other routes
                console.log(decoded);
                req.decoded = decoded;
                next();
            }
        });
    }
    else {

        // if there is no token
        // return an error
        console.log("bad");
        return res.redirect('/?loginError=true');

    }
});

/* GET home page. */
router.get('/', function(req, res, next) {

    var newsTitles = [dogsJson.title,catsJson.title,rabbitsJson.title];
    var newsPages = [dogsJson.page,catsJson.page,rabbitsJson.page];
    var newsShortcuts = [dogsJson.shortcut,catsJson.shortcut,rabbitsJson.shortcut];


    res.render('main', {
        title: "Главная страница",
        userName: req.decoded._doc.name,
        newsTitles:newsTitles,
        newsPages:newsPages,
        newsShortcuts:newsShortcuts
    });
});

module.exports = router;