 var status=0,emailstatus,pas_status,cpas_status,ssn_status,mob_status;
 var city_status,state_status,hintanswer_status, dob_status , lastNameStatus,firstNameStatus ;
 
var country_array = new Array();
  $(document).ready(function(){  
        newGetJsonResponse("country", {});
	    $("#sub_1").click(function(){  
				firstname = $("#fname_1").val();
				lastname = $("#lname_1").val();
				email = $("#email_1").val();
				pas=$("#pwd_1").val();//firstname  lastname email pas password country DOB address1  address2   city state mobile
				password = $("#cpwd_1").val();
				country = $('#country_1>option:selected').text();
				DOB = $("#dob_1").val();
				address1 = $("#address_1").val();
				//address2 = $("#address_2").val();
				//city = $("#city_1").val();
				//state = $("#state_1").val();
				//mobile = $("#mobile_1").val();
				//occupation=$("#occupation_1").val();//occupation hobbies hintquestion hintanswer accountType accountName accountNo ssn
				//hobbies=$("#hobbies_1").val();;
				hintquestion = $('#hint_1>option:selected').text();
				hintanswer = $("#ans_1").val();
				//accountType=$("#acctype_1").val();
				//accountName=$("#accname_1").val();
				//accountNo=$("#accno_1").val();
				//ssn=$("#ssn_1").val(); 
				if(firstname=="" )
				{
					_(" ").setCursorPosition(" ","fname_1");
					$("#fname_1").focus();
					return;
				}
				
				if(firstname!="" && firstNameStatus != 1 )
				{
					_(" ").setCursorPosition(" ","fname_1");
					$("#fname_1").val("");
					$("#fname_1").focus(); 
					return;
				}
				else if(lastname =="")
				{
					//alert(lastNameStatus);
					_(" ").setCursorPosition(" ","lname_1");
					$("#lname_1").focus(); 
					return ;
				}
				
				else if(lastname !="" && lastNameStatus != 1)
				{
					//alert(lastNameStatus);
					_(" ").setCursorPosition(" ","lname_1");
					$("#lname_1").val("");
					$("#lname_1").focus(); 
					return ;
				}
				else if(email=="" & emailstatus!=1)
				{ 
					_(" ").setCursorPosition(" ","email_1");
				    $("#email_1").focus(); 
				}
				else if(email!="" & emailstatus !=1)
				{ 
					_(" ").setCursorPosition(" ","email_1");
				    $("#email_1").focus();
					return false;
				}
				else if(pas==""  || pas_status!=1)
				{
					
					document.getElementById("cpwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
					document.getElementById("pwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
					$("#passwordError").text("");
					
					$("#pwd_1").val("");
					$("#cpwd_1").val("");
				   _(" ").setCursorPosition(" ","pwd_1");
				    $("#pwd_1").focus(); 
					return false;
				}
				else if(password=="" || cpas_status!=1)
				{ 
				 
					 
					$("#pwd_1").val("");
					$("#cpwd_1").val("");
				   _(" ").setCursorPosition(" ","pwd_1");
				    $("#pwd_1").focus(); 
					document.getElementById("pwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
					$("#passwordStrength").text("");
					document.getElementById("cpwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
				 
				}
				else if(dob_status!=1)
				{   
				   _(" ").setCursorPosition(" ","dob_1");
				    $("#dob_1").focus(); 
				}
				/*else if(ssn=="" & ssn_status!=1)
				{
				   _(" ").setCursorPosition(" ","ssn_1");
				    $("#ssn_1").focus(); 
				}
				else if(city=="" & city_status!=1)
				{
				   _(" ").setCursorPosition(" ","city_1");
				    $("#city_1").focus(); 
				}
				else if(state=="" & state_status!=1)
				{
				   _(" ").setCursorPosition(" ","state_1");
				    $("#state_1").focus(); 
				}
				else if(mobile=="" & mob_status!=1)
				{
			
				   _(" ").setCursorPosition(" ","mobile_1");
				    $("#mobile_1").focus(); 
				}*/
				else if(hintanswer=="" & hintanswer_status!=1)
				{
				   _(" ").setCursorPosition(" ","ans_1");
				    $("#ans_1").focus(); 
				}
				 
				 /*  newGetJsonResponse("registration", {
                    "email" : loginId,
                   "password" : password
                  });	*/
				 
				 urlData ="firstname:"+firstname+"/lastname:"+lastname+"/email:"+email+"/password:"+password+"/country_id:"+country+"/Dob:"+DOB+"/Address1:"+address1+"/Hintquestion:"+hintquestion+"/HintAnswer:"+hintanswer ;
				if(dob_status == 1 & hintanswer_status == 1 & cpas_status == 1 & pas_status ==1  & emailstatus == 1) {
				newGetJsonResponse("registration", urlData);
				}
				// url1="http://10.75.11.79/appstore/users/registration/firstname:"+firstname+"/lastname:"+lastname+"/email:"+email+"/password:"+password+"/ssn:"+ssn+"/country_id:"+country+"/occupation:"+occupation+"/hobbies:"+hobbies+"/Dob:"+DOB+"/Address1:"+address1+"/Address2:"+address2+"/city:"+city+"/state:"+state+"/mobile:"+mobile+"/Hintquestion:"+hintquestion+"/HintAnswer:"+hintanswer+"/account_no:"+accountNo+"/account_name:"+accountName+"/account_type:"+accountType ;
				//alert(url1);
				//getJsonResponse1(url1); 
				
				//url1="http://10.75.11.79/appstore/users/registration/firstname:"+firstname+"/lastname:"+lastname+"/email:"+email+"/password:"+password+"/ssn:"+ssn+"/country_id:"+country+"/occupation:"+occupation+"/hobbies:"+hobbies+"/Dob:"+DOB+"/Address1:"+address1+"/Address2:"+address2+"/city:"+city+"/state:"+state+"/mobile:"+mobile+"/Hintquestion:"+hintquestion+"/HintAnswer:"+hintanswer+"/account_no:"+accountNo+"/account_name:"+accountName+"/account_type:"+accountType ;
			   // url5="http://10.75.11.79/appstore/users/registration/firstname:"+firstname+"/lastname:"+lastname+"/email:"+email+"/password:"+password+"/ssn:"+ssn+"/country_id:"+country+"/occupation:"+occupation+"/hobbies:"+hobbies+"/Dob:"+dob+"/Address1:"+address1+"/Address2:"+address2+"/city:"+city+"/state:"+state+"/mobile:"+ mobile +"/Hintquestion:"+hintquestion+"/HintAnswer:"+hintanswer+"/account_no:"+accountNo+"/account_name:"+accountName+"/account_type:"+accountType;
			 
			
     });        
/*function getJsonResponse1(url) 
{ 
			$.getJSON(url, function (data) 
			{ 	 
	             alert(url);
				 if(data.Status=="Success")
				 {
				 alert("sucess");
							document.location.href="login.html";
				 }
               /* if ((data[0].Status == "Success") && (data[0].Message == "Valid")) {
                    alert("Login Successful");
					
                } 
				 
				else if ((data[0].Status == "Fail") && (data[0].Message == "Required Field should not be Empty")) {
                    alert("Enter both username and password");

                } 
				else if ((data[0].Status == "Fail") && (data[0].Message == "Invalid")) {
                    alert("check username and password");
                } 

            });
			
    } */
  
	$("#sub_2").click(function(){
		//divya
		$("#passwordStrength").text("");
		//divya
		$("#fnameerror").text("");
		$("#lnameerror").text("");
		$("#emailerror").text("");
		$("#passwordError").text("");
		//$("#ssnerror").text("");
		//$("#cityError").text("");
		//$("#stateError").text("");
		//$("#moberror").text("");
		$("#doberror").text(" ");
		$("#anserror").text("");
		$("#pwd_1").text("");
		  $("#regerror").text(" ");
		document.getElementById("cpwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
		document.getElementById("fname_1").style.background= " #fff url('img/red_asterisk.png') no-repeat 98% center";
		document.getElementById("lname_1").style.background= " #fff url('img/red_asterisk.png') no-repeat 98% center";
		document.getElementById("dob_1").style.background= " #fff url('img/red_asterisk.png') no-repeat 98% center";
		document.getElementById("email_1").style.background= " #fff url('img/red_asterisk.png') no-repeat 98% center";
	
		_(" ").setCursorPosition(" ","fname_1");
		$("#fname_1").focus(); 

    });    
	   
	   
}); 
/*function for disabling the space key*/
			
			 
			/* This function checks the length of the password. */
			function checkLength(passWord,length)
			{
				if (passWord.length < length)
					return false;
				else
					return true;
			}
			
	
			/* Checking the password for the presence of upper case alphabets. */
			function checkUpperCase(passWord)
			{
				if(passWord.match(/[A-Z]/))
					return true;
				else
					return false;
			}
			
			
			/* Checking the password for the presence of lower case alphabets. */
			function checkLowerCase(passWord)
			{
				if(passWord.match(/[a-z]/))
					return true;
				else
					return false;
			}
			
			
			/* Check the password for the presence of numbers. */
			function checkNumeral(passWord)
			{
				if(passWord.match(/[0-9]/))
					return true;
				else
					return false;
			}

			/*Checking the password for the presence of special symbols. */
			function checkSpecialChars(passWord)
			{
				if(passWord.match(/[^a-z\d]+/i))	//(/.[!,@,#,$,%,^,&,*,?,+,-,:,_,~]/))
					return true;
				else
					return false;
			}

			/* Checking the password against few bad passwords. */
			
			function checkDictionaryWords(passWord)
			{
				var dictionaryWords = ["12345678", "password", "PASSWORD", "princess", "abcd1234", "qwerty", "letmein", "dragon", "monkey", "shadow", "trustno1","welcome","thankyou"];
				for(var count = 0; count < dictionaryWords.length; count++)
				{
					if(passWord == dictionaryWords[count])
						return false;
				}
				return true;
			}
			
			
			
			/* Checking if the password contains user name, surname or email id.
			If so, password is displayed as weak and rejected.
            Else continue the validation process. */
			function checkForDetails(passWord)
			{
				var name = document.getElementById('fname_1').value;
				var surname = document.getElementById('lname_1').value;
				var email = document.getElementById('email_1').value;
				var fullName = name + surname;
				
				
				if(passWord == name)
					return true;
				if(passWord == surname)
					return true;
				if(passWord == fullName)
					return true;
				if(passWord == email)
					return true;
					
				return false;
			} 
			function passwordAcceptOrReject(pwd)
			{
				if(checkDictionaryWords(pwd) && checkLength(pwd,15) && checkUpperCase(pwd) && checkLowerCase(pwd) && checkNumeral(pwd) && checkSpecialChars(pwd))
				{
					passwordStrength = "<b><font style='color:#00FFFF'>Password strength excellent</font></b>";
					document.getElementById("pwd_1").style.background= " #fff url(img/valid.png) no-repeat 98% center";	
					pas_status=1;
				}
				else if (checkDictionaryWords(pwd) && checkLength(pwd,12) && checkUpperCase(pwd) && checkLowerCase(pwd) && (checkNumeral(pwd) || checkSpecialChars(pwd)))
				{
					passwordStrength = "<b><font style='color:#00FF00'>Password strength very good</font></b>";
					document.getElementById("pwd_1").style.background= " #fff url(img/valid.png) no-repeat 98% center";	
						pas_status=1;
				}
				else if (checkDictionaryWords(pwd) && checkLength(pwd,10) && (checkNumeral(pwd) || checkSpecialChars(pwd)) && (checkUpperCase(pwd) || checkLowerCase(pwd)))
				{
					passwordStrength = "<b><font style='color:#228B22'>Password strength good</font></b>";
					document.getElementById("pwd_1").style.background= " #fff url(img/valid.png) no-repeat 98% center";	 
						pas_status=1;
				}
				else if (checkDictionaryWords(pwd) && checkLength(pwd,8) && (checkNumeral(pwd)  || checkSpecialChars(pwd) || (checkUpperCase(pwd) && checkLowerCase(pwd))))
				{
					passwordStrength = "<b><font style='color:#556B2F'>Password strength average </font></b>";
					document.getElementById("pwd_1").style.background= " #fff url(img/valid.png) no-repeat 98% center";	
						pas_status=1;
				}
				else 
				{
					pas_status=0;
					passwordStrength = "<b><font style='color:#FF0000'>Password strength weak! Try another Password</font></b>";
					document.getElementById("pwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";	
					document.getElementById('pwd_1').value = ''; 
				}
				
			}
			
			/* Check whether the confirm password and password are matching */
			
			 
			/* Check if password should be accepted or rejected. */
			function checkPasswordStrength(pwd)
			{  
				if (checkForDetails(pwd))
				{
					pas_status=0;
					passwordStrength = "<b><font style='color:#FF0000'>Your name or email id cannot be accepted as password!</font></b>";
					document.getElementById("pwd_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
					document.getElementById('passwordStrength').innerHTML = passwordStrength;
					//alert("Your name or email id cannot be accepted as password! ");
					document.getElementById('pwd').value = ''; 					//clear the password field if password not acceptable
					return false;
				}
				
				passwordAcceptOrReject(pwd);
				
				/*If tab key is pressed, check for the password strength.
				If password is weak or average reject it else continue. */
	
				document.getElementById('pwd_1').onkeydown = function(e)
				//document.getElementById('pwd_1').onkeypress = function(e)
				{
					
					/*if (e.keyCode == 9 && pwd.length < 8) 
					{
						alert('Password too short. Try another password');
						document.getElementById('pwd').value = ''; 	
						this.focus();
						return false;
					}*/
					
					if(e.keyCode == 9 && (!checkDictionaryWords(pwd)))
					{
						
						document.getElementById('pwd').value = ''; 	
						this.focus();
						return false;
					}
					if(e.keyCode == 9 && ((!checkNumeral(pwd))  && (!checkSpecialChars(pwd)) && ((!checkUpperCase(pwd)) ||  (!checkLowerCase(pwd)))))
					{
						
						document.getElementById('pwd').value = ''; 	
						this.focus();
						return false;
					}
					
				}
			

				document.getElementById('passwordStrength').innerHTML = passwordStrength;
			} 
		
  function checkPassword(password, confpassword)
  {   
 
	if(password.value!=""&&confpassword.value!="")
   {  

    if (password.value != confpassword.value) 
	{ 
	 confirmstatus=0; 
	  var elem = document.getElementById("cpwd_1");
	  elem.style.background= " #fff url('img/wrong.png') no-repeat 98% center"; 
	  document.getElementById('cpwd_1').value = ''; 
	  passwordStrength = "<b><font style='color:red'>Password does not match!</font></b>";
      document.getElementById('passwordError').innerHTML = passwordStrength;
	   //confirmstatus=1; 
     }  
	if(password.value==confpassword.value) 
	{ 
	 val=1;
	 confirmstatus=0; 
	  var elem = document.getElementById("cpwd_1");
	  elem.setAttribute("style","background: white"); 
	  elem.style.background= " #fff url(img/valid.png) no-repeat 98% center";
	  passwordStrength = "<b><font style='color:#00FFFF'>Password matched!</font></b>";
    document.getElementById('passwordError').innerHTML = passwordStrength;
	cpas_status=1;
	}
	} 
  } 
	function vallastname()
	{
 
		
		//alert(lastNameStatus);
		var x=document.getElementById("lname_1").value;
		var nameStatus = 0;
		//for name to reject numbers and special characters.
		
		for(var i = 0; i < x.length ; i++)
		{
			if(((x.charCodeAt(i) > 64) && (x.charCodeAt(i) <  91)) ||
			((x.charCodeAt(i) > 96) && (x.charCodeAt(i) < 123)))
			{
				nameStatus = 0;
			}
			else
			{
				nameStatus = 1;
				break;
			}
			
		}
		
		if(x.length > 34)
		{
			nameStatus = 1;
		}
		if(nameStatus != 0)
		{
			var elem = document.getElementById("lname_1");
			passwordStrength = "<b> <font style='color:red'>Enter valid name</font> ";
			document.getElementById('lnameerror').innerHTML = passwordStrength; 
			document.getElementById("lname_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
			elem.style.background= " #fff url('img/wrong.png') no-repeat 98% center";
			//alert(lastNameStatus);
			return false;
		}
		if(x=="")
		{
			var elem = document.getElementById("lname_1");
			passwordStrength = "<b> <font style='color:red'>Enter your Last Name</font> ";
			document.getElementById("lname_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
			document.getElementById('lnameerror').innerHTML = passwordStrength; 
			//alert(lastNameStatus);
			return false;
		}	
		else
		{
	 
			console.log("yes");
			var elem = document.getElementById("lname_1");
		  
			passwordStrength = " ";
			document.getElementById('lnameerror').innerHTML = passwordStrength;
			lastNameStatus = 1;
			elem.style.background= " #fff url('img/valid.png') no-repeat 98% center";
			//alert(lastNameStatus);
			return true;
	 
		}
		
	}
	function valfirstname()
	{

		var x=document.getElementById("fname_1").value;
		var nameStatus = 0;
		
	
		//for name to reject numbers and special characters.
		for(var i = 0; i < x.length ; i++)
		{
		
			if(((x.charCodeAt(i) > 64) && (x.charCodeAt(i) <  91)) ||
			((x.charCodeAt(i) > 96) && (x.charCodeAt(i) < 123)))
			{
				nameStatus = 0;
			}
			else
			{
				nameStatus = 1;
				break;
			}
				
		}
		
		if(x.length > 34)
		{
			nameStatus = 1;
		}
	
		if(nameStatus != 0)
		{
			var elem = document.getElementById("fname_1"); 
			passwordStrength = " <b><font style='color:red'>Enter a valid name</font> ";
			
			document.getElementById('fnameerror').innerHTML = passwordStrength; 
			document.getElementById("fname_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
			return false;
		}
	
		if(x=="")
		{
			var elem = document.getElementById("fname_1"); 
			passwordStrength = " <b><font style='color:red'>Enter your Name</font> ";
			document.getElementById('fnameerror').innerHTML = passwordStrength; 
			document.getElementById("fname_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
			return false;
		}
		else
		{
	 
			var elem = document.getElementById("fname_1");
		 
			passwordStrength = " ";
			document.getElementById('fnameerror').innerHTML = passwordStrength;
			firstNameStatus = 1;
			elem.style.background= " #fff url('img/valid.png') no-repeat 98% center";
			return true;
	 
		}
	}

 function valEmail()
{
	var x=document.getElementById("email_1").value
	var a= IsEmail(x); 
	if(a==false)
	{
	emailstatus=0;
	var elem = document.getElementById("email_1");
	 
	  passwordStrength = "<b> <font style='color:red'>Enter your valid Email</font> ";
	  document.getElementById("email_1").style.background= " #fff url(img/red_asterisk.png) no-repeat 98% center";
      document.getElementById('emailerror').innerHTML = passwordStrength; 
	 
	  if(x != "")
		elem.style.background= " #fff url('img/wrong.png') no-repeat 98% center";

	return false;
	}else{
	 
	  console.log("yes");
	 //var a= IsEmail(x);
	 
		var elem = document.getElementById("email_1");
		passwordStrength = " ";
		document.getElementById('emailerror').innerHTML = passwordStrength;
		elem.style.background= " #fff url('img/valid.png') no-repeat 98% center";
		 if(a==true)
		 {
			emailstatus=1;
		}
		else{
		 emailstatus=0;
		 }
		
		 
	}
	 
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

 
function valHint()
{
	var x=document.getElementById("ans_1").value
	if(x=="")
	{
	console.log("yes");
	var elem = document.getElementById("ans_1");
	   
	  passwordStrength = "<b> <font style='color:red'>Enter hint answer</font> ";
      document.getElementById('anserror').innerHTML = passwordStrength; 
	return false;
	}else{
	 
		var elem = document.getElementById("ans_1");
		 
		passwordStrength = " ";
		hintanswer_status=1;
		document.getElementById('anserror').innerHTML = passwordStrength;
		 return true;
	 
	}
}
  
   
	   
    /*if (pattern.test(mobile)) {
	alert("invalid mob no");
        passwordStrength = "<b><font style='color:#00FFFF'>Password matched!</font></b>";
    document.getElementById('passwordError').innerHTML = passwordStrength; 
        //return true;
    }*/
	 
	 
    

 
function validatedob()
{
		dob_status=1;
		var obj = $("#dob_1").val();
		var rgx = /(\d{4})-(\d{2})-(\d{2})/;
		var x=document.getElementById("dob_1").value;
		var div = obj.split("-");
		var year=div[0];
		var month=div[1];
		var day=div[2];
		dob=div[0]+div[1]+div[2];
		
		var strYear = parseInt(year);
		var strMonth = parseInt(month);
		var strDay = parseInt(day);
		var strDob = parseInt(dob);
		var minYear = 1900;
		var maxYear = new Date().getFullYear();
		
		for(var i = 1; i <= dob.length ; i++)
		{
			if(isNaN(dob.charAt(i)))
			{
				dob_status = 0;
				var elem = document.getElementById("dob_1");
				elem.setAttribute("style","background: white");  
				passwordStrength = "<b><font style='color:#FF0000'>Invalid format</font></b>";
				document.getElementById('doberror').innerHTML = passwordStrength;
				break;
			}
		}
		
		if (year.length != 4)
		{
			dob_status = 0;
			var elem = document.getElementById("dob_1");
			elem.setAttribute("style","background: white"); 		
			passwordStrength = "<b><font style='color:#FF0000'>Invalid format</font></b>";
			document.getElementById('doberror').innerHTML = passwordStrength;
		}
		
		else if (strYear==0 || strYear < minYear|| strYear > maxYear)
		{  		
			dob_status = 0;
			var elem = document.getElementById("dob_1");
			elem.setAttribute("style","background: white");  
			passwordStrength = "<b><font style='color:#FF0000'>Invalid Year!</font></b>";
			document.getElementById('doberror').innerHTML = passwordStrength;
			
		}
		
		else if (strMonth==0 || strMonth < 1 || strMonth > 12)
		{  		
			dob_status = 0;
			var elem = document.getElementById("dob_1");
			elem.setAttribute("style","background: white");  
			passwordStrength = "<b><font style='color:#FF0000'>Invalid Month!</font></b>";
			document.getElementById('doberror').innerHTML = passwordStrength;
			
		} 
		
		else if ( strDay==0 || strDay<1 || strDay>31)
		{  		
			dob_status = 0;
			var elem = document.getElementById("dob_1");
			elem.setAttribute("style","background: white");  
			passwordStrength = "<b><font style='color:#FF0000'>Invalid Date!</font></b>";
			document.getElementById('doberror').innerHTML = passwordStrength;
			
		} 
		
		
		else 
		{ 
				var dt = new Date(year, month-1, day);
				var today = new Date();

				if((dt.getDate() != day) || (dt.getMonth() != month-1) || (dt.getFullYear()!=year) || (dt>today))
				{ 
					var elem = document.getElementById("dob_1");
					elem.setAttribute("style","background: white");  
					passwordStrength = "<b><font style='color:#FF0000'>Date exceed to current date!</font></b>";
					
					document.getElementById('doberror').innerHTML = passwordStrength;
					dob_status = 0;
					
				}

		}
		var elem = document.getElementById("dob_1");
		elem.setAttribute("style","background: white"); 
		if(x == "")
		{		
			
			passwordStrength = "<b><font style='color:#FF0000'>Enter your DOB</font></b>";
			document.getElementById('doberror').innerHTML = passwordStrength;
			elem.style.background= " #fff url('img/red_asterisk.png') no-repeat 98% center";
			return false;
		}
		if(dob_status == 0)
		{
			elem.style.background= " #fff url('img/wrong.png') no-repeat 98% center";
			return false;
		}
		
		
		$("#doberror").text("");
		elem.style.background= " #fff url('img/valid.png') no-repeat 98% center";
	
		
}
function restrictSpace() {
			if (event.keyCode == 32) { 
			event.returnValue = false;
			return false;
			}
		var email = $('#email_1').val(); 
		var rmlen=email.length; 
		 if(rmlen>30)
		 {		//	$(".form_hint").hide(); 
				 $("#emailerror").text("Email length must be less than 30");
		 }
		 
		 
		
}

$(document).keydown(function(e) {
//$(document).keypress(function(e) {
		var ar=$("#gcancel").attr('isvisible'); 
		
		if(event.keyCode == 27)
		{  
			if(ar =="true"){
				$("#closePopup").css("display", "none");
				_(" ").setCursorPosition(" ","fname_1");
				$("#fname_1").focus();
				$("#login_body").css("opacity", "2");
				$("#gcancel").attr('isvisible',false);
				
			} else {
				document.location.href="login.html";
			}
		
		}
		var email = $('#email_1').val(); 
		var rmlen=email.length; 
		if (event.keyCode == 8 || event.keyCode == 46) {  
		 if(rmlen<=29 & emailstatus !=1 )
		 {
		 //alert(emailstatus);
			$("#emailerror").text("Enter your valid Email");
	//	$(".form_hint").show(); 
		 
		 } else {
			$("#emailerror").text(" ");
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
   
   