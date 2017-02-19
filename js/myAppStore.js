var thumnail_row="";
var e_star_img_url = "img/star_gray_info.png";
var f_star_img_url = "img/star_red_info.png";
var data_reponse="";
var set_first_app_flag = false;
thumb_cnt = 0;

function setProfileDetail(user_Profile){
	
	var user_id = user_Profile.user_id;
	var profile_image = hostName+"appstore/users/"+user_id+"/photo.png";
	var profile_Name = "Welcome "+user_Profile.profile_name;
	$("#userimg").attr("src",profile_image);
	$("#currentuser").text(profile_Name);
	
	
	
}

function createRows(total_rows,response,app_img_url){
	thumnail_row ="";
	data_reponse = response;
	set_first_app_flag = false;
	
	
	thumnail_row += "<div id='m_app_main_cont'>";
	var counter1=0;
	
	for(counter1=0;counter1<total_rows;counter1++)
	{
		var cat_nm = response.Results[counter1][0];
		
		if(response.Results[counter1][1].length!=0){
			
			thumnail_row +=  "<div class = 't_row' id='row_"+counter1+"' >";
				thumnail_row += "<div class = 't_dummy'></div>";
				thumnail_row += "<div class = 'cat_title font_submenu' id='cat_title_"+counter1+"'>"+cat_nm+"</div>";
				//thumnail_row += cat_namae+"</div>";
				thumnail_row +=  "<div class='t_app_cont' id='t_app_cont"+counter1+"'>";
				//thumnail_row +=  "<img src = 'img/arrow_left_hover.png' class = 'left_arrow' id='left_arrow_"+counter1+"' onclick='moveThumbnailsLeft(this);'/>";
					thumnail_row += "<div class ='thmb_cnt' id='thmb_cnt"+counter1+"'>";
					//thumnail_row += "<div class ='thmb_inner_cnt' id='thmb_inner_cnt"+counter1+"'>";
						
						createThumbnails(response.Results[counter1][1].length,response,counter1,app_img_url);
					
					//thumnail_row += "</div>";
				thumnail_row += "</div>";
				//thumnail_row +=  "<img src = 'img/arrow_right_hover.png' class = 'right_arrow' id='right_arrow_"+counter1+"' onclick='moveThumbnailsRight(this);'/>";
				thumnail_row +=  "</div>";
			thumnail_row += "</div>";
		}
		
	}
	thumnail_row += "</div>";
	$("#thumbnail_container").html(thumnail_row);
}

function createThumbnails(total_app,response,c_row_no,app_img_url){
		
		//To access field from appps.
		
		var counter2=0;
				for(counter2=0;counter2<total_app;counter2++)
				{
					var app_id = response.Results[c_row_no][1][counter2].applists['app_id'];
					var app_img = app_img_url+app_id+"/icon.png";
					var app_nm = response.Results[c_row_no][1][counter2].applists['app_name'];
					var app_rating = response.Results[c_row_no][1][counter2].applists['app_rating'];
					app_rating = app_rating.split(".");
					app_rating = app_rating[0];
					var app_price = response.Results[c_row_no][1][counter2].applists['app_price'];
					if(app_price == 0)
						app_price = "Free";
						
					
					
					thumnail_row +=  "<div class = 't_thumb' id='thumb_"+c_row_no+"_"+counter2+"' onclick='showPreview(this);'>";
						thumnail_row += "<img src = '"+app_img+"' class = 't_img_cont' id='t_img_cont"+c_row_no+""+counter2+"'/>";
						thumnail_row += "<div class = 't_data_cont' id='t_data_cont"+c_row_no+""+counter2+"'>";
							thumnail_row += "<div class='t_app_nm font_middle' id='t_app_nm"+c_row_no+""+counter2+"'>"+app_nm+"</div>";
							thumnail_row += "<div class='t_app_rating_cont' id='t_app_rating_cont"+c_row_no+""+counter2+"'>";
								thumnail_row += "<div class='t_rat_cont' id='t_rat_cont"+c_row_no+""+counter2+"'>";
									for(var f_star_counter=0; f_star_counter<app_rating; f_star_counter++)
									{
										thumnail_row += "<img src = '"+f_star_img_url+"' class = 't_star_rat_img' id='t_star_rat_img"+c_row_no+""+counter2+"1'/>";
									}
									for(var e_star_counter=0; e_star_counter<5-app_rating;e_star_counter++)
									{
										thumnail_row += "<img src = '"+e_star_img_url+"' class = 't_star_rat_img' id='t_star_rat_img"+c_row_no+""+counter2+"5'/>";
									}
									
								thumnail_row += "</div>";
								thumnail_row += "<div class='t_app_price font_middle' id='t_app_price"+c_row_no+""+counter2+"'>"+app_price+"</div>";
							thumnail_row += "</div>";
						thumnail_row += "</div>";
					thumnail_row += "</div>";
					
					if(counter2==0 && set_first_app_flag == false){
						set_first_app_flag = true;
						var obj = {};
						obj['id'] = "thumb_"+c_row_no+"_0";
						
						showPreview(obj);
					}
					
					
				}
				
}

function setArrows(total_rows){

	var row_child_size = 0;
		for(a_cnt=0; a_cnt<total_rows; a_cnt++)
		{
			
			$('#left_arrow_'+a_cnt+'').css("visibility","hidden");
			$('#right_arrow_'+a_cnt+'').css("visibility","hidden");
			row_child_size =  $('#thmb_cnt'+a_cnt+'').children().size();
			
			if(row_child_size>5)
			{
				$('#right_arrow_'+a_cnt+'').css("visibility","visible");
			}
			
		}
}

function setSessionData(appInfo)
{
	
	sessionStorage.setItem("appInfo", JSON.stringify(appInfo));
}

function showPreview(imgObj)
{ 
	$("#hr_middlesection").css("display","block");
	
	
	var thumb_id = imgObj.id;
	var c_index = thumb_id.split("_");
	var c_row_id = c_index[1];
	var c_app_id = c_index[2];
	
	
	
	var app_id = data_reponse.Results[c_row_id][1][c_app_id].applists['app_id'];
	var app_nm = data_reponse.Results[c_row_id][1][c_app_id].applists['app_name'];
	var app_desc = data_reponse.Results[c_row_id][1][c_app_id].applists['app_desc'];
	var app_version = data_reponse.Results[c_row_id][1][c_app_id].applists['app_version'];
	var age_restriction = data_reponse.Results[c_row_id][1][c_app_id].applists['age_restriction'];
	var app_rating = data_reponse.Results[c_row_id][1][c_app_id].applists['app_rating'];
	var languages_supported = data_reponse.Results[c_row_id][1][c_app_id].applists['languages_supported'];
	var is_free = data_reponse.Results[c_row_id][1][c_app_id].applists['is_free'];
	var platform_supported = data_reponse.Results[c_row_id][1][c_app_id].applists['platform_supported'];
	var os_version = data_reponse.Results[c_row_id][1][c_app_id].applists['os_version'];
	var app_price = data_reponse.Results[c_row_id][1][c_app_id].applists['app_price'];
	var app_size = data_reponse.Results[c_row_id][1][c_app_id].applists['app_size'];
	var released_on = data_reponse.Results[c_row_id][1][c_app_id].applists['released_on'];
	var no_of_ratings = data_reponse.Results[c_row_id][1][c_app_id].applists['no_of_ratings'];
	var demo_video = data_reponse.Results[c_row_id][1][c_app_id].applists['demo_video'];
	var runs_offline = data_reponse.Results[c_row_id][1][c_app_id].applists['runs_offline'];
	var no_of_reviews = data_reponse.Results[c_row_id][1][c_app_id].applists['no_of_reviews'];
	var subcat_id = data_reponse.Results[c_row_id][1][c_app_id].applists['subcat_id'];
	var downloads = data_reponse.Results[c_row_id][1][c_app_id].applists['downloads'];
	var app_img = serverApi["appIcon"]+app_id+"/icon.png";
	var app_open_url = serverApi["appIcon"]+app_id+"/"+app_id+".html";
	//var app_screen_shot = serverApi["appIcon"]+app_id+"/img/app"+app_id+".png";
	var is_locked = data_reponse.Results[c_row_id][1][c_app_id].userapps['is_locked'];
	var installed_on = data_reponse.Results[c_row_id][1][c_app_id].userapps['installed_on'];
	var bought_on = data_reponse.Results[c_row_id][1][c_app_id].userapps['bought_on'];
	
	var cat_name = data_reponse.Results[c_row_id][0];
	
	
	$("#r_app_img").attr("src",app_img);
	$("#r_app_name").text(app_nm);
	$("#r_develop_by").text(platform_supported);
	
	if(app_price!=0)
		$("#r_rating_rate").text("("+no_of_ratings+") ,"+app_price);
	else
		$("#r_rating_rate").text(no_of_ratings+" ,Free");
	$("#r_main_desc_cont").text(app_desc);
	
	
	app_rating = app_rating.split(".");
	app_rating = app_rating[0];
	app_rating= parseInt(app_rating);
	var i=1;
	for(var i=1; i<=app_rating; i++)
	{
		$("#destar"+i).attr("src",f_star_img_url);
	}
	for(i=app_rating+1; i<=5; i++)
	{
		$("#destar"+i).attr("src",e_star_img_url);
	}
	
	
	if(is_free == true && installed_on == null ){
		showInstall();
	}else if(is_free == false && installed_on == null  && bought_on == null){
		showBuy();
	}else if(is_free == false && installed_on == null && bought_on != null){
		showInstall();
	}else{
		showOpen();
		showUnInstall();
	}
	/*if(!installed_on){
		showInstall();
	}else{
		showOpen();
		showUnInstall();
	}*/
	
	/*if(is_locked == true){
		$("#lock").removeAttr("disabled"); 
		showLock();
	}else{
		$("#lock").removeAttr("disabled"); 
		showUnlock();
	}*/
	
	
	
	
	
	/* store data to class object */
	appInfo.setAppId(app_id);
	appInfo.setAppName(app_nm);
	appInfo.setDescription(app_desc);
	appInfo.setVersionCode(app_version);
	appInfo.setAgeRestriction(age_restriction);
	appInfo.setRating(app_rating);
	appInfo.setLanguageSupported(languages_supported);
	appInfo.setIsFree(is_free);
	appInfo.setPlatformSupport(platform_supported);
	appInfo.setOSVersion(os_version);
	appInfo.setPrice(app_price);
	appInfo.setSize(app_size);
	appInfo.setReleasedOn(released_on);
	appInfo.setUsersRated(no_of_ratings);
	appInfo.setDemoVideo(demo_video);
	appInfo.setRunsOffline(runs_offline);
	appInfo.setNoOfReviews(no_of_reviews);
	appInfo.setCatId(subcat_id);
	appInfo.setDownloads(downloads);
	appInfo.setUrlImage(app_img);
	appInfo.setIsLocked(is_locked);
	appInfo.setInstalledOn(installed_on);
	appInfo.setBoughtOn(bought_on);
	appInfo.setAppOpenUrl(app_open_url);
	appInfo.setCatName(cat_name);
	setSessionData(appInfo);
	
	
		
}
function createSearchRows(response,app_img_url){
		
	thumnail_row ="";
	data_reponse = response;
	
	
	thumnail_row += "<div id='m_app_main_cont'>";
	var counter1=0;
	var len = response.Results[1].length;
	if(response.Results[1].length<5)
	{
		tot_rows = 1;
	}
	else
	{
		tot_rows = response.Results[1].length/5;
	}
	tot_rows = Math.ceil(tot_rows);
	var cat_nm = "Search Result for '";
	cat_nm += response.Results[0]+"'";
		
	var startIndex=0,endIndex=5;
	for(counter1=0;counter1<tot_rows;counter1++)
	{
			if(counter1!=0)
				cat_nm="";
				
			thumnail_row +=  "<div class = 't_row' id='row_"+counter1+"' >";
				thumnail_row += "<div class = 't_dummy'></div>";
				thumnail_row += "<div class = 'cat_title font_submenu' id='cat_title_"+counter1+"'>"+cat_nm+"</div>";
				thumnail_row +=  "<div class='t_app_cont' id='t_app_cont'>";
				//thumnail_row +=  "<img src = '' class = 'left_arrow' id='left_arrow_"+counter1+"' style='visibility: hidden;'/>";
					thumnail_row += "<div class ='thmb_cnt' id='thmb_cnt"+counter1+"'>";
					
						
						createSearchThumbnails(counter1,response,counter1,app_img_url);	
						startIndex = endIndex;
						endIndex+=5;
					
				thumnail_row += "</div>";
				//thumnail_row +=  "<img src = '' class = 'right_arrow' id='right_arrow_"+counter1+"' style='visibility: hidden;'/>";
				thumnail_row +=  "</div>";
			thumnail_row += "</div>";

		
	}
	
	thumnail_row += "</div>";
	
	$("#thumbnail_container").html(thumnail_row);
	thumb_cnt = 0;

}

function createSearchThumbnails(c_row,response,c_row_no,app_img_url){
		
		//To access field from appps.
		//alert(response.Results[c_row_no][1][0].applists['app_name']);
		//alert(app_img_url+"1/img/app1.png");
		//var counter2=0;
		//alert(response.TotalResults);
				for(counter2=0;counter2<5;counter2++)
				{
					if(thumb_cnt==response.TotalResults)
						break;
					else{
						
						var app_id = response.Results[1][thumb_cnt].applists['app_id'];
						
						var app_img = app_img_url+app_id+"/icon.png";
			
						var app_nm = response.Results[1][thumb_cnt].applists['app_name'];
						
						var app_rating = response.Results[1][thumb_cnt].applists['app_rating'];
						app_rating = app_rating.split(".");
						app_rating = app_rating[0];
						
						var app_price =  response.Results[1][thumb_cnt].applists['app_price'];
						if(app_price == 0)
							app_price = "Free";
						
						thumnail_row +=  "<div class = 't_thumb' id='thumb_"+c_row_no+"_"+counter2+"' onclick='searchShowPreview(this);'>";
							thumnail_row += "<img src = '"+app_img+"' class = 't_img_cont' id='t_img_cont"+c_row_no+""+counter2+"'/>";
							thumnail_row += "<div class = 't_data_cont' id='t_data_cont"+c_row_no+""+counter2+"'>";
								thumnail_row += "<div class='t_app_nm font_middle' id='t_app_nm"+c_row_no+""+counter2+"'>"+app_nm+"</div>";
								thumnail_row += "<div class='t_app_rating_cont' id='t_app_rating_cont"+c_row_no+""+counter2+"'>";
									thumnail_row += "<div class='t_rat_cont' id='t_rat_cont"+c_row_no+""+counter2+"'>";
										for(var f_star_counter=0; f_star_counter<app_rating; f_star_counter++)
										{
											thumnail_row += "<img src = '"+f_star_img_url+"' class = 't_star_rat_img' id='t_star_rat_img"+c_row_no+""+counter2+"1'/>";
										}
										for(var e_star_counter=0; e_star_counter<5-app_rating;e_star_counter++)
										{
											thumnail_row += "<img src = '"+e_star_img_url+"' class = 't_star_rat_img' id='t_star_rat_img"+c_row_no+""+counter2+"5'/>";
										}
										
									thumnail_row += "</div>";
									thumnail_row += "<div class='t_app_price font_middle' id='t_app_price"+c_row_no+""+counter2+"'>"+app_price+"</div>";
								thumnail_row += "</div>";
							thumnail_row += "</div>";
						thumnail_row += "</div>";
						
						if(counter2==0 && c_row == 0 && set_first_app_flag == false){
							set_first_app_flag = true;
							var obj = {};
							obj['id'] = "thumb_"+c_row_no+"_0";
							
							searchShowPreview(obj);
						}
						thumb_cnt++;
					}
					
				}
				
}

function searchShowPreview(imgObj)
{ 
	$("#hr_middlesection").css("display","block");
	//alert(data_reponse.TotalResults);
	//alert(data_reponse.TotalResults);
	
	var thumb_id = imgObj.id;
	var c_index = thumb_id.split("_");
	var c_row_id = c_index[1];
	var c_app_id = c_index[2];
	c_app_id = parseInt(c_app_id);
		if(c_row_id == 0)
			c_app_id+=0;
		else if(c_row_id == 1)
			c_app_id+=5;
		else if(c_row_id == 2)
			c_app_id+=10;
		else if(c_row_id == 3)
			c_app_id+=15;
	
	
	
	//alert(data_reponse.Results[1][c_app_id].applists['app_id']+"--"+data_reponse.Results[1][c_app_id].applists['app_name']);
	
	var app_id = data_reponse.Results[1][c_app_id].applists['app_id'];
	var app_nm = data_reponse.Results[1][c_app_id].applists['app_name'];
	var app_desc = data_reponse.Results[1][c_app_id].applists['app_desc'];
	var app_version = data_reponse.Results[1][c_app_id].applists['app_version'];
	var age_restriction = data_reponse.Results[1][c_app_id].applists['age_restriction'];
	var app_rating = data_reponse.Results[1][c_app_id].applists['app_rating'];
	var languages_supported = data_reponse.Results[1][c_app_id].applists['languages_supported'];
	var is_free = data_reponse.Results[1][c_app_id].applists['is_free'];
	var platform_supported = data_reponse.Results[1][c_app_id].applists['platform_supported'];
	var os_version = data_reponse.Results[1][c_app_id].applists['os_version'];
	var app_price = data_reponse.Results[1][c_app_id].applists['app_price'];
	var app_size = data_reponse.Results[1][c_app_id].applists['app_size'];
	var released_on = data_reponse.Results[1][c_app_id].applists['released_on'];
	var no_of_ratings = data_reponse.Results[1][c_app_id].applists['no_of_ratings'];
	var demo_video = data_reponse.Results[1][c_app_id].applists['demo_video'];
	var runs_offline = data_reponse.Results[1][c_app_id].applists['runs_offline'];
	var no_of_reviews = data_reponse.Results[1][c_app_id].applists['no_of_reviews'];
	var subcat_id = data_reponse.Results[1][c_app_id].applists['subcat_id'];
	var downloads = data_reponse.Results[1][c_app_id].applists['downloads'];
	var app_img = serverApi["appIcon"]+app_id+"/icon.png";
	var app_screen_shot = serverApi["appIcon"]+app_id+"/img/app"+app_id+".png";
	var app_open_url = serverApi["appIcon"]+app_id+"/"+app_id+".html";
	var is_locked = data_reponse.Results[1][c_app_id].userapps['is_locked'];
	var installed_on = data_reponse.Results[1][c_app_id].userapps['installed_on'];
	var bought_on = data_reponse.Results[1][c_app_id].userapps['bought_on'];
	//var cat_name = data_reponse.Results[c_row_id][0];
	
	$("#r_app_img").attr("src",app_img);
	$("#r_app_name").text(app_nm);
	$("#r_develop_by").text(platform_supported);
	
	if(app_price!=0)
		$("#r_rating_rate").text("("+no_of_ratings+") ,"+app_price);
	else
		$("#r_rating_rate").text(no_of_ratings+" ,Free");
	$("#r_main_desc_cont").text(app_desc);
	
	
	app_rating = app_rating.split(".");
	app_rating = app_rating[0];
	app_rating= parseInt(app_rating);
	var i=1;
	for(var i=1; i<=app_rating; i++)
	{
		$("#destar"+i).attr("src",f_star_img_url);
	}
	for(i=app_rating+1; i<=5; i++)
	{
		$("#destar"+i).attr("src",e_star_img_url);
	}
	
	
	if(is_free == true && installed_on == null ){
		showInstall();
	}else if(is_free == false && installed_on == null  && bought_on == null){
		showBuy();
	}else if(is_free == false && installed_on == null && bought_on != null){
		showInstall();
	}else{
		showOpen();
		showUnInstall();
	}
	
	/*if(is_locked == true){
		$("#lock").removeAttr("disabled"); 
		showLock();
	}else{
		$("#lock").removeAttr("disabled"); 
		showUnlock();
	}*/
	
	
	
	
	
	/* store data to class object */
	appInfo.setAppId(app_id);
	appInfo.setAppName(app_nm);
	appInfo.setDescription(app_desc);
	appInfo.setVersionCode(app_version);
	appInfo.setAgeRestriction(age_restriction);
	appInfo.setRating(app_rating);
	appInfo.setLanguageSupported(languages_supported);
	appInfo.setIsFree(is_free);
	appInfo.setPlatformSupport(platform_supported);
	appInfo.setOSVersion(os_version);
	appInfo.setPrice(app_price);
	appInfo.setSize(app_size);
	appInfo.setReleasedOn(released_on);
	appInfo.setUsersRated(no_of_ratings);
	appInfo.setDemoVideo(demo_video);
	appInfo.setRunsOffline(runs_offline);
	appInfo.setNoOfReviews(no_of_reviews);
	appInfo.setCatId(subcat_id);
	appInfo.setDownloads(downloads);
	appInfo.setUrlImage(app_img);
	appInfo.setIsLocked(is_locked);
	appInfo.setInstalledOn(installed_on);
	appInfo.setBoughtOn(bought_on);
	appInfo.setAppOpenUrl(app_open_url);
	//appInfo.setCatName(cat_name);
	setSessionData(appInfo);
		
}





