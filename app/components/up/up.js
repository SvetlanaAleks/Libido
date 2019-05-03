var upEl = $('.up__el');
var up = $('.up');

$(upEl).click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

$(window).scroll(function() {
    var height = $('section.header').outerHeight();
    ($(this).scrollTop() > height)
        ? up.addClass('active')
        : up.removeClass('active');
});

// smooth scroll
$(function() {
	$(document).ready(function(){
    $('a[href*="#"]').click( function(){ 
	  var scroll_el = $(this).attr('href'); 
	        if ($(scroll_el).length != 0) { 
	      $('html, body').animate({ scrollTop: $(scroll_el).offset().top + 50}, 1000); 
	        }
	      return false; 
	    });
	});
});