var arr = new Array();

document.write("<table border = \"1\">");

arr[0] = "Tom";
arr[1] = "Dick";
arr[2] = "Harry";
arr[3] = "Jefferson";
arr[4] = "Peterson";
arr[5] = "Jackson";
arr[6] = "Johnson";

for (var i = 0; i < arr.length; i++)
{
	document.write(
	"<tr><td>" + i + "</td><td>" + arr[i] +"</td></tr>");
}



document.write("</table>");