$(document).ready(function(){

	//menu	
  	$(".menu").click(function(){
  		
  		//if($('.menu').hasClass('open')) {
  			$("body").css("backgroundImage","url(home-menu.jpg)");
        $(".product").css("display","none");
        $(".background-img").css("display","block");
  			$(".menu-footer").css("display","block");
  			//$(".background-img").hover(function(){         -----unfinished------
  				$(".border-line").fadeIn(3000);
  				
  			//});
  			
  		//} else {
  		//	$(".menu").addClass("open");
  		//	}		
  		});
    //$(".fruits").hover(function(){
    //  $("body").css("backgroundImage","url(product.jpg)");
    //});
    //$(".cakes").hover(function(){
    //  $("body").css("backgroundImage","url(cakes.jpg)");
    //});
    //$(".cookies").hover(function(){
    //  $("body").css("backgroundImage","url(marcron.jpg)");
    //});
  });