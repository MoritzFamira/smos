$(document).ready(function () {
    $('.log-button').click(async function (event) {
        event.preventDefault();
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
        let response = await $.post("../../api/login", $('#form').serialize(), function (data) {
            localStorage.setItem("userid", data.userid)
            localStorage.setItem("jwt", data.jwt)
        });
        switch (true){
            case response.statusCode=="403":
                $('.errormsg').html("Error: Wrong password or username!")
                break;
            default:
                $('.errormsg').attr("class", "errormsg greentext")
                $('.errormsg').html("Success!")
                setTimeout(function () {
                    location.href = "../index.html";
                }, 1000);
        }
    });
});