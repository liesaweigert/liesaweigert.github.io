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
    $(".navbar").sticky({topSpacing:0});

};

$(document).ready(main);