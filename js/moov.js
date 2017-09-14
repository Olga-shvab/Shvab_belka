/* слайд для телефона */
$(document).ready(function(){


var sld = function() {
  if ($(window).width() <= 320) {

      	$('.track-container').slick({
      		infinite: true,
      		
		});
   
   } 
};
sld();
$(window).resize(sld);

});




$(document).ready(function(){


var sld = function() {
  if ($(window).width() > 320 & ($(window).width() <= 768)    ) {

      	$('.track-container').slick({
      		slidesToShow: 3,
  			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000
      		
		});
   
   } 
};
sld();
$(window).resize(sld);

});


/*-----------*/
$(document).ready(function(){


var sld = function() {
  if ($(window).width() <= 320) {

      	$('.service-photo').slick({
      		infinite: true,
      		
		});
   
   } 
};
sld();
$(window).resize(sld);

});
/*-----------*/


$(document).ready(function(){


var sld = function() {
  if ($(window).width() > 320) {

      	$('.comments-wrap').slick({
      		slidesToShow: 3,
  			slidesToScroll: 1,
			autoplay: true,
  			autoplaySpeed: 3000
      		
		    });  
 	    } 
	};
sld();
$(window).resize(sld);

});






$(document).ready(function(){


var sld = function() {
  if ($(window).width() <= 320) {

      	$('.comments-wrap').slick({
      		slidesToShow: 1,
  			slidesToScroll: 1,
  			infinite: true
			
  			
      		
		    });  
 	    } 
	};
sld();
$(window).resize(sld);

});


/* скрипт прокрутки страницы наверх */
$(document).ready(function(){
	$(function() {
 
		$(window).scroll(function() {
 
			if($(this).scrollTop() != 0) {
 
				$('#toTop').fadeIn();
 
			} else {
 
				$('#toTop').fadeOut();
 
			}
 
		});
 
		$('#toTop').click(function() {
 
		$('body,html').animate({scrollTop:0},800);
 
		});
 
	});
});



$(document).ready(function() {								 
	$('.choose-time').on('click', function() {
		if ($(".td-mobile-block").css("display") != "block")
		    $('.td-mobile-block').css('display', 'block')
			
		
		else 
			$('.td-mobile-block').css('display', 'none')
	});
});




$(document).ready(function() {	
	function accordion()							 
	 {
				$(this).toggleClass('price-table__mobile-icon-down');
	 			 $('.price-table__mobile-icon').not(this).removeClass('price-table__mobile-icon-down');
	 			}
	 	$('.price-table__mobile-icon').on('click', accordion);
		
	
});


$(document).ready(function() {								 
	$('.price-table__td--choose1').on('click', function() {
		if ($(".price-table__td--color").css("display") != "block")
		    $('.price-table__td--color').css('display', 'block'),
	    	$('.choose-time').css('display', 'none'),

	    	$('.choose-place').css('display', 'none'),
	    	$('.tr-mobile-block').css('display', 'none')
		   
		
			
		else 
			$('.price-table__td--color').css('display', 'none'),
			 $('.choose-time').css('display', 'block'),
			  $('.choose-place').css('display', 'block'),
			  $('.tr-mobile-block').css('display', 'block')
	});
});






$(document).ready(function() {								 
	$('.choose-place').on('click', function() {
		if ($(".price-table__td--color-left").css("display") != "block")
		    $('.price-table__td--color-left').css('display', 'block'),
	    	$('.choose-time').css('display', 'none'),
	    	$('.tr3-mobile-block').css('display', 'block')
		
		else 
			$('.price-table__td--color-left').css('display', 'none'),
		    $('.choose-time').css('display', 'block'),
		    $('.tr3-mobile-block').css('display', 'none')

	});
});






$(document).ready(function() {								 
	$('.icon-dot-3').on('click', function() {
		 
			$('.main-nav').css('display', 'block')
	});
});
/*
$(document).ready(function() {								 
	$('.price-table__td--color').on('click', function() {
		 
			$('.price-table__td--color').css('display', 'none')
	});
});


$(document).ready(function() {								 
	$('.price-table__td--choose2').on('click', function() {
		 
			$('.price-table__td--choose2').css('display', 'none')
	});
});

*/
