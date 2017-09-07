var i = 100;
var msg = '';
while(i > 0) {
	msg = msg + ' ' + i;
	
	switch (i%3) {
		case 0:
			msg += "";
			break;
		case 1:
			msg += "#";
			break;
		case 2:
			msg += "##";
			break;
	}
	
	--i;
}

alert(msg);