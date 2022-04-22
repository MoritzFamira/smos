$(window).on("load", function () {
    $(".loader-wrapper").delay(100).fadeOut("slow");
});
// DELETE .delay(100) just for testing
function updateScroll(){
    var element = document.getElementById('console');
    element.scrollTop = element.scrollHeight - element.clientHeight;
}