function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-left") {
        x.className += " responsive";
    } else {
        x.className = "header-left";
    }
}

$(document).ready(function() {
	$('body.hidden').fadeIn(500).removeClass('hidden')
})

var $root = $('html, body');

$('a[href^="#"]').click(function() {
	var href = $.attr(this, 'href');

	$root.stop().animate({
		scrollTop: $(href).offset().top - 70
	}, 500);

	return false
})

function fadeIn(){
	$('.grid-item').each( function(i){
		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
		var bottom_of_window = $(window).scrollTop() + $(window).height();

		/* If the object is completely visible in the window, fade it it */
		if( bottom_of_window > bottom_of_object ){
		    $(this).animate({'opacity':'1', 'margin-top':'0px'}, 0);
		}
	}); 
}

$(document).ready(function() {

	fadeIn();
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
	    /* Check the location of each desired element */
	    	fadeIn();
	  });
});