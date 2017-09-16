function validateInput() {
	
	alert("Checking input data.");
	var isValid = false;
	//var CN = document.MyForm.CardNumber.value;
	
	if (document.MyForm.CardNumber.value !== ""){
		isValid = true;
	}
	if (isValid==false) alert("Card Number is invalid");
	return isValid;
}