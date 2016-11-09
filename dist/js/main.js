var $contactForm = $('#contact-form');


function sendForm(){

	$.ajax({
		method: "POST",
		url: $contactForm.attr("action"),
		data: $contactForm.serialize(),
	}).done(function(){
		$contactForm[0].reset();
		$contactForm.children("textArea").attr("placeholder" , "Email Sent");
	});

}


$(document).ready(function(){

	// $('.carousel').carousel();

	$('#submit').click(function(e){
		e.preventDefault();	
		sendForm();

	});
});

