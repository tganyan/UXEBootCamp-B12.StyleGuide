$(document).ready(function(){

//Smooth scroll function

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('nav select').change(function() {
    $.smoothScroll({
        offset: -70,
        speed: 2000,
        scrollTarget: $(this).val()
    });
  });

// Slide toggles

  $("pre").hide();

  $(".sourceButton").click(function(){
    var $this = $(this);
    $this.find("pre").slideToggle();
  });


});

// Off-canvas slider function

$(".slider").click(function(){
    $("#panel").slideToggle("slow");
    $(this).toggleClass("active");
  });

// Removes off-canvas if browser gets bigger

var width = null;
  $( window ).resize(function() {
    width = $( window ).width();
    if( width > 767){
      $( "#panel" ).hide();
    }
  });
