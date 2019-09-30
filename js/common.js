$(function() {


// SideNav Initializations
$('.button-collapse').sideNav({
edge: 'left', // Choose the horizontal origin
closeOnClick: true, // Closes side-nav on &lt;a&gt; clicks, useful for Angular/Meteor
// breakpoint: 1440, // Breakpoint for button collapse
// MENU_WIDTH: 540, // Width for sidenav
timeDurationOpen: 300, // Time duration open menu
timeDurationClose: 200, // Time duration open menu
timeDurationOverlayOpen: 50, // Time duration open overlay
timeDurationOverlayClose: 200, // Time duration close overlay
easingOpen: 'easeOutQuad', // Open animation
easingClose: 'easeOutCubic', // Close animation
showOverlay: true, // Display overflay
showCloseButton: false, // Append close button into siednav
});


// initialize scrollspy
$('body').scrollspy({

  target: '.dotted-scrollspy'
});




new WOW().init();


// $('.carousel').carousel();


/*---Resize Height---*/
  // function height_Detect() {
  //   $(".main_header").css("height", $(window).height());
  // };
  // height_Detect();
  // $(window).resize(function() {
  //   height_Detect();
  // });
  /*---End Resize Height---*/





  /* Start .main-faq */

 // $("a.collapsed").click(function(){
 //      $(this).find(".btn:contains('answer')").toggleClass("collapsed");
 //  });

 /* End .main-faq */



  // new WOW().init();


  // $("input, select, textarea").jqBootstrapValidation();
  // $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  


  // $("#modal-phone").mask("+7 (999) 999-99-99");

  //   $("#action-phone").mask("+7 (999) 999-99-99");

  // $("#brief-phone").mask("+7 (999) 999-99-99");




});



$(".main-testimonials .fancybox").fancybox();





/*---Preloader---*/
// $(window).on('load', function() { 
//   $(".loader_inner").fadeOut(); 
//   $(".loader").delay(400).fadeOut("slow"); 
// });

/*---End Preloader---*/