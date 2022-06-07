$(document).ready(function () {
    //checks if visited website first time
    if (localStorage.theme == null) {
        localStorage.theme = "theme-dark";
    }
    if (localStorage.cart == null) {
        localStorage.cart = '[]';
    }
    //website loader
    $(".loader-wrapper").delay(150).fadeOut("slow");
    //search
    setTimeout(function () {
        $('input[type=search]').on('search', function(){
            window.location.href = "https://www.google.com/search?q=" + this.value;  
        });
        $('.navbar-search-button').click(function () {
            if($('.navbar-desktop-input').val()!=''){
                window.location.href = "https://www.google.com/search?q=" + $('.navbar-desktop-input').val();
            } else{
                window.location.href = "https://www.google.com/search?q=" + $('.navbar-mobile-input').val();
            }
        });
    });
});




function getFileName() {
    //return filename
    return window.location.pathname.split("/").pop().slice(0, -5);
}

function getPrefix() {
    //checking if file is index.html or not
    if (getFileName() != "index") {
        return '../'
    }
    return '';
}

function reloadJS(file) {
    //removing and adding the given js file
    src = $('script[src$="' + file + '"]').attr("src");
    $('script[src$="' + src + '"]').remove();
    $('<script/>').attr('src', src).appendTo('head');
}