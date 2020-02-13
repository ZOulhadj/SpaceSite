$(document).ready(() => {
	// Run when window is scrolling
	// Changed the navbar background color
	$(window).scroll(() => {
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
	$(".expand").click(() => {
		$(".card").toggleClass('card-expanded');
		$(".expand").css("display", "none");
		$(".collapse").css("display", "block");
	});
	$(".collapse").click(() => {
		$(".card").toggleClass('card-expanded');
		$(".expand").css("display", "block");
		$(".collapse").css("display", "none");
	});
});



const FormValidation = ()=> {
	let name = document.forms["form"]["name"].value;
	let email = document.forms["form"]["email"].value;
	let message = document.forms["form"]["message"].value;

	if (name == "" || email == "" || message == "") {
		alert("Form field is missing!");
	}
}





