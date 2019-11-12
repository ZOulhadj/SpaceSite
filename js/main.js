$(document).ready(function() {
	// Run when window is scrolling
	// Changed the navbar background color
	$(window).scroll(function() {
  		let scroll = $(window).scrollTop();
		if (scroll > 80) {
			$("header").css("transition", ".2s");
	    	$("header").css("background-color" , "#1b1c1c");
	  	} else {
			$("header").css("transition", ".2s");
			$("header").css("background-color" , "transparent");  	
	  	}
	})

	// Expand space facts card on button click
	$(".expand").click(function () {
		$(".card").toggleClass('card-expanded');
		$(".expand").css("display", "none");
		$(".collapse").css("display", "block");
	});
	$(".collapse").click(function () {
		$(".card").toggleClass('card-expanded');
		$(".expand").css("display", "block");
		$(".collapse").css("display", "none");
	});
});