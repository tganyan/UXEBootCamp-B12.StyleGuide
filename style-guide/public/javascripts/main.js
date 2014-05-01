$(document).ready(function(){

//Sticky nav script

 $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - -200;
  if ($(window).scrollTop() > navHeight) {
     $('nav').addClass('fixed');
    }
  else {
     $('nav').removeClass('fixed');
    }
  });

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
