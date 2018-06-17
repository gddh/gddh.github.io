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


// ------------------------------
// https://twitter.com/mattsince87
// ------------------------------

// function scrollNav() {
//   $('.nav a').click(function(){  
//     //Toggle Class
//     $(".active").removeClass("active");      
//     $(this).closest('li').addClass("active");
//     var theClass = $(this).attr("class");
//     $('.'+theClass).parent('li').addClass('active');
//     //Animate
//     $('html, body').stop().animate({
//         scrollTop: $( $(this).attr('href') ).offset().top - 160
//     }, 400);
//     return false;
//   });
//   $('.scrollTop a').scrollTop();
// }
// scrollNav();