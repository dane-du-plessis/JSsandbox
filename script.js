var ages = new Array(12,4,34,7,2,3,41,5,17,8,24,19,16,17,18,21);
var persons = ages.length;

var adults = new Array();
var minors = new Array();

while (ages.length) {
	var age = ages.pop();
	if (age >= 18) adults.push(age);
	else minors.push(age);
}

adults = adults.sort();
adults = adults.reverse();
minors = minors.sort();
minors = minors.reverse();

document.write("There are " + persons + " persons. " + "<br />");
document.write("There are " + adults.length + " adults with ages " + adults.join(", " )+ ".<br />");
document.write("There are " + minors.length + " minors with ages " + minors.join(", " )+ ".<br />");
