$(document).ready(function () {
 
   $('#star_lbl').css('display','none');
   $('#cont').css('display','none');  
 $('#ver_line1').css('display','none'); 
			  
	reviewUrl="http://10.75.11.79/appstore/reviews/getAppReviews/appId:1"; 
	reviews();
	// newGetJsonResponse("reviews",{"app_id" : app_id}); 
	    var first_bar ;
		var second_bar ;
		var third_bar ;
		var fourth_bar ;
		var fifth_bar ;
		var count=5;
		var down=0; 
		var length=0;
		var reviewUrl;
		var rate=3;
		var rate1=4;
		var counter1;
		var flag=0;
		var pcKey = {"Left":37,"Right":39,"Up":38,"Down":40,"Enter":13,"Escape":27};
		var curKeyCode=pcKey;
		var pageIndex=1;
		var paageCnt=5;
		var count=0;  
		var app_id;
		var email;
		var ratings;
		var textFromTextArea;
		var text_title;
		
	 
		
		
		 
}); 

function app_rating(index1,r_rating) 
{ 	   
		var r=0;
		var i;
		if(r_rating==0){
		$("#s" + index1 + 1).css('margin-left','1%');
			return;
		}
		for ( r = 1; r <= r_rating; r++) 
		{
			$("#s" + index1 + r ).attr("src", "img/star_red_info.png"); 
			if(r==1)
			{ 
			$("#s" + index1 + r).css('margin-left','1%');
			}
		       }   
			   
}	
function reviews_data(data)
{    			
				var index=1; 
				var u_review='';
				var counter1=1;
				length=data.Results.length;
				if(length>4)
				{
				length=4;
				}
		 
				for(index=0;index<length;index++)
				{    
					counter1=1; 
					var gender=data.Results[index].User[0].title;
					var firstName=data.Results[index].User[0].first_name;
					var lastName=data.Results[index].User[0].last_name; 
					email=data.Results[index].User[0].email;  
					var fullName=gender+" "+firstName+" "+lastName; 
					$("#u"+index).text(fullName);   
					var r_review_title=data.Results[index].Review.review_title;
					var r_review=data.Results[index].Review.review;
					var final_review=r_review_title+" "+r_review;
					$("#review"+index).text(data.Results[index].Review.final_review); 
					u_review =u_review+'<div id="u_review'+index+'" class="review"><div id="u'+index+'" class="reviewer-font">'+fullName+'</div><img id="s'+index+counter1+'" src="img/star_gray_info.png" class="rating-stars"><img id="s'+index+(counter1+1)+'" src="img/star_gray_info.png" class="rating-stars"><img id="s'+index+(counter1+2)+'" src="img/star_gray_info.png" class="rating-stars"><img id="s'+index+(counter1+3)+'" src="img/star_gray_info.png" class="rating-stars"><img id="s'+index+(counter1+4)+'" src="img/star_gray_info.png" class="rating-stars"><div id="review'+index+'" class="rev app-font">'+final_review+'</div><div class="line"> <hr></hr></div>';
				 }
				$("#review_data_cont").html(u_review); 
			 
				for(index=0;index<length;index++)
				{  
					if(data.Results[index].Rating.length!=0){ 
					var rev_rating=data.Results[index].Rating[index].user_star_rating;  
				 
					app_rating(index,rev_rating); 
					
					}
				 
				} 
					first_bar1=data.Star.one_star;
					second_bar1=data.Star.two_star;
					third_bar1=data.Star.three_star;
					fourth_bar1=data.Star.four_star;
					fifth_bar1=data.Star.five_star; 
					 
					document.getElementById("5_starUser").innerHTML=fifth_bar1; 
					document.getElementById("4_starUser").innerHTML=fourth_bar1;  
					document.getElementById("3_starUser").innerHTML=third_bar1;  
					document.getElementById("2_starUser").innerHTML=second_bar1; 
					document.getElementById("1_starUser").innerHTML=first_bar1; 
					 
						var points = [first_bar1,second_bar1,third_bar1,fourth_bar1,fifth_bar1];
						points.sort(function(a,b){return b-a}); 
					    find_largest(points); 
								$('#cont').css('display','block');
								$('#star_lbl').css('display','block');
								$('#ver_line1').css('display','block'); 
								$('#bar5').animate({'width':+first_bar1+'%'},5000);
								$('#bar4').animate({'width':+second_bar1+'%'},5000);  
								$('#bar3').animate({'width':+third_bar1+'%'},5000);  
								$('#bar2').animate({'width':+fourth_bar1+'%'},5000);  
								$('#bar1').animate({'width':+fifth_bar1+'%'},5000);  
			  
	          
				 for(index=5;index<=length-1;index++)
				 { 
				 $('#u_review'+index).css('display','none'); 
			   	}
				 //var write_review = '<div id="write_comment_title" class="review-font">Write Your Review</div><div id="write_comment_div"><textarea id="wr_input"></textarea></div><input type="submit" value="Submit" id="sub" onclick="readValueFromTextarea();"></div>';
			  
		} 
		function reviews(){ 
			var appInfo = JSON.parse(sessionStorage.getItem("appInfo")); 
			var app_Image=appInfo.url_image; 
			$("#app_img").attr("src",app_Image); 
			var appName= appInfo.app_Name;
			var date=appInfo.released_on;
			var image_downloads=appInfo.platform_supported ;
			var image_size=appInfo.size+"Mb";
			var image_version=appInfo.os_version ;
			var rating=appInfo.rating;
			app_id=appInfo.app_id; 
			var user_rating=appInfo.usersRated
		 	var top='<div id="app_title" class="app-title">'+appName+'</div><div id="app_details" class="app-font"><div id="app_download_cont"><div id="app_date">'+date+'</div><div id="app_downloads">'+image_downloads+'</div></div><div id="app_rate_cont"><div id="app_size">'+image_size+'</div><div id="app_version">'+image_version+'</div></div></div>';
			$("#app_detail_cont").append(top);
			var rating_cont = ' <div id="avg_rate" class="app-font">Average Rating</div><div id="rate" >'+rating+".0"+'</div> ';
		 
			stars='';
		for(counter2=1;counter2<=5;counter2++){
			if(counter2<=rating)
			{
			stars +='<img id="star'+counter2+'"class="rating-stars" src="img/star_red_info.png" >';
			}
			else
			{
			stars +='<img id="star'+counter2+'"class="rating-stars" src="img/star_gray_info.png" >';
			}
		} 
		 var app_rating = rating_cont+stars+'<div id="no_of_reviews">(' +user_rating+')</div>';
		$("#app_rating_cont").append(app_rating);
	newGetJsonResponse("reviews",{"app_id" : app_id}); 
		} 
		 
function showUserReview(){
  
	$("#write_review_cont").css("display","none");
	$("#review_data_cont").css("display","block");
	 $('#Up_down_Image').css('display','block');
	// getJsonResponse(reviewUrl,"reviews"); 
	 
	 
}
function showWriteReview(){

	$("#review_data_cont").css("display","none");
	var write_review = '<div id="write_comment_title" class="review-font">Write Your Review</div><div id="title_desc"  >Title:<input type="text" id="text_title"></div><div id="write_comment_div"><textarea id="wr_input"></textarea></div><div id="app_rating"><div id="rating_lbl" class="fontbutton">Rating</div><div id="rating_value"><div id="rating_bar"><img class="star" id="star_1" src = "img/star_gray.png" onclick="rateSingleClick(this)" onmouseover="onMouseOver(this)" onmouseout="onMouseOut(this)" onkeypress="onEnter(event,this)"/><img class="star" id="star_2" src = "img/star_gray.png" onclick="rateSingleClick(this)" onmouseover="onMouseOver(this)" onmouseout="onMouseOut(this)" onkeypress="onEnter(event,this)"/><img class="star" id="star_3" src = "img/star_gray.png" onclick="rateSingleClick(this)" onmouseover="onMouseOver(this)" onmouseout="onMouseOut(this)" onkeypress="onEnter(event,this)"/><img class="star" id="star_4" src = "img/star_gray.png" onclick="rateSingleClick(this)" onmouseover="onMouseOver(this)" onmouseout="onMouseOut(this)" onkeypress="onEnter(event,this)"/><img class="star" id="star_5" src = "img/star_gray.png" onclick="rateSingleClick(this)" onmouseover="onMouseOver(this)" onmouseout="onMouseOut(this)" onkeypress="onEnter(event,this)"/></div><div id="user_rating" class="fontbutton">0</div><div id="num_user" class="fontbutton">(16)</div></div></div><input type="submit" value="Submit" id="sub" onclick="readValueFromTextarea();"></div>';
	$("#write_review_cont").html(write_review); 
	$("#write_review_cont").css("display","block"); 
    $('#Up_down_Image').css('display','none');
}
 
function readValueFromTextarea(){
	 $("#write_review_cont").css("display","none"); 
		textFromTextArea=document.getElementById("wr_input").value; 
		text_title=document.getElementById("text_title").value; 
	//	url="http://10.75.11.79/appstore/reviews/writeAppReviews/appId:"+app_id+"/email:"+email+"/userRole:1/reviewTitle:"+text_title+"/review:"+textFromTextArea+"/rating:"+ratings;
	  //  getJsonResponse(url,"writereview");
		$("#review_data_cont").css("display","block");
		
}


function onMouseOver(obj){
	temp =obj.id;
	var index=temp.split("_");
	if($("#star_"+index[1]).attr('src') != 'img/star_red_info.png')
		$("#star_"+index[1]).attr('src','img/nst.png' );
	
}

function onMouseOut(obj,color){
	temp = obj.id;
	var index = temp.split("_");
	if($("#star_"+index[1]).attr('src') != 'img/star_red_info.png')
		$("#star_"+index[1]).attr('src','img/star_gray_info.png' );
}

function rateSingleClick(obj){
	temp=obj.id;
	var index=temp.split("_");
	 ratings = index[1];
	$("#user_rating").html(ratings);
	
	for(i=1;i<=5;i++){
		$("#star_"+i).attr('src','img/star_gray_info.png' );
	}
	for(i=1;i<=index[1];i++){
		$("#star_"+i).attr('src','img/star_red_info.png' );
		
	}	
	
}
 function find_largest(points)
 { 
	 var highest_value=85;
	 for(i=0;i<5;i++)
	 { 
	 
	 if(points[i]== first_bar1  )
	 {
	   first_bar1=checkvalue(first_bar1);
	   }  
	    else if(points[i]== second_bar1  ){
		 second_bar1=checkvalue(second_bar1);
	   }  
	   else if(points[i]== third_bar1 ){
	   third_bar1=checkvalue(third_bar1);
	   }  
	   else if(points[i]== fourth_bar1 ){
	    fourth_bar1=checkvalue(fourth_bar1);
	   }  
	   else if(points[i]== fifth_bar1 ){
	      fifth_bar1=checkvalue(fifth_bar1);
	   }   
	   
	   }   
	   
 }
 function checkvalue(rating_val)
 {
 if(rating_val==0)
 {
   return 0;
 }
 if(rating_val==1)
 {
   return 25;
 }
 if(rating_val==2)
 {
   return 35;
 }
 if(rating_val==3)
 {
   return 45;
 }
 if(rating_val==4)
 {
   return 65;
 }
 if(rating_val==5)
 {
   return 75;
 }
  if(rating_val==6)
 {
   return 78;
 }
  if(rating_val==7)
 {
   return 80;
 }
  if(rating_val==8)
 {
   return 81;
 }
  if(rating_val==9)
 {
   return 85;
 }
 }

 
 
 