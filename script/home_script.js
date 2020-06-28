var hoogte_img = $('#onderlaag').height()
$('#index_div_box').css('height',hoogte_img);

$(document).ready(function(){
  function playslider(){
  $('#bram_schuin').animate({
    right:20,
    bottom:15 + '%',
  },2000, function() {
    $("#bram_schuin").delay(0).attr("src","css/brammetje5.svg");

    $("#bram_schuin").delay(1700).animate({
      right:-200,
      bottom:-20
    },1500, function() {
      $('#bram_schuin').delay(2100).animate({
      },0, function() {
      $("#bram_schuin").attr("src","css/brammetje3.svg");
      });
    });
  });
  $('#adelaar_lucht').delay(2500).animate({
    left:110 + '%'
  },7000, function() {
    $('#adelaar_lucht').css('left','-400px');
  });

  setTimeout(function(){
  $("#bram_schuin").attr("src","css/brammetje3.svg");
  },2100);

  setTimeout(function(){
  $("#bram_schuin").attr("src","css/brammetje4.svg");
  },3200);

  setTimeout(function(){
  $("#adelaar_lucht").attr("src","css/adelaar4.svg");
  },5000);

  setTimeout(function(){
  $("#adelaar_lucht").attr("src","css/adelaar3.svg");
  },5200);

  setTimeout(function(){
  $("#adelaar_lucht").attr("src","css/adelaar4.svg");
  },6000);

  setTimeout(function(){
  $("#adelaar_lucht").attr("src","css/adelaar3.svg");
  },6200);
}



playslider();

});

setInterval(function(){
function playslider(){
$('#bram_schuin').animate({
  right:20,
  bottom:15 + '%',
},2000, function() {
  $("#bram_schuin").delay(0).attr("src","css/brammetje5.svg");

  $("#bram_schuin").delay(1700).animate({
    right:-200,
    bottom:-20
  },1500, function() {
    $('#bram_schuin').delay(2100).animate({
    },0, function() {
    $("#bram_schuin").attr("src","css/brammetje3.svg");
    });
  });
});

$('#adelaar_lucht').delay(2500).animate({
  left:110 + '%'
},7000, function() {
  $('#adelaar_lucht').css('left','-400px');
});

setTimeout(function(){
$("#bram_schuin").attr("src","css/brammetje3.svg");
},2100);

setTimeout(function(){
$("#bram_schuin").attr("src","css/brammetje4.svg");
},3200);
}

playslider();

setTimeout(function(){
$("#adelaar_lucht").attr("src","css/adelaar4.svg");
},3000);

setTimeout(function(){
$("#adelaar_lucht").attr("src","css/adelaar3.svg");
},3200);

setTimeout(function(){
$("#adelaar_lucht").attr("src","css/adelaar4.svg");
},5000);

setTimeout(function(){
$("#adelaar_lucht").attr("src","css/adelaar3.svg");
},5200);

setTimeout(function(){
$("#adelaar_lucht").attr("src","css/adelaar4.svg");
},6000);

setTimeout(function(){
$("#adelaar_lucht").attr("src","css/adelaar3.svg");
},6200);

},10000);
