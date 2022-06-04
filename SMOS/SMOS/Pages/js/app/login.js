$(document).ready(function () {
    $('.log-button').click(async function (event) {
        event.preventDefault()
        //if($("#username").)
        //let userid = $.post('../../api/login')
        var userid = 0;
        let response = await $.post("../../api/login", $('#form').serialize(), function (data) {

            userid = data.userid
            localStorage.setItem("userid", userid)
            jwt = data.jwt
            localStorage.setItem("jwt", jwt)
        });
        console.log(response)
    });
    
});