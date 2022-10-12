$(document).ready(function () {
    $('.create-account-reg').click(function (event) {
        event.preventDefault()
        switch (true) {
            case $('#username').val() == '' && $('#password').val() == '':
                $('.errormsg').html("Error: Please enter username and password!")
                return;
            case $('#username').val() == '':
                $('.errormsg').html("Error: Please enter username!")
                return;
            case $('#password').val() == '':
                $('.errormsg').html("Error: Please enter password!")
                return;
        }
        $.post("../../api/adduser", $('#form').serialize(), function (data) {
            switch (true) {
                case data.statusCode == "409":
                    $('.errormsg').html("Error: User already exists!");
                    break;
                default:
                    $('.errormsg').attr("class", "errormsg greentext")
                    $('.errormsg').html("Success!")
                    setTimeout(function () {
                        location.href = "login.html";
                    }, 1000);
            }
        });
    });
});