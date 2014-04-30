//Sticky nav script
// $(document).ready(function(){
//        $(window).bind('scroll', function() {
//        var navHeight = $( window ).height() - 100;
//              if ($(window).scrollTop() > navHeight) {
//                  $('nav').addClass('fixed');
//              }
//              else {
//                  $('nav').removeClass('fixed');
//              }
//         });
//     });

//Smooth scroll function
$(function() {
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
});

// Slide toggles the panel ID and toggles the active class.
$(".btn-slide").click(function(){
    $("#panel").slideToggle("slow");
    $(this).toggleClass("active");
});
