/*var featured_response;
var currentIndex;
var totalSponserAdd;//put the length of JSON Array
var Images=new Array();
var names=new Array();
var sponserImagesDetails=new Array();
var ratings=new Array();
var api=0;
var store;
var counter;
var prev;
var i;
var app;

$(document).ready(function(){
	var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
	
	newGetJsonResponse("featured",{"isInfo" : true,"email" : user_Profile.email});

 $("#featureCarousel").screenAnimation({ 
 });
 $("#review_1").click(function(){
	document.location.href="reviews.html";
});
$("#review_2").click(function(){
	document.location.href="twitter.html";
});
	  
 $(".sponsored_btn").click(function(){
	
	while(api != featured_response.Results[1][1].length)
	{
		
		
		names[api]=featured_response.Results[1][1][api].applists.app_name;
		 sponseredRating(featured_response.Results[1][1][api].applists.app_rating);
		 ratings[api]=featured_response.Results[1][1][api].applists.app_rating;
		Images[api]=hostName+"appstore/apps/"+featured_response.Results[1][1][api].applists.app_id+"/icon.png";featured_response.Results[1][1][api].applists.app_id;
		sponserImagesDetails[api]=featured_response.Results[1][1][api].applists.app_desc;
		api++;
	}
	
			
			store=i;
		     document.getElementById('thumb_img').src =Images[i] ; 
		   	 document.getElementById('app_1').innerHTML = sponserImagesDetails[i];
			 document.getElementById('app_desc_value').innerHTML = sponserImagesDetails[prev];
			 document.getElementById('app_thumb_img').src =Images[prev] ; 
			 document.getElementById('app_name').innerHTML = names[i];
			 sponseredRating(ratings[i]);
			 document.getElementById('app_size').innerHTML =featured_response.Results[1][1][prev].applists.app_size;
			 document.getElementById('app_date').innerHTML =featured_response.Results[1][1][prev].applists.released_on;
			 document.getElementById('app_version').innerHTML =featured_response.Results[1][1][prev].applists.os_version;
			 document.getElementById('app_price').innerHTML =featured_response.Results[1][1][i].applists.app_price;
			 document.getElementById('app_downloads').innerHTML =featured_response.Results[1][1][prev].applists.downloads;
			 document.getElementById('img1').src=hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/img/app1.png";
			 document.getElementById('img2').src=hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/img/app2.png";
			 document.getElementById('img3').src=hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/img/app3.png";
				
			infoRating(featured_response.Results[1][1][prev].applists.app_rating);
			 $("#user_rating").text(featured_response.Results[1][1][prev].applists.rating);
			 document.getElementById('app_title').innerHTML = names[prev];
		
if(featured_response.Results[1][1][prev].applists.is_free == true && !featured_response.Results[1][1][prev].userapps.installed_on ){

		showInstallInfo();
		_(" ").setParameter("register");
		//$("#button_1").css('background-image','url(img/btn01_nor.png)'); 
			//_(" ").setCursorPosition("button_1","buyinfo_2");
	}else if(featured_response.Results[1][1][prev].applists.is_free == false && !featured_response.Results[1][1][prev].userapps.installed_on  && !featured_response.Results[1][1][prev].userapps.bought_on){
	
				$("#buyinfo_1").css('background-image','url(img/btn01_nor.png)'); 
				showBuyInfo();
				_(" ").setParameter("buy");
				
				
		
	}else{
	_(" ").setParameter("open");
	showOpenInfo();
	showUnInstallInfo();
	}
	app={"version_Code":featured_response.Results[1][1][prev].applists.os_version,"platform_supported":featured_response.Results[1][1][prev].applists.platform_supported,"size":featured_response.Results[1][1][prev].applists.app_size,"downloads":featured_response.Results[1][1][prev].applists.app_id,"released_on":featured_response.Results[1][1][prev].applists.released_on,"app_id":featured_response.Results[1][1][prev].applists.app_id,"app_Name":featured_response.Results[1][1][prev].applists.app_name,"rating":featured_response.Results[1][1][prev].applists.app_rating,"usersRated":featured_response.Results[1][1][prev].applists.no_of_ratings,"reviews_no":featured_response.Results[1][1][prev].applists.no_of_reviews,"description":featured_response.Results[1][1][prev].applists.app_desc,"url_image":hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/icon.png"};
	setSessionData(app);
		session_update(i);		
 
  
 
});  

});
$(document).keydown(function(e) {
					if(e.keyCode == 27)
					{
						$("#logoutpopUpDiv").css("display", "none");
		$("#wrapper").css("opacity", "1");
		$(".menu_list font_mainbutton font_h_button button").attr("disabled", false);
		$(".fontbutton").attr("disabled", false);
		}
});
function logoutPop(message) {
	
	$("#wrapper").css("opacity", "0.1");
	$("#logoutpopUpDiv").css("display", "block");
	
		
	$("#logoutm").text("Api Time out");
	$("#l_cancel").click(function() {
		$("#logoutpopUpDiv").css("display", "none");
		$("#wrapper").css("opacity", "1");
		$(".menu_list font_mainbutton font_h_button button").attr("disabled", false);
		$(".fontbutton").attr("disabled", false);
	});
}
function session_update(position)
{
	prev=position;
	

	for(counter=0;counter<featured_response.Results[1][1].length;counter++)
	{
						
		if(position==counter)
			{
							if(counter<featured_response.Results[1][1].length-1)
							counter=counter+1;
							
							else
							counter=0;
						break;
			}
						
						
	}

	i=counter;
}
*/

var featured_response;
var currentIndex;
var totalSponserAdd;//put the length of JSON Array
var Images=new Array();
var names=new Array();
var sponserImagesDetails=new Array();
var ratings=new Array();
var api=0;
var store;
var counter;
var prev;
var i;
var app;

$(document).ready(function(){
	var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
	
	newGetJsonResponse("featured",{"isInfo" : true,"email" : user_Profile.email});

 $("#featureCarousel").screenAnimation({ 
 });
 $("#review_1").click(function(){
	document.location.href="reviews.html";
});
$("#review_2").click(function(){
	document.location.href="twitter.html";
});
	  
 $(".sponsored_btn").click(function(){
	
	while(api != featured_response.Results[1][1].length)
	{
		
		
		names[api]=featured_response.Results[1][1][api].applists.app_name;
		 sponseredRating(featured_response.Results[1][1][api].applists.app_rating);
		 ratings[api]=featured_response.Results[1][1][api].applists.app_rating;
		Images[api]="http://10.75.11.75/appstore/apps/"+featured_response.Results[1][1][api].applists.app_id+"/icon.png";
		sponserImagesDetails[api]=featured_response.Results[1][1][api].applists.app_desc;
		api++;
	}
	
			
			store=i;
		     document.getElementById('thumb_img').src =Images[i] ; 
		   	 document.getElementById('app_1').innerHTML = sponserImagesDetails[i];
			 document.getElementById('app_desc_value').innerHTML = sponserImagesDetails[prev];
			 document.getElementById('app_thumb_img').src =Images[prev] ; 
			 document.getElementById('app_name').innerHTML = names[i];
			 sponseredRating(ratings[i]);
			 document.getElementById('app_size').innerHTML =featured_response.Results[1][1][prev].applists.app_size;
			 document.getElementById('app_date').innerHTML =featured_response.Results[1][1][prev].applists.released_on;
			 document.getElementById('app_version').innerHTML =featured_response.Results[1][1][prev].applists.os_version;
			 document.getElementById('app_price').innerHTML =featured_response.Results[1][1][i].applists.app_price;
			 document.getElementById('app_downloads').innerHTML =featured_response.Results[1][1][prev].applists.downloads;
			 document.getElementById('img1').src=hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/img/app1.png";
			 document.getElementById('img2').src=hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/img/app2.png";
			 document.getElementById('img3').src=hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/img/app3.png";
				
			infoRating(featured_response.Results[1][1][prev].applists.app_rating);
			 $("#user_rating").text(featured_response.Results[1][1][prev].applists.rating);
			 document.getElementById('app_title').innerHTML = names[prev];
		
if(featured_response.Results[1][1][prev].applists.is_free == true && featured_response.Results[1][1][prev].userapps.installed_on== null ){

		showInstallInfo();
		_(" ").setParameter("register");
		//$("#button_1").css('background-image','url(img/btn01_nor.png)'); 
			//_(" ").setCursorPosition("button_1","buyinfo_2");
	}else if(featured_response.Results[1][1][prev].applists.is_free == false && featured_response.Results[1][1][prev].userapps.installed_on== null  && featured_response.Results[1][1][prev].userapps.bought_on == null){
	
				$("#buyinfo_1").css('background-image','url(img/btn01_nor.png)'); 
				showBuyInfo();
				_(" ").setParameter("buy");
				
				
		
	}else if(featured_response.Results[1][1][prev].applists.is_free == false && featured_response.Results[1][1][prev].userapps.installed_on == null && featured_response.Results[1][1][prev].userapps.bought_on != null){

			_(" ").setParameter("register");
		//	_(" ").setCursorPosition(" ","buyinfo_2");
		showInstallInfo();
	}
	else{
	_(" ").setParameter("open");
	showOpenInfo();
	showUnInstallInfo();
	}
	var app_id = featured_response.Results[1][1][prev].applists.app_id;
	var app_open_url = serverApi["appIcon"]+app_id+"/"+app_id+".html";
	app={"app_open_URL":app_open_url,"version_Code":featured_response.Results[1][1][prev].applists.os_version,"platform_supported":featured_response.Results[1][1][prev].applists.platform_supported,"size":featured_response.Results[1][1][prev].applists.app_size,"downloads":featured_response.Results[1][1][prev].applists.app_id,"released_on":featured_response.Results[1][1][prev].applists.released_on,"app_id":featured_response.Results[1][1][prev].applists.app_id,"app_Name":featured_response.Results[1][1][prev].applists.app_name,"rating":featured_response.Results[1][1][prev].applists.app_rating,"usersRated":featured_response.Results[1][1][prev].applists.no_of_ratings,"reviews_no":featured_response.Results[1][1][prev].applists.no_of_reviews,"description":featured_response.Results[1][1][prev].applists.app_desc,"url_image":hostName+"appstore/apps/"+featured_response.Results[1][1][prev].applists.app_id+"/icon.png"};
	
	setSessionData(app);
		session_update(i);		
 
  
 
});  

});
$(document).keydown(function(e) {
//$(document).keypress(function(e) {
					if(e.keyCode == 27)
					{
						$("#logoutpopUpDiv").css("display", "none");
		$("#wrapper").css("opacity", "1");
		$(".menu_list font_mainbutton font_h_button button").attr("disabled", false);
		$(".fontbutton").attr("disabled", false);
		}
});
function logoutPop(message) {
	
	$("#wrapper").css("opacity", "0.1");
	$("#logoutpopUpDiv").css("display", "block");
	
		
	$("#logoutm").text("Api Time out");
	$("#l_cancel").click(function() {
		$("#logoutpopUpDiv").css("display", "none");
		$("#wrapper").css("opacity", "1");
		$(".menu_list font_mainbutton font_h_button button").attr("disabled", false);
		$(".fontbutton").attr("disabled", false);
	});
}
function session_update(position)
{
	prev=position;
	

	for(counter=0;counter<featured_response.Results[1][1].length;counter++)
	{
						
		if(position==counter)
			{
							if(counter<featured_response.Results[1][1].length-1)
							counter=counter+1;
							
							else
							counter=0;
						break;
			}
						
						
	}

	i=counter;
}

function infoRegister(){

			var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
			app_id = appInfo.app_id;
			isFree = appInfo.is_free;
			if (isFree == true) {
				isFree = "yes";
			} else {
				isFree = "no";
			}
			var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
			newGetJsonResponse("install", {
				"app_id" : app_id,
				"is_free" : isFree,
				"deviceid": "7",
				"email" : user_Profile.email,
				"isIn" :true

			});
			for (var col=0; col < featured_response.Results[1][1].length; col++) {
		   if(featured_response.Results[1][1][col].applists.app_id==app_id){
		   		
					featured_response.Results[1][1][col].userapps.installed_on = getCurrentDateString();
			}	   	
		   }
			
			
		
			
			

}

function infoUnRegister(){
	var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
			app_id = appInfo.app_id;
			
			if (appInfo.is_free == true) {
				isFree = "yes";
			} else {
				isFree = "no";
			}
			var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
			 newGetJsonResponse("uninstall", {
				"app_id" : app_id,
				"is_free" : isFree,
				"deviceid": "7",
				"email" : user_Profile.email,
				"isIn" :true

			});
			
	
		
			for (var col=0; col < featured_response.Results[1][1].length; col++) {
			
		   if(featured_response.Results[1][1][col].applists.app_id==app_id){
					
					featured_response.Results[1][1][col].userapps.installed_on = null;
			}	   	
		   }
		   //alert(isFree);
		  
			
	
}

function openApp(){
	var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
	document.location.href=appInfo.app_open_URL;
	//document.location.href="http://10.75.11.79/appstore/apps/2/2.html";
}