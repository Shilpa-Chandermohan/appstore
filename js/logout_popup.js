function logoutPopup() {

	$("#wrapper").css("opacity", "0.1");
	$("#logoutpopUpDiv").css("display", "block");
	
	
}

function logoutOk() {
var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
    newGetJsonResponse("logout", { "email" : user_Profile.email});
}

function logoutCancel() {
	console.log("....................done");
	$("#logoutpopUpDiv").css("display", "none");
	$("#wrapper").css("opacity", "1");
	
}

function errorPopup(message) {
	$("#wrapper").css("opacity", "0.1");
	$("#closePopup").css("display", "block");
	$("#e_message").text(message);
}

function removeErrorPopup() {
	
	$("#closePopup").css("display", "none");
	$("#wrapper").css("opacity", "1");
}