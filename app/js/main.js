 // Menu button
 (function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger");
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }
  })();
  
  ///Drop menu
  $(function(){
    $('.colapse-menu-button .c-hamburger').on('click',function(){
      $('header .entry_block').slideToggle();
    });
  });
  
  // Hidden menu
  var menu = $('header .entry_block'); 
  $(window).on('resize',function(){
    var wid = $(window).width();
    if(wid > 576 && menu.is(':hidden')) {
        menu.removeAttr('style');      
    }
  });


$('.owl-carousel').owlCarousel({
    loop:true,
    items:6,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

