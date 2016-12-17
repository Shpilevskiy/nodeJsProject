var express = require('express');
var cookieParser = require('cookie-parser');
var jwt = require("jsonwebtoken");
var config = require('../config');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.cookies.auth) {
        res.redirect('/main');
    }

    var isLoginError = req.query.loginError;
    var isRegError = req.query.regError;
    var isRegSuccess = req.query.regSuccess;

    var msgText = '';
    if (isLoginError)  msgText = 'Логин или пароль введен неверно!';
    if (isRegError)  msgText = 'Логин уже занят!';
    if (isRegSuccess)  msgText = 'Пользователь зарегистрирован!';

  res.render('loginPage', {
      title: "Добро пожаловать",
      isLoginError: isLoginError,
      isRegistrationError: isRegError,
      isRegSuccess: isRegSuccess,
      msgText: msgText
  });
});

module.exports = router;
