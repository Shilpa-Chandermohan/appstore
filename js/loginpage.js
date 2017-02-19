$(document).ready(function () {
 
	 	//var remember = $.cookie('remember_1');
		var a=localStorage.getItem('MSG'); 
		 if(a=="Sucess")
		 {
			$("#login_error").css('color', '#00FF99');
			$("#login_error").text("Registration Sucessfull ");
			localStorage.setItem('MSG', '')
		 }
       /* if (remember == 'true') 
        { 
            var email = $.cookie('email1_1');
            var password = $.cookie('pwd1_1');
            // autofill the fields
            $('#email1_1').val(email);
            $('#pwd1_1').val(password);
			$('input[name=foo]').attr('checked', true);
        } */
	/* Redirecting to Registration Page */
	
	 
	$("#reg1_1").click(function () {
	 
		window.location.href ="register.html";
	});
	$("#reg1_2").click(function () {
		window.location.href ="forgotpassword.html";
	});
	$("#sub1_2").click(function () {
			$("#login_error").text("");
			$('input[name=foo]').attr('checked', false);
			_(" ").setCursorPosition(" ","email1_1");
			$("#email1_1").focus();
	 });
	 $("#remember_1").click(function () { 
			$('input[name=foo]').attr('checked', true); 
	 });
	 
	 
	 /* Redirecting to Forgot Password page */
	$("#forgotPassword").click(function () {
		window.location.href ="www.ourForgotPasswordpage.html";
	});
	 /* Server Side Checking on form completion */
    $("#sub1_1").click(function () {
		
		if ($('#remember_1').is(':checked')) { 
			var email = $('#email1_1').val();
			var pwd = $('#pwd1_1').val(); 
			// set cookies to expire in 14 days
			//$.cookie('email1_1', email, { expires: 14 });
			//$.cookie('pwd1_1', pwd, { expires: 14 });
			//$.cookie('remember_1', true, { expires: 14 });                
		}
		else
		{
			// reset cookies
			//$.cookie('email1_1', null);
			//$.cookie('pwd1_1', null);
			//$.cookie('remember_1', null);
		}  	
      
        passwordUrl = "/password:";
        loginId = $("#email1_1").val();
		 password = $("#pwd1_1").val(); 
		 var status="sucess";
	 	if(loginId=="") 
		{ 
			$("#login_error").text("Invalid Email or Password");
			$('input[name=foo]').attr('checked', false);
			document.getElementById("email1_1").value = "";
			document.getElementById("pwd1_1").value = "";
			_(" ").setCursorPosition(" ","email1_1");
			$("#email1_1").focus();
			return false;
		}
		if(password=="")
		{
			$("#login_error").text("Invalid Email or Password");
			$('input[name=foo]').attr('checked', false);
			document.getElementById("email1_1").value = "";
			document.getElementById("pwd1_1").value = "";
			_(" ").setCursorPosition(" ","email1_1");
			$("#email1_1").focus();
			return false;
		}
        newGetJsonResponse("login", {
            "email" : loginId,
            "password" : password
        });	
    });
	  
		

});

function restrictSpace() {
		 
		if (event.keyCode == 32) {
			event.returnValue = false;
			return false;
			}
		var email = $('#email1_1').val(); 
		var rmlen=email.length; 
		 if(rmlen>30)
		 {		 
				 $("#login_error").text("Email length must be less than 30");
		 }
}
$(document).keydown(function(e) { 
//$(document).keypress(function(e) { 
		var email = $('#email1_1').val(); 
		var rmlen=email.length; 
		if (event.keyCode == 8 || event.keyCode == 46) {  
		 if(rmlen<=30)
		 {
		 $("#login_error").text(" "); 
		 }
	  }
})

function removeErrorPopup1() {
	 
	$("#gcancel").css('background-image','url(img/btn01_hov.png)');
	$("#closePopup").css("display", "none");
	_(" ").setCursorPosition(" ","email1_1");
	$("#email1_1").focus();
	$("#login_body").css("opacity", "2");
}