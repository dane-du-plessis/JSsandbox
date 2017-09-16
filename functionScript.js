function validateInput() {
	
	alert("Checking input data.");
	var isValid = false;
	
	isValid = evalCardType();
	if (isValid == false) {
		alert("Card type not specified.");
	}
	
	if (document.MyForm.CardNumber.value == ""){
		alert("Card Number invalid");
		isValid = false;
	}
	
	if (document.MyForm.MM.value <= 5 && document.MyForm.YYYY.value <= 2018) {
		alert("Card  has expired");
		isValid = false;
	}
	
	if (document.MyForm.CardHolderName.value == ""){
		alert("Card  holder name invalid");
		isValid = false;
	}
	
	
	return isValid;
}

function evalCardType() {
	var group = document.MyForm.CardType;
	for (var i = 0; i < group.length; i++) {
		if (group[i].checked) break;
	}
	if (i == group.length) return false;
	else return true;
}