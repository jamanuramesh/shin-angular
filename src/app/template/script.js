$(document).ready(function(){
	$('.modal-trigger').leanModal();
	
	$('.button-collapse').sideNav({
			menuWidth: 380, // Default is 240
			edge: 'left',
			closeOnClick: true
		}
	);
	
	$('.collapsible').collapsible();

	$('.dropdown-button').dropdown({
			inDuration: 300,
			outDuration: 225,
			constrain_width: true, // Does not change width of dropdown to that of the activator
			hover: false, // Activate on hover
			gutter: 0, // Spacing from edge
			belowOrigin: true, // Displays dropdown below the button
 		 	alignment: 'right' // Displays dropdown with edge aligned to the left of button
		}
	)

	$('select').material_select();

	// Only used if initializing with jQuery
	$('.materialboxed').materialbox();
	$('.carousel').carousel();
});