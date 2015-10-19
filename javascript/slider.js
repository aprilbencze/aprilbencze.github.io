$(function() {

  $("#slide2").hide();
  $("#slide3").hide();

  function hide () {
    $("#slide1").hide();
    $("#slide2").hide();
    $("#slide3").hide();
  }


  $("#number1").on('click', function () {
    hide();
    $("#slide1").show();
  })

  $("#number2").on('click', function () {
    hide();
    $("#slide2").show();
  })

  $("#number3").on('click', function () {
    hide();
    $("#slide3").show();
  })
});

