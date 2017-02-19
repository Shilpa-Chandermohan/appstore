//var pcKey = {"Left":37,"Right":39,"Up":38,"Down":40,"Enter":13,"Escape":27};

$(document).ready(function() {
		//$.support.cors = true;
		var response;
		/*$.getJSON('http://api.bigflix.com/BIGFlixApi.do?parameter=getProductType&tvip=10.123.234.6&partnerID=4&uniqueID=1648788777577349&timestamp=106985&digest=66ad660fc1a4bbf39ee4db30995338b7',function (data) {
			 console.log(data[0].name);
		});*/
		Profile_Info();
		Transaction_summary_Info();	
		InstallationSummary();
		
	});



var curKeyCode=pcKey;
var count=0;
var page=0;
var index=0;


var Profile_Info = function(){
	var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));
	var prof_name = user_Profile.profile_name;
	var prof_image = user_Profile.profile_pict;
	var displayHeader = "<div id='screen-title' >My Account Info</div>";
	displayHeader += "<div id='profile-info'><div id='profile-name'>"+prof_name+"</div><div id='profile-pict-cont'><img id='profile-pict' src='"+prof_image+"'/></div></div>";
	$("#header").html(displayHeader);
}
var Transaction_summary_Info = function(){
	var c_Balance = "$999";
	var t_Spent = "$1";
	
	/*Transaction Summary*/
	var displaySummary = "<section id='transaction-summary'><div id='transaction-title'>Transaction Summary</div>";
	 displaySummary += "<div id='transaction-info-title'>Current Balance:\t"+c_Balance+"</div>";
	 displaySummary += "<div id='transaction-info-title'>Total Spent:\t"+t_Spent+"</div>";
	 displaySummary += "</section>";
	
	
	/*Installation Summary*/
	displaySummary += "<div id='installation-title' >Installation(Free&Purchased) History</div>";
	displaySummary += "<section id='installation-summary'>";
	
	displaySummary += "</section>";
	
	$("#main-body").html(displaySummary);
}

var InstallationSummary = function() {
	
	var user_Profile = JSON.parse(sessionStorage.getItem("user_Profile"));

	newGetJsonResponse("myAccount", {
		            "email" : user_Profile.email,
		            "deviceid" : "7"
		        });		

//	$(document).keypress(function(e) {
	$(document).keydown(function(e) {
					if(e.keyCode == curKeyCode.Down)
					{
						if(page == no_of_page)
						return;
						if(page < no_of_page)
						{
						count=0;
						current_index=page*6;
						}
						for(l=0;l<3;l++)
						{
							if(current_index >=no_of_apps)
							{
								for(m=l-1;m<3;m++)
								{
								for(k=0;k<2;k++)
								{
								$("#app-img"+count).replaceWith("<img id='app-img"+count+"' />" );
								$("#app-name"+count).replaceWith("<div id='app-name"+count+"'class='app_name app_font app_name1'></div>");
								$("#app-type"+count).replaceWith("<div id='app-type"+count+"'class='app_font app_rate'></div> ");
								$("#app-date"+count).replaceWith("<div id='app-date"+count+"'class='app_font app_date'></div> ");
								count++;
								}
								}
								break;
							}
							for(k=0;k<2;k++)
							{
							if(current_index >=no_of_apps)
							{
							l=l-1;
							break;
							}
							$("#app-img"+count).replaceWith("<img id='app-img"+count+"'= class='app_img' src='"+urls[current_index]+"'/>");
							$("#app-name"+count).replaceWith("<div id='app-name"+count+"' class='app_name app_font app_name1'>"+name[current_index]+"</div>");
							$("#app-type"+count).replaceWith("<div id='app-type"+count+"' class='app_font app_rate'>"+type[current_index]+"</div>");
							$("#app-date"+count).replaceWith("<div id='app-date"+count+"' class='app_font app_date'>"+date[current_index]+"</div>");
							$('#app-img').animate({'margin-left':'-=500px'},500)
							current_index++;
							count++;
							}
						}	
						page++;
						
					}
					if(e.keyCode == curKeyCode.Up)
					{
						
						
						index= ((page-1)*6)-1;
						if(page == 1)
						return;
						
						for(m=5;m>=0;m--)
						{
							
							$("#app-img"+m).replaceWith("<img id='app-img"+m+"'= class='app_img' src='"+urls[index]+"'/>");
							$("#app-name"+m).replaceWith("<div id='app-name"+m+"' class='app_name app_font app_name1'>"+name[index]+"</div>");
							$("#app-type"+m).replaceWith("<div id='app-type"+m+"' class='app_font app_rate'>"+type[index]+"</div>");
							$("#app-date"+m).replaceWith("<div id='app-date"+m+"' class='app_font app_date'>"+date[index]+"</div>");
							index--;
							
						}
						page--;
					}
					
					if(e.keyCode == curKeyCode.Escape){
						document.location.href = "home.html";
						
					}
					
					});
				
	
	
}
var createThumbanail = function(){
	
}
	
