// 1. Use document.getElementById() and attach an .onclick event handler to #clickme
// 2. Assign this event handler to a function named tellFortune
// 3. The function ellFortune should:
// - A) store the values from the four inputs (#hometown, #partner, #favNum, #jobTitle) in variables
// - B) concatenate these variables into the sentence:
// - "You will be a " + jobTitle + " living in " + hometown + " married to " + partner + " with " + favNum + " kids."
// - C) output this string to #output

var menu = document.getElementById('clickme');
var hometown = document.getElementById('hometown').value;
var partner = document.getElementById('partner').value;
var jobTitle = document.getElementById('jobTitle').value;
var output = document.getElementById('output').value;
var favNum = document.getElementById('favNum');
document.getElementById("mySelect").selectedIndex;
menu.onclick=tellFortune;
function tellFortune(){
	output.innerHTML = "You will be a "+ jobTitle + " living in " + hometown + "married to " + partner + "with " + favNum + "kids.";


}