var main = function() {

    //parallax scrolling with stellar
    $.stellar({
          // Set scrolling to be in either one or both directions
          horizontalScrolling: false,
          verticalScrolling: true,

          // Refreshes parallax content on window load and resize
          responsive: true,

          // Select which property is used to calculate scroll.
          // Choose 'scroll', 'position', 'margin' or 'transform',
          // or write your own 'scrollProperty' plugin.
          scrollProperty: 'scroll',

          // Select which property is used to position elements.
          // Choose between 'position' or 'transform',
          // or write your own 'positionProperty' plugin.
          positionProperty: 'position',
    });

    //sticky navbar
    var isFixed = false;
    var shouldBeFixed = false;
    var navbar = $('.navbar');
    var header = $('.header');
    var navTop =  header.outerHeight() + 50;
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      if (navTop > scrollTop){
        shouldBeFixed = false;
      } else {
        shouldBeFixed = true;
      }
      if (shouldBeFixed && !isFixed){
        navbar.addClass('fixed');
        var temp = navbar.outerHeight();
        header.css('margin-bottom', temp.toString());
        isFixed = true;
      } else if (!shouldBeFixed && isFixed){
        navbar.removeClass('fixed');
        header.css('margin-bottom', '0');
        isFixed = false;
      }

    });

};

$(document).ready(main);