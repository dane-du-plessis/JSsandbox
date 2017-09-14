fuction ClearForm(){
	document.MyFrom.reset();
}

function checkValidity() {
	var isValid = false;
	var CN = document.myForm.CardNumber.value;
	alert("Function called!");
	if (document.myForm.CardNumber.value !== ""){
		isValid = true;
	}
	if (isValid==false) displayErrors();
	return isValid;
}

function displayErrors() {
	if (document.myForm.CardNumber.value=="") alert("CardNumber is invalid");
}