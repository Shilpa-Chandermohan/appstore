
function forgot_submit(){
	var	email;
	email=$("#userEmail").val();
	
	newGetJsonResponse ('forgotPassword', email);
}
function forgot_cancel(){
	
	document.location.href="Login.html";
}
function forgot_pop(message) {
	$("#closePopUp1").css("display", "block");
	$("#eMessage1").text(message);
	//_(" ").setCursorPosition("submit","gcancel");
	$("#gCancel1").focus();
	$("#gCancel1").css('background','url(img/btn01_hov.png) no-repeat');
}