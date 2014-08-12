function showDesc(e){
	e.preventDefault();
	/*var homeDiv = $(this).parent().parent();
	homeDiv.toggle();
	homeDiv.next().toggle();*/
}

function showHome(e){
	e.preventDefault();
	/*var descDiv = $(this).parent().parent();
	descDiv.toggle();
	descDiv.prev().toggle();*/
}

$(document).ready(function(){
	$('a.showDesc').click(showDesc);
	$('a.showHome').click(showHome);
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