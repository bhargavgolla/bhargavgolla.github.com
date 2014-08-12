$(document).ready(function(){
	// Code inspired from : http://codepen.io/johnmotyljr/pen/tkipE
	$('.flip').on({
	    click: function() {
	        $('.card', this).toggleClass('flipped');
	    },
	    mouseleave: function() {
		   	if ($('.card', this).hasClass('flipped')) {
		   	    $('.card', this).removeClass('flipped');
		    }
		}
	});
});