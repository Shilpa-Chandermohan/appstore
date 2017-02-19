//var hostName = "http://ec2-54-251-148-245.ap-southeast-1.compute.amazonaws.com/";
//var hostName = "http://10.75.11.79/";
var hostName = "http://10.75.11.75/";
var email="";
//var hostName = "http://localhost/";
//var hostName = "http://192.168.32.26/";
var serverApi = {
	"reviews": hostName + "appstore/reviews/getAppReviews/appId:",
	"login": hostName + "appstore/users/login/",
	"changePassword": hostName + "appstore/users/changePassword/",
	"forgotPassword": hostName + "appstore/users/forogtPassword/email:kishore@gmail.com/",
	"coupon": hostName + "appstore/coupons/getCouponStatus/",
	"coupons": hostName + "appstore/coupons/getCouponStatus/",
	"featured": hostName + "appstore/applists/getApps/type:featured/",
	"topandnew": hostName + "appstore/applists/getApps/type:topandnew/",
    "categories": hostName + "appstore/applists/getApps/type:categories/",
    "myapp" : hostName + "appstore/applists/getApps/type:myapps/",
    "discount" : hostName + "appstore/applists/getApps/type:discount/",
    "registration": hostName + "appstore/users/registration/",
    "country" : hostName + "appstore/countries/getAllCountry/",
    "advertisement": hostName + "appstore/advertisements/getAdvertisements/",
    "logout": hostName + "appstore/users/logout/email:",
	"search": hostName + "appstore/applists/getApps/type:search/",
	"myAccount": hostName + "appstore/Userapps/myAccountInfo/email:kishore@gmail.com/deviceId:7/",
	"appIcon": hostName + "appstore/apps/",
	"tweets": "http://search.twitter.com/search.json?q=Angry%20Birds&callback=?",
	"install": hostName + "appstore/userapps/installApp/",
	"uninstall": hostName + "appstore/userapps/unInstallApp/",
	"lock": hostName + "appstore/userapps/lockApp/deviceId:7/appId:10/",
	"unlock": hostName + "appstore/userapps/unLockApp/deviceId:7/appId:10/",
	"myprofile": hostName + "appstore/users/myprofile/email:",
	"buy": hostName + "appstore/userapps/buyApp/deviceId:7/appId:",
};

function newGetJsonResponse (apiType, param){  	
	loading_Animation_On();
    var urlValue = "";
	
    switch(apiType){
    case "changePassword":
	   urlValue = serverApi[apiType] + "email:" + param.email + "/oldPassword:"+param.password+"/newPassword:"+param.confirmPass;   
        $.getJSON(urlValue, function (data, status) { 	 
//            if ((data.Status == "Success") && (data.Message == "Valid")) {
//                $("#wrapper").css("opacity", "0.1");
//                $("#settingPopup").css("display", "none"); 
//                $("#changePassword ").css("display", "none"); 
//                errorPopup(data.message);        
//            } else if ((data.Status == "Fail") && (data.Message == "Password mismatch")) {
//                $("#wrapper").css("opacity", "0.1");
//                $("#settingPopup").css("display", "none"); 
//                $("#changePassword ").css("display", "none");        
//                errorPopup(data.message);
//            } else if ((data.Status == "Fail") && (data.Message == "Invalid")) {
//                $("#wrapper").css("opacity", "0.1");
//                $("#settingPopup").css("display", "none"); 
//                $("#changePassword ").css("display", "none");
//                errorPopup(data.message);
//            }  
			loading_Animation_Off();      
        }); 
        break;
		case "forgotPassword":
	   urlValue = urlValue = serverApi[apiType] ; 
		
       $.getJSON(urlValue, function (data, status) { alert(urlValue);
                alert(data.code);
				alert(data.url);
				alert(data.name);
				//forgot_pop(data.code);
        }); 
        break;
	 case "myprofile":
        urlValue = serverApi[apiType]+param.email+"/";
           
   	    $.getJSON(urlValue, function (response) {  
    		if (response.Status == "Success") {
				//setProfileDetail(data);
				setProfileDetailSession(response);
			
				var user_id = response.Response.userId;
				var profile_image = hostName+"appstore/users/"+user_id+"/photo.png";
				var profile_Name = "Welcome "+response.Response.firstName +" "+ response.Response.lastName;
				
				var user_Profile = {};
				user_Profile['user_id'] = response.Response.userId;
				user_Profile['profile_name'] = response.Response.firstName +" "+ response.Response.lastName;
				user_Profile['profile_pict'] = profile_image;
				user_Profile['email'] = response.Response.email;
				sessionStorage.setItem("user_Profile", JSON.stringify(user_Profile));

				document.location.href="home.html";
    		}
			loading_Animation_Off();
        }); 
        break;
		case "buy":
		urlValue = serverApi[apiType] + param.appId;
		$.getJSON(urlValue, function (data, status) { 
			
			getFeaturedApp();
			getProfileInfo();
		});
		//$.getJSON(urlValue, function (data, status) { 
			//alert(data.Status);
		//});
		break;


    case "login":
        urlValue = serverApi[apiType] + "email:" + param.email + "/password:" + param.password;        
   	    $.getJSON(urlValue, function (data) {  
            if(data.Message=="Invalid Username or Password") {
				$('input[name=foo]').attr('checked', false);
                $("#login_error").text("Invalid Username or Password");
                _(" ").setCursorPosition(" ","email1_1");
                document.getElementById("email1_1").value = "";
                document.getElementById("pwd1_1").value = "";
                $("#email1_1").focus();
                return false;
            } else if(data.Message=="User Already Logged in") {
                 newGetJsonResponse("myprofile", {
		            "email" : loginId
		        });
            }
    		if ((data.Status == "Success") && (data.Message == "Valid")) {
				
    			newGetJsonResponse("myprofile", {
		            "email" : loginId
		        });	
    		  	//document.location.href="home.html";
    		}
			loading_Animation_Off();
         }).error(function() { 
				//loading_Animation_Off();
				//alert("...."); 
				errorPopup("Network Error");
				$("#gcancel").css('background-image','url(img/btn01_hov.png)');
				_(" ").setCursorPosition(" ","gcancel");
				$("#gcancel").focus();
				 
			});
			break;
        case "coupon":
            urlValue = serverApi[apiType] + "couponCode:" + param.couponVal + "/appId:" + param.appId + "/issuedTo:" + param.issueTo;
			Url=serverApi['buy']+ param.appId;
            $.getJSON(urlValue, function(data) {
				$('.rotate').css("display","none");
				if(data.Status == 'Valid'){
					$("#popUpDiv").attr( "success", true );
					$("#popUpDiv").css("display","none");
					$.getJSON(Url, function (data, status) { 
						//alert(data.Status);
						if(data.Status == 'Success'){
							showInstall();	
						}else{
							errorPopUp(data.Message);}
						
						//$(".menu_list fontbutton button").attr( "disabled", false );
						//$(".fontbutton").attr( "disabled", false );
					});
				}
				errorPopUp(data.Message);
				loading_Animation_Off();
            });
            break;
		case "coupons":
			urlValue = serverApi[apiType] + "couponCode:" + param.couponVal + "/appId:" + param.appId + "/issuedTo:" + param.issueTo;
			Url=serverApi['buy']+ param.AppId;
			//alert(param.AppId);
            $.getJSON(urlValue, function(data) {
				$('.rotate').css("display","none");
				if(data.Status == 'Valid'){
					$.getJSON(Url, function (data, status) { 
						if(data.Status == 'Success'){
							$("#popUpDiv").attr( "success", true );
							$("#popUpDiv").css("display","none");
							showInstallInfo();	
							errorPopUp(data.Message);
							
							//$(".menu_list fontbutton button").attr( "disabled", false );
							//$(".fontbutton").attr( "disabled", false );
						}else{
							errorPopUp(data.Message);
							//_(" ").setCursorPosition("gCancel","buyinfo_1");
							//$("#buyinfo_1").focus();
							//$("#cursor").hide();
							//$("#buyinfo_1").css('background-image','url(img/btn01_hov.png)');
							
						}
						loading_Animation_Off();
					});
					
				}else{
					errorPopUp(data.Message);
					loading_Animation_Off();
				}
            });
            break;	
        case "featured":
			urlValue = serverApi[apiType];
			$.getJSON(urlValue, function(response, status) {
			}).success(function(response) {
				//loading_Animation_Off();
				res = response;
				if (param.isInfo) {

					featured_response = response;
					var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));

					setInfoinfo(appInfo);
					sessionStorage.setItem("appInfo", JSON.stringify(appInfo));
					var index = get_appid(appInfo);
					
					totalSponserAdd = featured_response.Results[1][1].length;
				
					for ( i = 0; i < totalSponserAdd; i++) {

						if (index == featured_response.Results[1][1][i].applists.app_id) {
						
							if(i<totalSponserAdd)
							{
							if(i>=totalSponserAdd-1)
							{
							alert("total"+totalSponserAdd+"i"+i);
							i=0;
							break;
							}
							i = i + 1;
							break;
							}
							
						}
						

					}
					if(i==totalSponserAdd)
					i=i-1;

					document.getElementById('thumb_img').src = serverApi["appIcon"] + featured_response.Results[1][1][i].applists.app_id + "/icon.png";
					featured_response.Results[1][1][i].applists.app_id
					document.getElementById('app_name').innerHTML = featured_response.Results[1][1][i].applists.app_name;
					sponseredRating(featured_response.Results[1][1][i].applists.app_rating);
					document.getElementById('app_price').innerHTML = featured_response.Results[1][1][i].applists.app_price;
					document.getElementById('app_1').innerHTML = featured_response.Results[1][1][i].applists.app_desc;
					document.getElementById('img1').src = serverApi["appIcon"] + "1/img/app1.png";
					document.getElementById('img2').src = serverApi["appIcon"] + "1/img/app2.png";
					document.getElementById('img3').src = serverApi["appIcon"] + "1/img/app3.png";

					session_update(i);
				} else {
					createRows(response.TotalResults, response, serverApi["appIcon"]);
					setArrows(response.TotalResults);
					getThumbnails();
				}
			//	myFocus();
				//setFocusIds();
				
				loading_Animation_Off();
			
			}).error(function() {
				//loading_Animation_Off();
				errorPopup("Network Error");
			}).complete(function() {
			});
			break;
         case "categories":	 
            urlValue = serverApi[apiType];
			$.getJSON(urlValue, function (response) { })
			.success(function(response) {  
				res = response;
				loading_Animation_Off();
				createRows(response.TotalResults,response,serverApi["appIcon"]);
				setArrows(response.TotalResults);
				getThumbnails();
			})
			.error(function() { 
				loading_Animation_Off();
				errorPopup("Network Error");
			})
			.complete(function() {  });
            break;
        case "topandnew":
            urlValue = serverApi[apiType];
			 $.getJSON(urlValue, function (response) { })
			.success(function(response) {
				res = response;
				loading_Animation_Off();
				createRows(response.TotalResults,response,serverApi["appIcon"]);				
				setArrows(response.TotalResults);
				getThumbnails();
			})
			.error(function() {  
				loading_Animation_Off();
				errorPopup("Network Error");
			})
			.complete(function() { });    
            break;
        case "myapp":
          urlValue = serverApi[apiType];
            $.getJSON(urlValue, function (response) {  })
			.success(function(response) { 
				res = response;
				loading_Animation_Off();
				createRows(response.TotalResults, response, serverApi["appIcon"]);			
				//setArrows(response.TotalResults);
				getThumbnails();
			})
			.error(function() {  
				loading_Animation_Off();
				errorPopup("Network Error");
			})
			.complete(function() {  });
            break;
        case "discount":
            urlValue = serverApi[apiType];
            $.getJSON(urlValue, function (response) { })
			.success(function(response) { 
				res = response;
				loading_Animation_Off();
				createRows(response.TotalResults, response, serverApi["appIcon"]);				
				setArrows(response.TotalResults);
			})
			.error(function() {  
				loading_Animation_Off();
				errorPopup("Network Error");
			})
			.complete(function() { });
            break;
			
		case "search":
			urlValue = serverApi[apiType] + "keyword:" + param.keyword +"/";		
			$.getJSON(urlValue, function(data){
			if(data.Status=="Fail"){
				// display the message please enter a keyword for searching
				loading_Animation_Off();
				
				errorPopup(data.Message);	
				
			}
			if(data.Status=="Success"){					
				var m=data.TotalResults;
				if(data.TotalResults==""){
					//show the message no applications found mathching the keyword.
					loading_Animation_Off();
					errorPopup("No apps matching the entered keyword");
					}else{
						res = data;
						loading_Animation_Off();
						createSearchRows(data,serverApi["appIcon"]);
						search_flag = true;

						getThumbnails();
					}
				}
			});
			break;		
        case "country":
            urlValue = serverApi[apiType];
            $.getJSON(urlValue, function (data) { 
				for(var i=0;i<data.length;i++) { 
					country_array[i]=data[i].countryName;
				}
				country_array.sort();
				var country_ID = document.getElementById('country_1');
				country_ID.length=0;
				country_ID.options[0] = new Option('Select Country','');
				country_ID.selectedIndex = 0;
				for (var i=0; i<country_array.length; i++) {
					country_ID.options[country_ID.length] = new Option(country_array[i],i);
				}	 
				loading_Animation_Off();
            });  
            break;
        case "registration":
            urlValue = serverApi[apiType];
			
			url=urlValue + param;
			
            $.getJSON(url , function (data) { 
				
				
				  if(data.Status=="Success")
				 {   		localStorage.setItem('MSG', 'Sucess')
							//alert(localStorage.lastname);
							document.location.href="login.html"; 
				 }
				 else if(data.Message=="Email is already Registered")
				 {
					 $("#regerror").text("Email is already Registered!!!");
					 _(" ").setCursorPosition(" ","email_1");
						$("#email_1").focus();
				 }
				 loading_Animation_Off();
            }).error(function(){       
			
                errorPopup("network error");
				$("#gcancel").css('background-image','url(img/btn01_hov.png)');
				$("#gcancel").attr('isvisible',true); 
				_(" ").setCursorPosition(" ","gcancel");
				$("#gcancel").focus();
            });
            break;
        case "advertisement":
            urlValue = serverApi[apiType];	 
            $.getJSON(urlValue, function(data) {
                var status = data.Status;
                if ((data.Status == "Success")) {           
                    $("closePopup").css("display","none");
                    $("#wrapper").css("opacity","1");
                    adv(data);
                }
				loading_Animation_Off();
            })
            .error(function(){                
                errorPopup("network error");
            });
            break;
            
        case "logout" :
			urlValue = serverApi[apiType]+param.email+"/";
			
			$.getJSON(urlValue, function(data) {
				var status = data.Status;
				
				if (data.Status == "Success"){
					document.location.href = "login.html";
				}
				if (data.Status == "Fail") {
					
					logoutCancel();
					errorPopup(data.Message);
				}
				loading_Animation_Off();
			});
            break;
		case "myAccount":
			loading_Animation_On();
			urlValue = serverApi[apiType]+param.email+"/deviceId:"+param.deviceid+"/";
			$.getJSON(urlValue, function(data) {
				var name = new Array();
				var api=0;
				var no_of_page;
				var InstallSummary ="";
				var current_index = 0;
				var test;
				var urls =new Array();
				var no_of_apps;
				urls[0] ="img/app_01.jpg";

				var type = new Array();		
				var date = new Array();
				if(data.Status == "Success"){
					$("#closePopup").css("display","none");
					$("#wrapper").css("opacity","1");
					no_of_apps=data.TotalResults;
					no_of_page = Math.ceil(no_of_apps/6);					
					for (api=0; api<data.TotalResults; api++) {
						name[api]=data.Results[api][0].Applist.app_name;
						date[api]=data.Results[api].Userapp.installed_on;
						urls[api]=serverApi["appIcon"]+data.Results[api][0].Applist.app_id+"/icon.png"
						test=data.Results[api][0].Applist.is_free;						
						if(test) type[api]="free";						
						else type[api]="paid";
					}
					for(i=0;i<3;i++) {
						if(i%2 == 0) InstallSummary += "<div id='row'> ";
						else InstallSummary += "<div id='row1'> ";					
						for(j=0;j<2;j++) {
						if(current_index == no_of_apps)
						break;
						else
						{
							InstallSummary += "<div id = 'col'>";
							InstallSummary += "<img id='app-img"+current_index+"'= class='app_img' src='"+urls[current_index]+"'/>";
							InstallSummary += "<div id='app-data"+current_index+"'class='app_data'>";
							InstallSummary += "<div id='app-name"+current_index+"' class='app_name app_font app_name1'>"+name[current_index]+"</div>";
							InstallSummary += "<div id='app-type"+current_index+"' class='app_font app_rate'>"+type[current_index]+"</div>";
							InstallSummary += "<div id='app-date"+current_index+"' class='app_font app_date'>"+date[current_index]+"</div>";
							InstallSummary += "</div>";
							InstallSummary += "</div>";
							current_index++;		
						}
						}
						InstallSummary += "</div>";
					}
					page=1;
					$("#installation-summary").html(InstallSummary);
				} else{
					errorPopup(data.Message);
					if(e.keyCode == curKeyCode.Escape) $("#closePopup").css("display","none");
				}
				loading_Animation_Off();
			});
			break;
		case "tweets":
			var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
			setTweettitle(appInfo);
			urlValue = serverApi[apiType];
			$.getJSON(urlValue, function(result) {
				var appData = result;
				console.log(appData);
				displayTweets(appData);
				loading_Animation_Off();
			});
			break;
		case "install":
			urlValue = serverApi[apiType]+param.email+"/deviceId:"+param.deviceid+"/appId:"+param.app_id+"/isFree:"+param.is_free+"/";		
			if(param.isIn == true)
			{
			$.getJSON(urlValue, function(data) {
				if(data.Status == "Success") {
					$("#lock").removeAttr("disabled"); 
					if(data.message="Application successfully installed") {						
						showOpenInfo();
						showUnInstallInfo();						
					}
				} else {
					if(data.message="Application is installed already") {
						console.log("application already installed");
					}	
				}
				loading_Animation_Off();				
			});
			}
			else
			{
			$.getJSON(urlValue, function(data) {
				if(data.Status == "Success") {
					$("#lock").removeAttr("disabled"); 
					if(data.message="Application successfully installed") {						
						showOpen();
						showUnInstall();						
					}
				} else {
					if(data.message="Application is installed already") {
						console.log("application already installed");
					}	
				}
				loading_Animation_Off();				
			});
			}
			break;
		case "uninstall":
			urlValue = serverApi[apiType]+"deviceId:"+param.deviceid+"/appId:"+param.app_id+"/isFree:"+param.is_free+"/";
			if(param.isIn == true)
			{
			$.getJSON(urlValue, function(data) {			
				if(data.Status == "Success") {
					showLock();
					$("#lock").attr("disabled","disabled");
					if(data.message="Application successfully Uninstalled"){
						showInstallInfo();
					}
				} else {
					if(data.message="The App is not yet purchased \/ installed") {
						console.log("failure to UNinstall application");
					}
				}
				loading_Animation_Off();				
		    }); 
			
			}
			else
			{
			$.getJSON(urlValue, function(data) {			
				if(data.Status == "Success") {
					showLock();
					$("#lock").attr("disabled","disabled");
					if(data.message="Application successfully Uninstalled"){
						showInstall();
					}
				} else {
					if(data.message="The App is not yet purchased \/ installed") {
						console.log("failure to UNinstall application");
					}
				}
				loading_Animation_Off();				
		    }); 
			}
			break;
		case "lock":
			urlValue= serverApi[apiType];
			$.getJSON(urlValue, function(data) {
				if(data.Status == "Success") {
					if(data.message="Application successfully Locked"){
						showUnlock();
					}
				} else {	
					console.log("failure to Lock application");
				}
				loading_Animation_Off();				
			}); 
			break;
		case "unlock":
			urlValue= serverApi[apiType];
			$.getJSON(urlValue, function(data) {
				if(data.Status == "Success") {
					if(data.message="Application successfully UnLocked"){
						showLock();
					}
				} else {
					console.log("failure to UnLock application");
				}
				loading_Animation_Off();
			});
			break;
		case "reviews":			
			urlValue = serverApi[apiType]+param.app_id; 
			$.getJSON(urlValue, function(data) { 
				reviews_data(data); 
				loading_Animation_Off();
			});
			break;
    }
    console.log ("\n................................................\n" + urlValue + "\n................................................\n" );
}

function filterData(data) {
	data = data.replace("<body>",'');  
	data = data.replace("</body>",'');
	data = data.replace("<p>",'');  
	data = data.replace("</p>",'');
	data = data.replace("<localhost>",'');
    data = data.replace(/<?\/body[^>]*>/g,'');   
    data = data.replace(/[\r|\n]+/g,'');   // no linebreaks    
    data = data.replace(/<--[\S\s]*?-->/g,''); // no comments   
    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');  // no noscript blocks    
    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,''); // no script blocks    
    data = data.replace(/<script.*\/>/,''); // no self closing scripts
    // [... add as needed ...]
    return data;
}
  
function loading_Animation_On()
{
	$("#loading_animation").css("display","block");
}
function loading_Animation_Off()
{
	$("#loading_animation").css("display","none");
}
function setProfileDetailSession(response){
	
	var user_id = response.Response.userId;
	var profile_image = hostName+"appstore/users/"+user_id+"/photo.png";
	var profile_Name = "Welcome "+response.Response.firstName +" "+ response.Response.lastName;
	
	var user_Profile = {};
	user_Profile['user_id'] = response.Response.userId;
	user_Profile['profile_name'] = response.Response.firstName +" "+ response.Response.lastName;
	user_Profile['profile_pict'] = profile_image;
	user_Profile['email'] = response.Response.email;
	sessionStorage.setItem("user_Profile", JSON.stringify(user_Profile));
	
}
