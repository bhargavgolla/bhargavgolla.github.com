function showDesc(e){
	e.preventDefault();
	var homeDiv = $(this).parent().parent();
	homeDiv.toggle();
	homeDiv.next().toggle();
}

function showHome(e){
	e.preventDefault();
	var descDiv = $(this).parent().parent();
	descDiv.toggle();
	descDiv.prev().toggle();
}

$(document).ready(function(){
	$('a.showDesc').click(showDesc);
	$('a.showHome').click(showHome);
});