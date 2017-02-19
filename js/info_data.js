var counter_img=0;	
function setInfoinfo(appInfo) {
	
	if(appInfo == "")
	{
		if(data.Status == "fail")
	{
		errorPopup(data.Message);
	}
	
	}
	$("#app_title").text(appInfo.app_Name);
	$("#app_thumb_img").attr("src", appInfo.url_image);
	$("#buy_btn").text(appInfo.price);
	$("#app_date").text(appInfo.installed_on);
	$("#app_size").text(appInfo.size);
	$("#app_downloads").text(appInfo.downloads);
	$("#app_version").text(appInfo.version_Code);
	console.log("this"+ appInfo.version_Code);
	$("#app_desc_value").text(appInfo.description);
	
	

	document.getElementById('img1').src=hostName+"appstore/apps/"+appInfo.app_id+"/img/app"+(Math.floor((Math.random()*5)+1))+".png";
	document.getElementById('img2').src=hostName+"appstore/apps/"+appInfo.app_id+"/img/app"+(Math.floor((Math.random()*5)+1))+".png";
	document.getElementById('img3').src=hostName+"appstore/apps/"+appInfo.app_id+"/img/app"+(Math.floor((Math.random()*5)+1))+".png";
	$("#img1").css("visibility","visible");
	$("#img2").css("visibility","visible");
	$("#img3").css("visibility","visible");	
		
	
if(appInfo.is_free == true && appInfo.installed_on == null ){

		showInstallInfo();
		_(" ").setParameter("register");
			_(" ").setCursorPosition(" ","buyinfo_2");
	}else if(appInfo.is_free == false && appInfo.installed_on == null  && appInfo.bought_on == null){
		_(" ").setParameter("buy");
		_(" ").setCursorPosition("button_1","buyinfo_1");
				showBuyInfo();
		
	}else if(appInfo.is_free == false && appInfo.installed_on == null && appInfo.bought_on != null){

	_(" ").setParameter("register");
			_(" ").setCursorPosition(" ","buyinfo_2");
		showInstallInfo();
	}else{
	_(" ").setParameter("open");
	_(" ").setCursorPosition(" ","buyinfo_3");
	showOpenInfo();
	showUnInstallInfo();
	$("#buyinfo_3").focus();
	}

			
	var rating = appInfo.rating;
	
	infoRating(appInfo.rating);
	$("#user_rating").text(appInfo.rating);
	$("#num_user").text('('+ appInfo.usersRated +')');
}


function setSponseredinfo(spodata) {
	
	/*$("#descrpition").text(spodata.Value[0].ImageUrl.Url);
	$("#app_name").text(spodata.Value[0].HasVideo);
	$("#app_price").text(spodata.Value[0].HasVideo);
	var rating = spodata.Value[0].NoOfRatings;
	sponseredRating(3.2);*/
}

function infoRating(rating) {

	var halfStar = 0;
	var fractn = 0;
	var clearstar = 0;
	
	for ( clearstar = 1; clearstar <= 5; clearstar++) {

		$("#istar" + clearstar).attr({
			"src" : "img/star_gray.png"
		});
	}

	if (!isNaN(rating) && rating != null && rating > 0) {
		if (Math.floor(rating) != Math.ceil(rating)) {
			var fractn = rating % 1;
			
			rating = Math.floor(rating);
			fractn = Math.round(fractn);
			

			for ( setstar = 1; setstar <= rating; setstar++) {
				
				$("#istar" + setstar).attr({
					"src" : "img/star_red_info.png"
				});
			}
			fractn = Math.round(fractn);
			if (fractn != 0) {

				
				$("#istar" + setstar).attr({
					"src" : "img/star_red_info.png"
				});

			} else {

				
				$("#istar" + setstar).attr({
					"src" : "img/star_gray_info.png"
				});
			}

		} else {
			for (var setstar = 1; setstar <= rating; setstar++) {
				
				$("#istar" + setstar).attr({
	"src" : "img/star_red_info.png"				});
			}
		}

	}
	if (rating == null || rating == 0) {
		for (var setstar = 1; setstar <= 5; setstar++) {
			$("#istar" + setstar).attr({
				"src" : "img/star_gray_info.png"
			});
		}
	}
}

function sponseredRating(rating) {
	

	var halfStar = 0;
	var fractn = 0;
	var clearstar = 0;

	for ( clearstar = 1; clearstar <= 5; clearstar++) {

		$("#sstar" + clearstar).attr({
			"src" : "img/star_gray_info.png"
		});
	}

	if (!isNaN(rating) && rating != null && rating > 0) {
		if (Math.floor(rating) != Math.ceil(rating)) {
			var fractn = rating % 1;
		
			rating = Math.floor(rating);
			fractn = Math.round(fractn);
			

			for ( setstar = 1; setstar <= rating; setstar++) {
				
				$("#sstar" + setstar).attr({
					"src" : "img/star_red_info.png"
				});
			}
			fractn = Math.round(fractn);
			if (fractn != 0) {

				
				$("#sstar" + setstar).attr({
					"src" : "img/star_red_info.png"
				});

			} else {

				
				$("#sstar" + setstar).attr({
						"src" : "img/star_gray_info.png"
				});
			}

		} else {
			for (var setstar = 1; setstar <= rating; setstar++) {
				
				$("#sstar" + setstar).attr({
					"src" : "img/star_red_info.png"
				});
			}
		}

	}
	if (rating == null || rating == 0) {
		for (var setstar = 1; setstar <= 5; setstar++) {
			$("#sstar" + setstar).attr({
					"src" : "img/star_red_info.png"
			});
		}
	}
}
function get_appid(appInfo)
{
	return appInfo.app_id;
}
