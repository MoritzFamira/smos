$(document).ready(function () {
    $('.log-button').click(async function (event) {
        event.preventDefault()
        let response = await $.post("../../api/login", $('#form').serialize(), function (data) {
            localStorage.setItem("userid", data.userid)
            localStorage.setItem("jwt", data.jwt)
        });
        console.log(response.statusCode)
        
    });
    
});