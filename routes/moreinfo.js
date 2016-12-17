var express = require('express');
var cookieParser = require('cookie-parser');
var jwt = require("jsonwebtoken");
var config = require('../config');

var router = express.Router();

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


router.get('/', function(req, res, next) {

    res.render('moreinfo', {
    });
});

module.exports = router;
