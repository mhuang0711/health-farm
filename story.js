$(document).ready(function(){

	//menu	
  	$(".menu").click(function(){
  		
  		//if($('.menu').hasClass('open')) {
  			$("body").css("backgroundImage","url(home-menu.jpg)");
        $(".story-page").css("display","none");
        $(".background-img").css("display","block");
  			$(".menu-footer").css("display","block");
  			//$(".background-img").hover(function(){         -----unfinished------
  				$(".border-line").fadeIn(3000);
  				
  			//});
  			
  		//} else {
  		//	$(".menu").addClass("open");
  		//	}		
  		});
  });