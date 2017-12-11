function validateEmail(email){
	var emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var valid = emailReg.test(email);
	return valid;
}


console.log(validateEmail('james@hotmail.fr'))
console.log("exercice 6");
$(document).ready(function() {


	
	$('input').keyup(function() {
		let userInput = $(this).val();
		console.log(userInput);
	});
	$('input:eq(0)').focus(function() {
		console.log("L'utilisateur a le focus sur EMAIL")
	});
	$('input:eq(1)').focus(function() {
		console.log("L'utilisateur a le focus sur PASSWORD")
	});
	$('.container').append("<div></div>")
	$('.container').append("<div></div>")
	$('.container').append('<div></div>')
	
	$('button').click(function() {
		let $test = $('input:eq(0)').val()
		if (!validateEmail($test)) {
			$('input:eq(0)').css('background-color', 'red');
		} else {
			$('input:eq(0)').css('background-color', 'green')
			$('.container div:eq(0)').hide();
			console.log('ok');
		} 

		if ( $('input:eq(0)').val().length === 0 ) {
			$('.container div:eq(0)').addClass('alert alert-warning').html("<p><b>Attention</b> vous n'avez pas entré d'adresse email</p>");
			$('input:eq(0)').css('background-color', 'red');
		} else if (!validateEmail($test)){ 
			$('.container div:eq(0)').addClass('alert alert-warning').html("<p><b>Attention</b> vous n'avez pas entré d'adresse email VALIDE</p>");
		}

		if( $('input:eq(1)').val().length === 0 ) {
			$('input:eq(1)').css('background-color', 'red');
			$('.container div:eq(1)').addClass('alert alert-warning').html("<p><b>Attention</b> vous n'avez pas entrer de mot de passe</p>");
		} else if ( $('input:eq(1)').val().length <= 5 ) {
			$('input:eq(1)').css('background-color', 'red');
			$('.container div:eq(1)').addClass('alert alert-warning').html("<p><b>Attention</b> votre mot de passe doit faire plus de 6 charactères</p>");
		} else if ( $('input:eq(1)').val().length >= 5 ) {
			$('.container div:eq(1)').hide();
			$('input:eq(1)').css('background-color', 'green')		
		}

		if ($('input:eq(0)').val() === 'hello@me.com' || $('input:eq(1)').val() === 'secret8') {
			$('.container div:eq(2)').addClass('alert alert-success').html('<p><b>Bravo</b> vous êtes connecté</p>')
		}
	});
});

