$(document).ready(() => {
  $("#next").on("click", () => {
    $("#first_row").animate({
      marginLeft: 0,
    });
    $("#first_row").fadeOut("fast", function () {
      $("#first_row").fadeIn();
    });

    $("#second_row").animate({
      marginLeft: -20,
    });
    $("#second_row").fadeOut("fast", function () {
      $("#second_row").fadeIn();
    });
  });
  $("#prev").on("click", () => {
    $("#first_row").animate({
      marginLeft: -260,
    });
    $("#first_row").fadeOut("fast", function () {
      $("#first_row").fadeIn();
    });

    $("#second_row").animate({
      marginLeft: -260,
    });
    $("#second_row").fadeOut("fast", function () {
      $("#second_row").fadeIn();
    });
  });
});
