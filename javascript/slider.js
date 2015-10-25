$(function() {

  $("#slide2").hide();
  $("#slide3").hide();
  $("#slide4").hide();
  $("#slide5").hide();
  $("#slide6").hide();
  $("#slide7").hide();
  $("#slide8").hide();
  $("#slide9").hide();
  $("#slide10").hide();
  $("#slide11").hide();
  $("#slide12").hide();

  function hide () {
    $("#slide1").hide();
    $("#slide2").hide();
    $("#slide3").hide();
    $("#slide4").hide();
    $("#slide5").hide();
    $("#slide6").hide();
    $("#slide7").hide();
    $("#slide8").hide();
    $("#slide9").hide();
    $("#slide10").hide();
    $("#slide11").hide();
    $("#slide12").hide();
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

  $("#number4").on('click', function () {
    hide();
    $("#slide4").show();
  })

  $("#number5").on('click', function () {
    hide();
    $("#slide5").show();
  })

  $("#number6").on('click', function () {
    hide();
    $("#slide6").show();
  })  

  $("#number7").on('click', function () {
    hide();
    $("#slide7").show();
  })

  $("#number8").on('click', function () {
    hide();
    $("#slide8").show();
  })

  $("#number9").on('click', function () {
    hide();
    $("#slide9").show();
  })    

  $("#number10").on('click', function () {
    hide();
    $("#slide10").show();
  })

  $("#number11").on('click', function () {
    hide();
    $("#slide11").show();
  })

  $("#number12").on('click', function () {
    hide();
    $("#slide12").show();
  })
});

