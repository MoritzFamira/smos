$(document).ready(function () {
  //get prefix
  var prefix = getPrefix();
  //change stylesheet
  $('#theme').attr('href', prefix + "css/" + localStorage.theme + ".css");
  //let website first load
  setTimeout(function () {
    //change logo
    if (localStorage.theme.includes("hacker")) {
      $('.logo').attr('src', prefix + "img/logo_green.png");
    }
    //theme changer onclick 
    $('.theme-button').click(function () { swapStyleSheet($(this).attr("class").substring(13)) });
  });

  //swaps style sheet
  function swapStyleSheet(sheet) {
    // new Audio('../../audio/gomme.mp3').play()
    //change stylesheet and localstorage var
    $('#theme').attr('href', prefix + "css/" + sheet + ".css");
    localStorage.theme = sheet;
    //change logo
    if (sheet.includes("hacker")) {
      $('.logo').attr('src', prefix + "img/logo_green.png");
    }
    else {
      $('.logo').attr('src', prefix + "img/logo.png");
    }
  }
});