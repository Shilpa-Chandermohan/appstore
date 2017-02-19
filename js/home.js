//var searchAPI = "http://10.75.11.79/appstore/applists/getApps/type:search/keyword:";
var search_flag = false;
flag=0;
var res;
$(document).ready(function(){
		var addr=location.href;
		var n=addr.search("item_number");
		if(n != -1){
			var b=addr.split('&');
			var c=b[5].split('=');
			newGetJsonResponse("buy", {
				"appId" : c[1],
				
			});
		}
		else{
		var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
		setProfileDetail(user_Profile);
		email = user_Profile.email;
		getFeaturedApp(user_Profile.email);
		
		setFocusIds();
		setTimeout(function(){
						if($("#closePopup").css("display") == "block")
						{
						console.log("....................categories");
						focus_elmt = navigableObj[18];
						moveFocus(document,navigableObj[18]);
						navigableObj[18].focus();
						message_id = navigableObj[1];
						}
						},1000);
		}
		//getFeaturedApp();
		//getProfileInfo();
		
	$("#like").click(function(){
		document.location.href="share.html";
	});
	$("#gcancel").click(function(){
			removeErrorPopup();
	});
	$("#close").click(function(){
		closeCall();
	});
    newGetJsonResponse("advertisement", {});		
	facebookShare();
});

function moveLeftMenus(){
    $("#more").css("visibility","hidden");
	$("#mydiscountapps").css("visibility","hidden");
	$("#search").css("visibility","visible");
	$("#myapp").css("visibility","visible");
	$("#topnews").css("visibility","visible");
	$("#categories").css("visibility","visible");
	$("#feature").css("visibility","visible");
	$("#feature").animate({marginLeft:'2'+"%"},100);
	$("#menu_left_arrow").css("visibility","hidden");
	$("#menu_right_arrow").css("visibility","visible");
}
function moveRightMenus(){
$("#menu_left_arrow").css("visibility","hidden");
			$("#feature").css("visibility","hidden");
			$("#categories").css("visibility","hidden");
			$("#topnews").css("visibility","hidden");
			$("#myapp").css("visibility","hidden");
			$("#search").css("visibility","hidden");
			$("#feature").animate({marginLeft:'-18'+"%"},100);
			$("#more").css("visibility","visible");
			$("#more").animate({marginLeft:'-78'+"%"},100);
			$("#mydiscountapps").css("visibility","visible");
			$("#mydiscountapps").animate({marginLeft:'-60'+"%"},100);
			$("#menu_right_arrow").css("visibility","hidden");
			$("#menu_left_arrow").css("visibility","visible");

}
function openApp(){
var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
document.location.href=appInfo.app_open_URL;
//document.location.href="http://10.75.11.79/appstore/apps/2/2.html";
}
function infoScreen(){
document.location.href="info.html";
}
function myprofileScreen()
{
document.location.href="myprofile.html";
}

function buyScreen(){
			$("#wrapper").css("opacity","0.1");
			showBuyPopup();
			//showErrorPopup();
}

function logout(){

			logoutPopup();
			//_(" ").setCursorPosition(" ", "logout_1");
		//	$("#logout_1").focus();
			
		
}
function more(){
		$("#wrapper").css("opacity", "0.1");
		$("#settingPopup").css("display", "block");
}

function closePopup(){
		$("#wrapper").css("opacity", "1");
		$("#settingPopup").css("display", "none");
}
function changePassword(){
		$("#wrapper").css("opacity", "0.1");
		 $("#settingPopup").css("display", "none"); 
		 $("#changePassword ").css("display", "block");  
}
function submitPassword(){   
    email_1 = $("#vemail").val();
    password = $("#vopasswd").val();
    confrmPass = $("#vnpasswd").val(); 
    newGetJsonResponse("changePassword", {
        "email" : email_1,
        "password" : password,
        "confirmPass" : confrmPass
    });
}

function cancelPassword(){
		$("#wrapper").css("opacity", "0.1");
		 $("#settingPopup").css("display", "block"); 
		 $("#changePassword ").css("display", "none");  
}

/*function getProfileInfo(){
	newGetJsonResponse("myprofile", {});
}*/
function getFeaturedApp(){	
	search_flag = false;
	$("#m_app_main_cont").remove();
	newGetJsonResponse("featured", {
		            "email" : email
		        });	
}
function getCategoriesApp(){	
	search_flag = false;
	$("#m_app_main_cont").remove();
    newGetJsonResponse("categories", {
		            "email" : email
		        });	
}
function getTopnewsApp(){	
	search_flag = false;
	$("#m_app_main_cont").remove();
	newGetJsonResponse("topandnew", {
		            "email" : email
		        });	
}

function getMyappApp(){	
	search_flag = false;
	$("#m_app_main_cont").remove();
    newGetJsonResponse("myapp", {
		            "email" : email
		        });	
}
		
function getMydiscountappsApp(){	
	search_flag = false;
	$("#m_app_main_cont").remove();
	newGetJsonResponse("discount", {
		            "email" : email
		        });	
}
function searching()
{
	search_flag = false;
	if(flag==1)
	{
	$("#searchPopUp").css("display","none");
	flag=0;
	}
	else{
	$("#searchTextBox").val("");
	$("#searchPopUp").css("display","block");
	flag=1;
	}
}

function searchApps(){		
	$("#m_app_main_cont").remove();	
$("#searchPopUp").css("display","none");	
flag=0;
	newGetJsonResponse("search", {
		"keyword": $("#searchTextBox").val(),
		"email": email
	});		
}

function homeRegisterApp(){
var divText=$("#register").text();
		if(divText == "Register") {
			setSession("register");
			newGetJsonResponse("install", {
				"app_id" : app_id,
				"is_free" : isFree,
				"deviceid": "7",
				"email" : email

			});
			
		}
}
function homeUnregisterApp(){
if($("#unregister").text() == "UnRegister") {
			setSession("unregister");
		newGetJsonResponse("uninstall", {
				"app_id" : app_id,
				"is_free" : isFree,
				"deviceid": "7",
				"email" : email

			});
		}	
}
function lockApp()
{

var divText=$("#lock").text();				
		if($("#lock").text()== "Lock") {
			newGetJsonResponse("lock", {});					
		} else {
			newGetJsonResponse("unlock", {});
		}	
}
 /*FB.init({appId: "114460485410672", status: true, cookie: true});

      function postToFeed() {

        // calling the API ...
        var obj = {
          method: 'feed',
          redirect_uri: 'http://localhost/',
          link: 'https://developers.facebook.com/docs/reference/dialogs/',
          picture: 'http://fbrell.com/f8.jpg',
          name: 'Facebook Dialogs',
          caption: 'Reference Documentation',
          description: 'Using Dialogs to interact with users.'
        };

        function callback(response) {
          document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }

        FB.ui(obj, callback);
      }*/