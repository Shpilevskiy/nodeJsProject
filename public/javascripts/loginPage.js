$(function() {
    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});



$( document ).ready(function() {
    var inputPasswordField = $("#password");
    var inputConfirmField = $("#confirm-password");
    // var registerButton = $("#register-submit");

    inputPasswordField.on('input', function () {
        var registerButton = document.getElementById("register-submit");
        if (inputPasswordField.val() === inputConfirmField.val()) {
            registerButton.removeAttribute("disabled");
        }
        else registerButton.setAttribute('disabled','disabled');
    });

    inputConfirmField.on('input', function () {
        var registerButton = document.getElementById("register-submit");
        if (inputPasswordField.val() === inputConfirmField.val()) {
            registerButton.removeAttribute("disabled");
        }
        else registerButton.setAttribute('disabled','disabled');
    });

});