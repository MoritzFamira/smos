$(document).ready(function () {
    $('.create-account-reg').click(function (event) {
        event.preventDefault()
        $.post("../../api/adduser", $('#form').serialize() ,function(data){
            switch (true){
                case data.statusCode == "409":
                    $('.errormsg').html("Error: User already exists!");
                    break;
                default:
                    location.href = "login.html";
            }
        });
    });
});