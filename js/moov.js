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
  if ($(window).width() <= 2000) {

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