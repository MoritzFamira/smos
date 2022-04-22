$(document).ready(function () {
  //checks if visited website first time
  if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', "../css/theme-dark.css");
  }
  //change stylesheet
  $('#theme').attr('href', localStorage.getItem('theme'));
  //change logo
  if (localStorage.getItem('theme').includes("hacker")) {
    $('.logo').attr('src', "../img/logo-green.png");
  }
  //theme changer onclick
  $('.theme-dark').click(function () { swapStyleSheet("../css/theme-dark.css") });
  $('.theme-light').click(function () { swapStyleSheet("../css/theme-light.css") });
  $('.theme-hacker').click(function () { swapStyleSheet("../css/theme-hacker.css") });
});

//swaps style sheet
function swapStyleSheet(sheet) {
  //change stylesheet and localstorage var
  $('#theme').attr('href', sheet);
  localStorage.setItem('theme', sheet);
  //change logo
  if (sheet.includes("hacker")) {
    $('.logo').attr('src', "../img/logo-green.png");
  }
  else {
    $('.logo').attr('src', "../img/logo.png");
  }
}