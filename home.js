$(document).ready(function(){

	//menu	
  	$(".menu").click(function(){
  		
  		//if($('.menu').hasClass('open')) {
  			$("body").css("backgroundImage","url(home-menu.jpg)");
  			$(".background-img p").css("display","none");
  			$(".background-img h2").css("fontFamily","ItalicRoman");
  			$(".background-img label").css("display","none");
  			$(".background-img > div").css("height","100px");
  			$(".menu-footer").css("display","block");
  			//$(".background-img").hover(function(){         -----unfinished------
  				$(".border-line").fadeIn(3000);
  				
  			//});
  			
  		//} else {
  		//	$(".menu").addClass("open");
  		//	}		
  		});

  	//$('.heading').click(function() {
	//	$('.heading').each(function(i) {
	//		if($(this).text() === $('.heading').eq(i).text()) {
	//			$(this).removeClass('open');
	//		}
	//	});
	//		$(this).addClass('open');
//			var height, height2, that = $(this);
//
//			$('.menu.open').css('height', '350px');
//
//			setTimeout(function() {
 //				height = that.parent().find('ul').height();
 	//			height2 = $('.menu.open').height();
	//			$('.menu.open').css('height' , height + height2);
	//		}, 1000);
		});