var main = function() {

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

    // Stick the #nav to the top of the window
    var nav = $('#navbar');
    var offsetTop = nav.offset().top;
    var isFixed = false;
    
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var shouldBeFixed = scrollTop > offsetTop;
        if (shouldBeFixed && !isFixed) {
            nav.removeClass('scrollable').addClass('fixed');
            nav.animate({fontSize: "20px"}, 500);
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.addClass('scrollable').removeClass('fixed');
            nav.animate({fontSize: "16px"}, 500);
            isFixed = false;
        }
    });

    //code for the awesome picture
    var img = new Image();
    img.onload = function(){

    };
    img.src = "liesa.jpg";
};

$(document).ready(main);