ScrollToTop = function() {
    let s = $(window).scrollTop();
    if (s > 250) {
      $('#arrow-up').fadeIn();
    } else {
      $('arrow-up').fadeOut();
    }
   
    $('arrow-up').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
  }
   
  StopAnimation = function() {
    $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
      $('html, body').stop();
    });
  }
   
  $(window).scroll(function() {
    ScrollToTop();
    StopAnimation();
  });
