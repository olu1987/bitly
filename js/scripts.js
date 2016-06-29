$(document).ready(function(){
	window.onscroll = function() {myFunction()};
	
	function myFunction(e) {
	
	     var r = $("#section1").offset();
		 
		 //fade-in effects for nav-bar
	if (document.body.scrollTop > r.top || document.documentElement.scrollTop > r.top) {
        
      $(".logo").addClass("logo-orange");
      $(".navbar").addClass("opaque-nav");
      $(".navbar").addClass("navbar-fixed-top");
      $(".lander-container").addClass("with-non-fixed-nav");
	  $("#bootstrap-overrides nav a").addClass("orange");
	 }
	 
	 else{
		 $(".logo").removeClass("logo-orange");
		 $(".navbar").removeClass("opaque-nav");
		 $(".navbar").removeClass("navbar-fixed-top");
		 $(".lander-container").removeClass("with-non-fixed-nav");
		 $("#bootstrap-overrides nav a").removeClass("orange");
		 
	 }

	}
	
	
	
	
	
});