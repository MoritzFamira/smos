$(document).ready(function () {
    var root = document.querySelector(':root');
    changeStyle(root);

    setTimeout(function () {
        $('.theme-button').click(function () {
            localStorage.theme = $(this).attr("class").substring(13);
            changeStyle(root);
        });
    });
});

function changeStyle(root) {
    switch (true) {
        case localStorage.theme == "theme-light":
            setStyle(root, 'rgb(255, 255, 255)', 'rgb(233, 233, 233)', 'rgb(0, 0, 0)', "'Cabin', sans-serif");
            setTimeout(function () { $('.logo').attr('src', getPrefix() + "img/logo.png") });
            break;
        case localStorage.theme == "theme-hacker":
            setStyle(root, 'rgb(18, 18, 18)', 'rgb(0, 0, 0)', 'rgb(41, 194, 21)', 'H4ck3r');
            setTimeout(function () { $('.logo').attr('src', getPrefix() + "img/logo_green.png") });
            break;
        default:
            setStyle(root, 'rgb(50, 50, 50)', 'rgb(40, 40, 40)', 'rgb(255, 255, 255)', "'Cabin', sans-serif");
            setTimeout(function () { $('.logo').attr('src', getPrefix() + "img/logo.png") });
            break;
    }
}

function setStyle(root, bgc, bgcd, tc, fo) {
    root.style.setProperty('--bgc', bgc);
    root.style.setProperty('--bgcd', bgcd);
    root.style.setProperty('--tc', tc);
    root.style.setProperty('--fo', fo);
}