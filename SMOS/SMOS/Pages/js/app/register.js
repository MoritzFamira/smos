$(document).ready(function () {
    $('.create-account-reg').click(function (event) {
        event.preventDefault()
        //if($("#username").)
        //let userid = $.post('../../api/login')
        //var userid = 0;
        $.post("../../api/adduser", $('#form').serialize() ,function(data){
            console.log(data)
            /*userid = data.userid
            localStorage.setItem("userid",userid)
            jwt = data.jwt
            localStorage.setItem("jwt",jwt)*/
        });
    });

});