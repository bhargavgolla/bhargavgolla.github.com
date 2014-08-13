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

function setCardHeights(lineHeight) {
	console.log("Being set");
	var exps = document.getElementsByClassName('flipExp');
	var ports = document.getElementsByClassName('flipPort');
	var maxHeightExp = 0;
	var maxHeightPort = 0;
	var temp = 0;
	for (var i = exps.length - 1; i >= 0; i--) {
		temp = exps[i].getElementsByTagName('p')[0].offsetHeight + exps[i].getElementsByTagName('header')[0].offsetHeight;
		if (maxHeightExp < temp) {
			maxHeightExp = temp;
		}
	};
	maxHeightExp = maxHeightExp*1.75/lineHeight;
	for (var i = exps.length - 1; i >= 0; i--) {
		exps[i].style.height = maxHeightExp+"em";
	};

	for (var i = ports.length - 1; i >= 0; i--) {
		temp = ports[i].getElementsByTagName('p')[0].offsetHeight + ports[i].getElementsByTagName('header')[0].offsetHeight;
		if (maxHeightPort < temp) {
			maxHeightPort = temp;
		}
	};
	maxHeightPort = maxHeightPort*1.75/lineHeight;
	for (var i = ports.length - 1; i >= 0; i--) {
		ports[i].style.height = maxHeightPort+"em";
	};

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

	$(window).resize(function() {
		lineHeight = 37.33;
		if ($(window).width() < 640) {
			lineHeight = 32.667;
		}
		setCardHeights(lineHeight);
	});
});