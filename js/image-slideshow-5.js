	var thumb_move_index=0;
	var leftArrowObj;
	var rightArrowObj;
	var thumbDiv_obj;
	var LEFT=-103;//check if value has been changed
	var RIGHT=103;//check if value has been changed
	//var right_counter=[1,1,1,1,1];//check if value has been changed
	//var left_counter=[8,8,8,8,8];//check if value has been changed
	var left_counter=1;
	var TEMP_LEFT=-103;//check if value has been changed
	var TEMP_RIGHT=103;//check if value has been changed
	var UP=1;
	var TOP;
	var TOP_ARROW;
	var TEMP_TOP=-30.6;//check if value has been changed
	var TEMP_DOWN=-30.6;//check if value has been changed
	var TEMP_ARROW=-46.6;//check if value has been changed
	var TEMP_ARROW_UP=-30.6;//check if value has been changed
	
	var up_val=1;
	/*This function is called onload of the application*/
	/*function initGalleryScript(){
		topArrowObj = document.getElementById("topArrow");
		$("#downArrow").css("visibility","hidden");
		for(j=1;j<6;j++){
			leftArrowObj = document.getElementById('leftArrow_'+j);		
			leftArrowObj.style.visibility='hidden';
			rightArrowObj = document.getElementById('rightArrow_'+j);	
			leftArrowObj.style.cursor = 'pointer';	
			rightArrowObj.style.cursor = 'pointer';	
		}
		for(j=5;j<6;j++){
			rightArrowObj = document.getElementById('rightArrow_'+j);
			rightArrowObj.style.visibility='hidden';
		}
	}*/
		
		
	/*Moves thumnails left onclick of right arrow*/	
	/*function moveThumbnailsLeft(object){
		
		k=object.id;
		var index=k.split("_");//finding which categories right arrow was clicked
		thumbDiv_obj= document.getElementById('thumbs_inner'+index[1]);
		//if(left_counter[index[1]-1]<=8){
		//if(left_counter==1){
			l=thumbDiv_obj.style.marginLeft;
			//if(l==""){
				LEFT=-103;
			//}else{
			//	LEFT=parseInt(l)+TEMP_LEFT;
		//	}
			// Sliding animation 
			$(thumbDiv_obj).animate({marginLeft:LEFT+"%"},1000);
			document.getElementById("leftArrow_"+index[1]).style.visibility="visible";//left arrow shud be made visible based on id
			document.getElementById("rightArrow_"+index[1]).style.visibility="hidden";//right arrow is hidden
			//right_counter[index[1]-1]++;
			//left_counter[index[1]-1]--;
			left_counter++;
		//}
	//	if(left_counter[index[1]-1]==2){
		//	object.style.visibility="hidden";//right arrow must be hidden
		//}
	//	else{
	//		object.style.visibility="visible";
	//	}
		
	}*/
	
	/*Moves thumnails left onclick of right arrow*/	
	function moveThumbnailsLeft(object){
		
		
		k=object.id;
		var arrow_index=k.split("_");//finding which categories right arrow was clicked
		
		var thumb_cnt = 'thmb_cnt'+arrow_index[2];
		
		var left_cnt_child_size = $('#'+thumb_cnt+'').children().size();
		
		
		$('thumb'+arrow_index[2]+thumb_move_index).animate({marginLeft:80+"%"},1000);
		thumb_move_index-=5;
		if(thumb_move_index<=left_cnt_child_size)
		{	
			$('#right_arrow_'+arrow_index[2]+'').css("visibility","visible");
		}
		if(thumb_move_index<=0)
		{
			$('#left_arrow_'+arrow_index[2]+'').css("visibility","hidden");
		}
	}
	
	/*Moves thumnails right onclick of left arrow*/
	function moveThumbnailsRight(object){
		
		
		k=object.id;
		var arrow_index=k.split("_");//finding which categories right arrow was clicked
		
		var thumb_cnt = 'thmb_cnt'+arrow_index[2];
		
		var left_cnt_child_size = $('#'+thumb_cnt+'').children().size();
		
		$('thumb'+arrow_index[2]+thumb_move_index).animate({marginLeft:80+"%"},1000);
		thumb_move_index+=5;
		if(thumb_move_index>=5)
		{	$('#left_arrow_'+arrow_index[2]+'').css("visibility","visible");
		}
		if(thumb_move_index>=left_cnt_child_size-5)
		{
			$('#right_arrow_'+arrow_index[2]+'').css("visibility","hidden");
		}
	}
	
	/*function moveThumbnailsRight(object){
		k=object.id;
		var index=k.split("_");//finding which categories left arrow was clicked
		thumbDiv_obj = document.getElementById('thumbs_inner'+index[1]);
		//if(right_counter[index[1]-1]>=1){
			r=thumbDiv_obj.style.marginLeft;
		//	if(r != ""){
				RIGHT=parseInt(r)+TEMP_RIGHT;//updating marginleft value
			//}
			// Sliding animation 
			$(thumbDiv_obj).animate({marginLeft:RIGHT+"%"},1000);
			document.getElementById("rightArrow_"+index[1]).style.visibility="visible";
			document.getElementById("leftArrow_"+index[1]).style.visibility="hidden";
		//	right_counter[index[1]-1]--;
			//left_counter[index[1]-1]++;
			left_counter--;
		//}
		//if(right_counter[index[1]-1]==1){
		//	object.style.visibility='hidden';//left arrow is hidden
		//}else{
		//	object.style.visibility="visible";
		//}
		
	}*/
	
	/*Moves thumnails up onclick of top arrow*/
	var cnt = 4;
	function moveThumbnailsDown(){
		/*$("#downArrow").css("visibility","visible");
		$("#galleryList"+up_val).css("display","none");
		$("#rightArrow_"+temp_up_val).css("visibility","hidden");
		$("#leftArrow_"+temp_up_val).css("visibility","hidden");
		var temp_up_val=up_val;
		temp_up_val=up_val+4;
		up_val++;
		$("#galleryList"+temp_up_val).css("display","block");
		$("#rightArrow_"+temp_up_val).css("visibility","visible");
		$("#titleName"+temp_up_val).css("visibility","visible");
		if(up_val==2){
			$("#topArrow").css("visibility","hidden");
		}*/
		
		alert('down');
		thumbRow_obj = document.getElementById('row'+cnt-1);
		$("#topArrow").css("visibility","visible");
		$(thumbRow_obj).animate({marginTop:-124.5+"%"},1000);
		cnt-=4;
		if(cnt<0)
		{
			alert('true');
			$("#topArrow").css("visibility","hidden");
		}
		
	}
	
	/*Moves thumnails down onclick of top arrow*/	
	function moveThumbnailsUp(){
		/*$("#topArrow").css("visibility","visible");
		var temp_up_val=up_val;
		temp_up_val=up_val+3;
		$("#galleryList"+temp_up_val).css("display","none");
		$("#rightArrow_"+temp_up_val).css("visibility","hidden");
		$("#leftArrow_"+temp_up_val).css("visibility","hidden");
		$("#titleName"+temp_up_val).css("visibility","hidden");
		up_val--;
		$("#galleryList"+up_val).css("display","block");
		if(up_val==1){
			$("#downArrow").css("visibility","hidden");
		}*/
	
		//alert('up');
		thumbRow_obj = document.getElementById('row_'+cnt);
		$("#downArrow").css("visibility","visible");
		$(thumbRow_obj).animate({marginBottom:-126.6+"%"},1000);
		$("#row_1").css("visibility","hidden");
		$("#row_2").css("visibility","hidden");
		$("#row_3").css("visibility","hidden");
		$("#row_4").css("visibility","hidden");
		cnt+=4;
		if(cnt-4>10)
		{
			alert('true');
			$("#downArrow").css("visibility","hidden");
			cnt=8;
		}
	}
	
	
	/*function showPreview(imgObj)
	{
	
		var large_image_obj=document.getElementById("r_app_img");
		 $("#r_app_name").text("Facebook");
		 
		 $("#r_main_desc_cont").text("Wherever you're going school,work,shopping,healthcare ride mountain line your friends and neighbors ride more than 1 million times a year, enjoying the cost savings and environmental benefits of riding public transportation.");
		//var desc_name_obj=document.getElementById("descname");
		var source=imgObj.src;
		var index=source.split("/"); 
		var index=index[index.length-1].split(".");
		large_image_obj.src="images/"+index[0]+"_big.jpg";
		var rating=imgObj.rating;
		desRating(3.4);
	
	}*/
	function sendInfodata(infodata){
		
		appInfo.setAppName(infodata.Value[0].FoodName);
		appInfo.setUrlImage(infodata.Value[1].ImageUrl.Url);
		appInfo.setPrice('Buy $' + infodata.Value[0].NoOfRatings);
		appInfo.setInstalledOn(infodata.Value[0].FoodName);
		appInfo.setSize(infodata.Value[0].NoOfRatings);
		appInfo.setDownloads(infodata.Value[0].HasVideo);
		appInfo.setRating(infodata.Value[0].NoOfRatings);
		appInfo.setVersionCode(infodata.Value[0].HasVideo);
		appInfo.setDescription(infodata.Value[0].ImageUrl.Url);
		appInfo.setUsersRated(infodata.Value[0].NoOfRatings);
		sessionStorage.setItem("appInfo", JSON.stringify(appInfo));
	}
	function desRating(rating){ 
		
		var halfStar = 0;
		var fractn = 0;
		var clearstar = 0;

		for ( i = 1; i <= 5; i++) {

			$("#desrat" + i).attr({
				"src" : "img/e_star.png"
			});
		} 
		if (!isNaN(rating) && rating != null && rating > 0) {
		 
			if (Math.floor(rating) != Math.ceil(rating)) {
			
				var fractn = rating % 1;  
				rating = Math.floor(rating);
					 
				for ( i = 1; i <= rating; i++) { 
					$("#desrat" + i ).attr({
						"src" : "img/f_star.png"
					});
				}
				fractn = Math.round(fractn);
				 
				if (fractn != 0) { 
					rating = rating + 1;
					$("#desrat" + rating ).attr({
						"src" : "img/f_star.png"
					});

				} else { 
					rating = rating + 1;
					$("#desrat" + rating ).attr({
						"src" : "img/h_star.png"
					});
				}
			} else {
				for ( i = 1; i <= rating; i++) { 
					$("#desrat" + i ).attr({
						"src" : "img/f_star.png"
					});
				}
			}

		}
		if (rating == null || rating == 0) {
			for ( i = 1; i <= 5; i++) { 
				$("#desrat" + i).attr({
					"src" : "img/star_gray.png"
				});
			}
		}
	
	}