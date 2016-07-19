var rawTemp;
var rawUnit;
var convertedTemp;
var convertedUnit;

$('#submit').click(function(){
	rawTemp = parseint($('#temp').val());
	rawUnit = $("input[type='radio']:checked").val();
	if(rawUnit === 'F'){
		convertedUnit = 'C';
		convertedTemp = (rawTemp -32) / 1.8;
		$('#output').html(convertedTemp + convertedUnit);
	}
});