var obj = window.navigator;

for (var prop in obj) {
	document.write("<tr>");
	document.write("  <td>" + prop        + "</td>");
	document.write("  <td>" + typeof obj[prop] + "</td>");
	document.write("  <td>" + obj[prop]   + "</td>");
	document.write("</tr>");
}