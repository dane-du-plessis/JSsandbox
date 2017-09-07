var msg = "<h1>Dymanically geneerated content!</h1>";

window.document.writeln(msg);

var i = 0;

while (i < 100) {
	window.document.write("<p>" + i + "</p>");
	i++;
}