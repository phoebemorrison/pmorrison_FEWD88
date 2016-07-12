// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked


var currentImage;

$('#first').click(function(){
	currentImage = $('#first').attr('src');
	$('#bigimage').attr('src', currentImage);
});

$('#second').click(function(){
	currentImage = $('#second').attr('src');
	$('#bigimage').attr('src', currentImage);
});