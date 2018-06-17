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