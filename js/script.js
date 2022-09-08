jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;

      if (ww < 1980) {
        $('.focus9, .focus10, .mood9').addClass('customclassadd');
      } 

      if (ww < 1700) {
        $(' .playlist8, .focus8,.mood8').addClass('customclassadd');
      } 
      else if (ww >=1700) {
        $(' .playlist8,.focus8 .mood8').removeClass('customclassadd');
      };

      if (ww < 1511) {
        $('.playlist6, .focus6, .mood6 , .playlist7, .focus7, .mood7').addClass('customclassadd');
      } 
      else if (ww >=1511) {
        $('.playlist6, .focus6, .mood6, .playlist7, .focus7, .mood7').removeClass('customclassadd');
      };

      if (ww < 1301) {
        $('.playlist5, .focus5, .mood5').addClass('customclassadd');
      } 
      else if (ww >=1301) {
        $('.playlist5, .focus5, .mood5').removeClass('customclassadd');
      };

      if (ww < 979) {
        $('.playlist4, .focus4, .mood4').addClass('customclassadd');
      } 
      else if (ww >=979) {
        $('.playlist4, .focus4, .mood4').removeClass('customclassadd');
      };

      if (ww < 778) {
        $('.playlist3, .focus3, .mood3').addClass('customclassadd');
      } 
      else if (ww >=778) {
        $('.playlist3, .focus3, .mood3').removeClass('customclassadd');
      };

      if (ww < 650) {
        $('.playlist2, .focus2, .mood2').addClass('customclassadd');
      } 
      else if (ww >=650) {
        $('.playlist2, .focus2, .mood2').removeClass('customclassadd');
      };
    
    };

    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });


  $(".seeplaylist").click(function(){

    document.getElementById('playlist').style.cssText = 'padding-bottom: 150px';

    $(".playlist2,.playlist3,.playlist4,.playlist5,.playlist6,.playlist7,.playlist8").show();

    $(".focus, .mood").hide();
  });

  $(".seefocus").click(function(){

    document.getElementById('focus').style.cssText = 'padding-bottom: 150px';

    $(".focus2,.focus3,.focus4,.focus5,.focus6,.focus7,.focus8,.focus9,.focus10").show();

    $(".playlist, .mood").hide();
  });

  $(".seemood").click(function(){

    $(".mood2,.mood3,.mood4,.mood5,.mood6,.mood7,.mood8,.mood9").show();

    $(".playlist, .focus").hide();
  });
  
  $(".previous").click(function(){
    location.reload();
  });


  $(".create").click(function(){

    $(".createplaylistbox").show();
    $(".likedsongsbox").hide();
  });

  $(".notbutton").click(function(){

    $(".createplaylistbox").hide();
    $(".likedsongsbox").hide();
  });

  $(".liked").click(function(){

    $(".createplaylistbox").hide();
    $(".likedsongsbox").show();
  });
