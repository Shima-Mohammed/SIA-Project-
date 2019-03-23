$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 650) {
	    $(".navbar").css("background" , "white");
	    $(".navbar").css("border-color" , "white");
	    $(".navbar-default .navbar-nav>li>a").css("color" , "#f7ba4d");
	  }

	  else{
		  $(".navbar").css("background" , "transparent");
             $(".navbar").css("border-color" , "#f7ba4d");
		  $(".navbar-default .navbar-nav>li>a").css("color" , "white");  	
	  }
  })
});


$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 80
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });