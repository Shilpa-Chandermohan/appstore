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
	var ratings = index[1];
	$("#user_rating").html(ratings);
	for(i=1;i<=5;i++){
		$("#star_"+i).attr('src','img/star_gray_info.png' );
	}
	for(i=1;i<=index[1];i++){
		$("#star_"+i).attr('src','img/star_red_info.png' );
	}	
	
}




				