

$("#booty").hide();
$("#PPP").hide();

$("button").click(function() {
    $("#PPP").show();
});

$("#PPP").dblclick(function() {
   $("#booty").fadeIn();
});
$("#patch").hide();

$("#PPP").dblclick(function() {
   $("#patch").show();
});
$("#booty").click(function() {
$("body").css("background-image","url('https://vignette.wikia.nocookie.net/spongebob/images/e/eb/PaintythePirate.jpg/revision/latest?cb=20121116031105')"); 
});

$("#treasure").hide();

$("h1").click(function() {
  $("#big").hide();
  $("body").css("background-image","none");
  $("#treasure").show();
});


