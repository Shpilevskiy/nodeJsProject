var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();
var UserModel = require('../models/user').UserModel;
var config = require('../config');


router.post('/registration', function (req, res) {

    UserModel.findOne({
        name: req.body.username
    }, function (err, user) {
        if (user) {
            res.redirect('/?regError=true');
            res.end();
        }
        else {
            var newUser = new UserModel({
                name: req.body.username,
                password: req.body.password,
                admin: false
            });

            newUser.save(function (err) {
                if (err) throw err;

                res.redirect('/?regSuccess=true');
            });
        }
    });
});

router.post('/authenticate', function (req, res) {
    UserModel.findOne({
        name: req.body.username
    }, function (err, user) {
        if (err) throw err;

        if(!user) {
            res.redirect('/?loginError=true');
        } else if (user) {
            if (user.password != req.body.password) {
                res.redirect('/?loginError=true');
            } else {
                var token = jwt.sign(user, config.secret, {
                    expiresIn : 60*60*24 // expires in 24 hours
                });

                res.cookie('auth', token);
                res.writeHead(302, {
                    'Location': '/main'
                });
                res.end();
            }
        }
    })
});

router.get('/removeUsers', function (req, res) {
    UserModel.remove({}, function (err) {
        if (err) console.log(err)
    });
    res.json('status: removed')
});

router.get('/users', function (req, res) {
    UserModel.find({}, function (err, users) {
        res.json(users)
    })
});

module.exports = router;