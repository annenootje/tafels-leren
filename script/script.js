
$(document).ready(function(){
  $('#start_screen').css('display', 'none');
  $('#rekenscreen').css('display','flex');
  
  rekensom();
  positie_bloem();
  random();
  adelaar();
  
  $('.laadbalk_rekensom div').animate({
    width:400
  },4000, function() {
    $('#rekenscreen').css('display','none');
    $('#canvas').css('display','block');
    $('#container').css('background-color','#95BA8C');
    $('.laadbalk_rekensom div').css('width','0px')
    $('.laadbalk_canvas').css('display','block');
    $('#score_div').css('display','block');
    $('.laadbalk_canvas div').animate({
      width:0
    },50000, function() {
        gameover();
    });
  });

});

function volgende_ronde(){
  $('.laadbalk_canvas').css('display','none');
  $('#canvas').css('display', 'none');
  $('#rekenscreen').css('display','flex');
  $('#snake').css('left','50px');
  $('#snake').css('top','50px');
  $('.fout').css('display','flex');
  
  random();
  rekensom();
  positie_bloem();
  
  $( '.laadbalk_canvas div' ).stop();
  $('.laadbalk_rekensom div').animate({
    width:400
  },3000, function() {
    $('#rekenscreen').css('display','none');
    $('#vol').css('width','200px!important');
    $('#laadbalk_rekensom div').css('width','0px')
    $('#canvas').css('display','block');
    $('#container').css('background-color','#95BA8C');
    $('.laadbalk_rekensom div').css('width','0px')
    $('.laadbalk_canvas').css('display','block');
    $('#score_div').css('display','block');
    $('.laadbalk_canvas div').animate({
      width:0
    },50000, function() {
        gameover();
    });
  });
}

$("body").keydown(function(e) {

  var snake = $('#snake');

  var key_code=e.which||e.keyCode;
    switch(key_code){
      case 37:
        moveLeft();
        break;
      case 38:
        moveUp();
        break;
      case 39:
        moveRight();
        break;
      case 40:
        moveDown();
        break;
    }

function moveLeft(){
  $( snake ).css('left', '-=50px');
}
function moveUp(){
  $( snake ).css('top', '-=50px');
}
function moveRight(){
  $( snake ).css('left', '+=50px');
}
function moveDown(){
  $( snake ).css('top', '+=50px');
}


  setInterval(function(){
    if($(snake).position().left <= 0){
  //   location.reload();
    }
    else if($(snake).position().top <= 0){
  //   location.reload();
    }
    else if($(snake).position().left >= 850){
    // location.reload();
    }
    else if($(snake).position().top >= 550){
     //location.reload();
    }
  },200);

});

punten = 0;

function positie_bloem(){
    setInterval(function(){
      var nummer1a = $( '.nummer1' ).css('top');
      var nummer2a = $( '.nummer2' ).css('top');
      var nummer3a = $( '.nummer3' ).css('top');
      var nummer1b = $( '.nummer1' ).css('left');
      var nummer2b = $( '.nummer2' ).css('left');
      var nummer3b = $( '.nummer3' ).css('left');

//console.log('nummer1 top: ' + nummer1a + ' links: ' + nummer1b)
//console.log('nummer2 top: ' + nummer2a + ' links: ' + nummer2b)
//console.log('nummer3 top: ' + nummer3a + ' links: ' + nummer3b)

    var bram_top = $( '#snake' ).css('top');
    var bram_links = $( '#snake' ).css('left');

  if(bram_top == nummer1a && bram_links == nummer1b){
    punten = punten + 1;
    
    if(punten <= 0){
      punten = 0;
        $('.score').html(punten);
        $('.score').css('color', 'black!important');
    }else{
        $('.score').html(punten);
        $('.score').css('color', 'black!important');
    }
    
    volgende_ronde();
    $( ".laadbalk_canvas div" ).css('width','200px!important')

  } else if(bram_top == nummer2a && bram_links == nummer2b){
    punten = punten - 1;

    if(punten <= 0){
      punten = 0;
      $('.score').html(punten);
      $('.fout').css('display','none');
    //  $('.score').css('color', '#EC6568');
    }else{
      $('.score').html(punten);
      $('.fout').css('display','none');
    //  $('.score').css('color', '#EC6568');
    }

  } else if(bram_top == nummer3a && bram_links == nummer3b){
    punten = punten - 1;
    punten = punten;

    if(punten <= 0){
      punten = 0;
      $('.score').html(punten);
      $('.fout').css('display','none');
  //    $('.score').css('color', '#EC6568');
    }else{
        $('.score').html(punten);
        $('.fout').css('display','none');
    //    $('.score').css('color', '#EC6568');
    }
  }
},100);

}

//knipper ogen

setInterval(function(){
 $("#bram-ogen").attr("src","css/brammetje2.svg");
},2000);

setInterval(function(){
 $("#bram-ogen").attr("src","css/brammetje.svg");
},2030);

setInterval(function(){
 $("#adelaar-ogen").attr("src","css/adelaar2.svg");
},3000);

setInterval(function(){
 $("#adelaar-ogen").attr("src","css/adelaar.svg");
},3030);

//rekensom

function rekensom(){
  var randomgetal = Math.round((Math.random() * 9) + 1);
  var randomgetal2 = Math.round((Math.random() * 9) + 1);
  var randomgetal3 = Math.round((Math.random() * 99) + 1);
  var randomgetal4 = Math.round((Math.random() * 99) + 1);
  var antwoord = randomgetal * randomgetal2;

  $( '#nummer1 p' ).text( antwoord );
  $( '#nummer2 p' ).text( randomgetal3 );
  $( '#nummer3 p' ).text( randomgetal4 );
  $( '#som1' ).text( randomgetal );
  $( '#som2' ).text( randomgetal2 );

  $( '#som1_up' ).text( randomgetal );
  $( '#som2_up' ).text( randomgetal2 );
}

//posities bloemen

function random(){
  var left = ['150', '200', '250', '300', '350', '400', '450', '500', '550', '600', '650', '700', '750', '800', '850', '900'];
  var nieuwleft1 = left[Math.floor(Math.random() * left.length)];
  var nieuwleft2 = left[Math.floor(Math.random() * left.length)];
  var nieuwleft3 = left[Math.floor(Math.random() * left.length)];

  var bovenkant = ['150', '200', '250', '300', '350', '400'];
  var nieuwtop1 = bovenkant[Math.floor(Math.random() * bovenkant.length)];
  var nieuwtop2 = bovenkant[Math.floor(Math.random() * bovenkant.length)];
  var nieuwtop3 = bovenkant[Math.floor(Math.random() * bovenkant.length)];

  $( '.nummer1' ).css('left', nieuwleft1 + 'px');
  $( '.nummer2' ).css('left', nieuwleft2 + 'px');
  $( '.nummer3' ).css('left', nieuwleft3 + 'px');

  $( '.nummer1' ).css('top', nieuwtop1 + 'px');
  $( '.nummer2' ).css('top', nieuwtop2 + 'px');
  $( '.nummer3' ).css('top', nieuwtop3 + 'px');

  if (nieuwleft1 == nieuwleft2 && nieuwtop1 == nieuwtop2) {
    nieuwleft2 = nieuwleft2 + 50;
    $( '.nummer2' ).css('left', nieuwleft2 + 'px');
  } else if (nieuwleft2 == nieuwleft3 && nieuwtop2 == nieuwtop3) {
    nieuwleft2 = nieuwleft2 + 50;
    $( '.nummer2' ).css('left', nieuwleft2 + 'px');
  } else if (nieuwleft3 == nieuwleft1 && nieuwtop3 == nieuwtop1) {
    nieuwleft3 = nieuwleft3 + 50;
    $( '.nummer3' ).css('left', nieuwleft3 + 'px');
  }

}

//game over

function gameover(){
  if($('.laadbalk_canvas div').css('width') == '0px') {
    $('#game_over_tijd').css('display', 'block')

  }else{
    $('#game_over_tekst').css('display', 'block')
    $( '.laadbalk_canvas div' ).stop();
  }
  $("#gameover").css('display', 'flex');
  $("#rekenscreen").css('display', 'none');
  $("#snake, .nummer1, .nummer2, .nummer3, #adelaar, .laadbalk_canvas, #score_div").css('display', 'none');
}

//button

$('.button_again').click(function(){
    location.reload()
});

//adelaar

function adelaar(){

  setInterval(function(){
    var str = $("#adelaar").css('right');
    str = str.substring(0, str.length-2);
    var opzij = [(-50), (50)]
    var str = Math.round(str) + opzij[Math.floor(Math.random() * opzij.length)];
    var str = str

    var str2 = $("#adelaar").css('bottom');
    str2 = str2.substring(0, str2.length-2);
    var opzij2 = [(-50), (50)]
    var str2 = Math.round(str2) + opzij2[Math.floor(Math.random() * opzij2.length)];
    var str2 = str2


    $('#adelaar').css('bottom', str2 + 'px');
    $('#adelaar').css('right', str + 'px');
//},1000);

//  setInterval(function(){



//    var linkss = $("#snake").css('right');
//    linkss = linkss.substring(0, linkss.length-2);
//    linkss = Math.round(linkss);
//    var tops = $("#snake").css('bottom');
//    tops = tops.substring(0, tops.length-2);
//    var tops = Math.round(tops);
//    console.log('Bram rechts ' + linkss + ' onder ' + tops)
//    if ( linkss == str && tops == str2){
//      gameover();
//        }else{}

  //  console.log('adelaar rechts: ' + str + ' onderkant:' + str2)

},1000);
}

setInterval(function(){

    if ($("#adelaar").css('right') <= '0px'){
      $('#adelaar').css('right', '50px');
    }else if ($("#adelaar").css('right') >= '900px'){
      $('#adelaar').css('right', '850px');
    }else if ($("#adelaar").css('bottom') >= '450px'){
      $('#adelaar').css('bottom', '350px');
    }else if ($("#adelaar").css('bottom') <= '0px'){
      $('#adelaar').css('bottom', '50px');
}

var arechts = $("#adelaar").css('right');
var srechts = $("#snake").css('left');
var srechts = srechts.substring(0, srechts.length-2)
var srechts = 950 - srechts;
var srechts = srechts + 'px'

var atop = $("#adelaar").css('top');
var stop = $("#snake").css('top');
//var stop = srechts.substring(0, srechts.length-2)
//var stop = 950 - srechts;
//var stop = srechts + 'px'


if(atop == stop && arechts == srechts){
  gameover();

}
},10);
