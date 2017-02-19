//var keyLeft = 37;
//var keyRight = 39;
//var keyUp = 38;
//var keyDown = 40;
//var keyEnter = 13;
//var keyEsc = 27;
//var keyReturn = 8;
//var keyOne = 49;

var cur_ele;
var buy_ele;
var message_id;


var menuGap = 200;
var menuTopPos = 666;
childs_array = [];
thumb_app_ids = [[],[],[],[],[],[],[],[],[],[],[],[]];
child_image = [];
var cursorPos=[ //left, top, width, height
["198px", "150px", "450px", "270px"], // isVideo
["935px", "240px", 280, 150], //gallery
[menuGap + "px", menuTopPos + "px", "110px", "33px"], //settings
[menuGap*2 + "px", menuTopPos + "px", "107px", "33px"], //search
[menuGap*3 + "px", menuTopPos + "px", "131px", "33px"], //JustAdded
[menuGap*4 + 20 + "px", menuTopPos + "px", "143px", "33px"], //MostPopular
[menuGap*5 + 50 + "px", menuTopPos + "px", "122px", "33px"], //TopRated
[menuGap + 62  + "px", menuTopPos - 188 +"px", "129px", "30px"],//languagefilter
[menuGap + 62  + "px", menuTopPos - 143 +"px", "129px",  "30px"], //genrefilter
[menuGap + 62  + "px", menuTopPos - 98 +"px", "129px", "30px"], //familyfilter
[menuGap - 76  + "px", menuTopPos - 51 +"px", "257px", "28px"], //startfilter
[menuGap*2 - 91  + "px", menuTopPos - 47 +"px", "178px", "33px"], //searchbox
[menuGap*2 + 98  + "px", menuTopPos - 47 +"px", "95px", "33px"] //searchbutton
//synopsis
];


(function(win){
	console.log("entered");
	function getPos() {
	   var pos = -1;
	   var isVideo = false;
	   var isGallery = false;
	   var isSearch = false;
	   var isSettings = false;
	   var isLangFilter = false;
	   var isGenFilter = false;
	   var isFamFilter = false;
	   var isFilButton = false;
	   var isSrchText = false;
	   var isSrchBtn = false;
	   var isJa = false;
	   var isMp = false;
	   var isTr = false;
	   
		el = this;	
		gap =0;
		var cursor = document.getElementById("cursor");
		cursor.style.width = el.offsetWidth+gap;
		cursor.style.height = el.offsetHeight+gap;

		cursor.style.width = el.clientWidth;
		cursor.style.height = el.clientHeight;		
				
  for (var lx=0, ly=0; el != null;lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);		
		cursor.style.left = lx-2+"px";
		cursor.style.top = ly-5+"px";       
      
	}

	win.moveFocus = function(sobj, cobj){		
	
		var old = sobj.cursor;
		console.log("old"+old);
		if (old == cobj) {
			
			return;
		}
		if (old) {
			if (old.leave){
								
				old.leave (old);
				}

		}
		if (cobj) {
		
			if (cobj.enter) {
			
			
			var id = cobj.id;
			var value = $("#"+id).prop("tagName");
			if(id == "payCancel"){
				value = "INPUT";
			}
			if(value == "BUTTON")
			{
				$("#cursor").hide();
				
				var prev_id = previous_id.id;
				var prev_idtag = $("#"+prev_id).prop("tagName");
				if(prev_idtag == "BUTTON")
				{
					$("#"+prev_id).css("background","url('img/btn01_nor.png') no-repeat");
				$("#"+prev_id).css("background-size","100% 100%");
				$("#"+id).css("background","url('img/btn01_hov.png') no-repeat");
				$("#"+id).css("background-size","100% 100%");
				cobj.enter (cobj);
				}
				else {
				$("#"+id).css("background","url('img/btn01_hov.png') no-repeat");
				$("#"+id).css("background-size","100% 100%");
					cobj.enter (cobj);
				}
			}
			else if(value == "IMG" || value == "DIV" || value == "INPUT")
			{
				var temp_id = previous_id.id;
				
				var input = $("#"+temp_id).prop("tagName");
				
				if(input == "BUTTON" && id!="bottomPop_1")
				{
					
					$("#"+temp_id).css("background","url('img/btn01_nor.png') no-repeat");
					$("#"+temp_id).css("background-size","100% 100%");
				}
				$("#cursor").show();
				cobj.enter (cobj);
			}
			}
		}
		sobj.cursor = cobj;
		
	}
	
	win.makeNavigable = function(obj){	
		if (obj){
			obj.cursor = null;
			obj.getPos = getPos;
			
			obj.enter = function(a) {			
				this.getPos();
			}
			obj.leave = function() {
				//
			}
			obj.keyHook = function(e) {
				
				return true;
			}
		}
	}

win.DisplayBuyPopup = function() {
		console.log("............display");
		navigableObj[15] = document.getElementById("widget_topPop");
		navigableObj[23] = document.getElementById("box");
		navigableObj[24] = document.getElementById("submit");
		navigableObj[25] = document.getElementById("bottomPop_1");
		navigableObj[26] = document.getElementById("payCancel");
		navigableObj[27] = document.getElementById("couponLink");
		
		makeNavigable(navigableObj[15]);
		makeNavigable(navigableObj[23]);
		makeNavigable(navigableObj[24]);
		makeNavigable(navigableObj[25]);
		makeNavigable(navigableObj[26]);
		//coupon division
		if (navigableObj[15]) {
			navigableObj[15].keyHook = function(e) {
				previous_id = navigableObj[15];

				if (e.keyCode == keyLeft) {// left

					e.preventDefault();
					focus_elmt = navigableObj[15];
					moveFocus(document, navigableObj[15]);
					navigableObj[15].focus();
				}
				if (e.keyCode == keyRight) {// left

					e.preventDefault();
					focus_elmt = navigableObj[15];
					moveFocus(document, navigableObj[15]);
					navigableObj[15].focus();
				}

				//if (e.keyCode == keyDown) {// left
				if (e.keyCode == keyDown) {// left
					e.preventDefault();
					if ($("#widget_topPop").attr('showText') == 'true') {
						focus_elmt = navigableObj[25];
						moveFocus(document, navigableObj[25]);
						navigableObj[25].focus();
					} else {
						focus_elmt = navigableObj[23];
						moveFocus(document, navigableObj[23]);
						navigableObj[23].focus();
					}
				}
				if (e.keyCode == keyEnter) {
					e.preventDefault();
					this.onclick();
					if ($("#widget_topPop").attr('showText') == 'true') {
						focus_elmt = navigableObj[15];
						//i made change in line 205. i changed document to navigableObj[15]
						moveFocus(navigableObj[15], navigableObj[15]);
						navigableObj[15].focus();
					} else {
						focus_elmt = navigableObj[23];
						moveFocus(document, navigableObj[23]);
						navigableObj[23].focus();
					}
				}
				if (e.keyCode == keyEsc || e.keyCode == keyReturn) {
					e.preventDefault();
					navigableObj[8].focus();
					focus_elmt = navigableObj[8];
					moveFocus(document, navigableObj[8]);
					navigableObj[26].onclick();

				}
			}
			//coupon input box
			if (navigableObj[23]) {
				navigableObj[23].keyHook = function(e) {
					previous_id = navigableObj[23];

					if (e.keyCode == keyLeft) {// left

						e.preventDefault();
						focus_elmt = navigableObj[23];
						moveFocus(document, navigableObj[23]);
						navigableObj[23].focus();
					}
					if (e.keyCode == keyRight) {// right

						e.preventDefault();
						focus_elmt = navigableObj[24];
						moveFocus(document, navigableObj[24]);
						navigableObj[24].focus();
					}
					if (e.keyCode == keyUp) {// up

						e.preventDefault();
						focus_elmt = navigableObj[15];
						moveFocus(document, navigableObj[15]);
						navigableObj[15].focus();
					}
					if (e.keyCode == keyDown) {// down

						e.preventDefault();
						focus_elmt = navigableObj[25];
						moveFocus(document, navigableObj[25]);
						navigableObj[25].focus();
					}

					if (e.keyCode == keyEsc || e.keyCode == keyReturn) {
						e.preventDefault();
						navigableObj[26].onclick();
						focus_elmt = navigableObj[8];
						moveFocus(document, navigableObj[8]);
						navigableObj[8].focus();
						
					}
				}
			}
			//coupon submit
			if (navigableObj[24]) {
				navigableObj[24].keyHook = function(e) {
					previous_id = navigableObj[24];

					if (e.keyCode == keyLeft) {// left
						e.preventDefault();
						focus_elmt = navigableObj[23];
						moveFocus(document, navigableObj[23]);
						navigableObj[23].focus();
					}
					if (e.keyCode == keyRight) {// right

						e.preventDefault();
						focus_elmt = navigableObj[24];
						moveFocus(document, navigableObj[24]);
						navigableObj[24].focus();
					}
					if (e.keyCode == keyUp) {// up

						e.preventDefault();
						focus_elmt = navigableObj[15];
						moveFocus(document, navigableObj[15]);
						navigableObj[15].focus();
					}
					if (e.keyCode == keyDown) {// down

						e.preventDefault();
						focus_elmt = navigableObj[25];
						moveFocus(document, navigableObj[25]);
						navigableObj[25].focus();
					}
					if (e.keyCode == keyEnter) {
						e.preventDefault();
						this.onclick();
						setTimeout(function(){
						if($("#closePop").css("display") == "block")
						{
						console.log(".............message");
						focus_elmt = navigableObj[21];
						moveFocus(document, navigableObj[21]);
						navigableObj[21].focus();
						}
						},500);
					}
					if (e.keyCode == keyEsc || e.keyCode == keyReturn) {
						e.preventDefault();
						navigableObj[26].onclick();
						focus_elmt = navigableObj[8];
						moveFocus(document, navigableObj[8]);
						navigableObj[8].focus();
						
					}
				}
			}
			//paypal button
			if (navigableObj[25]) {
				navigableObj[25].keyHook = function(e) {
					previous_id = navigableObj[25];

					if (e.keyCode == keyLeft) {// left

						e.preventDefault();
						focus_elmt = navigableObj[25];
						moveFocus(document, navigableObj[25]);
						navigableObj[25].focus();
					}
					if (e.keyCode == keyRight) {// right

						e.preventDefault();
						focus_elmt = navigableObj[26];
						moveFocus(document, navigableObj[26]);
						navigableObj[26].focus();
					}
					if (e.keyCode == keyUp) {// up

						e.preventDefault();
						if ($("#widget_topPop").attr('showText') == 'true') {
							focus_elmt = navigableObj[15];
							moveFocus(document, navigableObj[15]);
							navigableObj[15].focus();
						} else {
							focus_elmt = navigableObj[23];
							moveFocus(document, navigableObj[23]);
							navigableObj[23].focus();
						}

					}
					if (e.keyCode == keyDown) {// down

						e.preventDefault();
						focus_elmt = navigableObj[25];
						moveFocus(document, navigableObj[25]);
						navigableObj[25].focus();
					}
					/*if (e.keyCode == keyEnter) {
						e.preventDefault();
						this.onclick();
						alert("hi");
					}*/
					if (e.keyCode == keyEsc || e.keyCode == keyReturn) {
						e.preventDefault();
						navigableObj[26].onclick();
						focus_elmt = navigableObj[8];
						moveFocus(document, navigableObj[8]);
						navigableObj[8].focus();
						
					}
				}
			}
			//cancel button
			if (navigableObj[26]) {
				navigableObj[26].keyHook = function(e) {
					previous_id = navigableObj[26];

					if (e.keyCode == keyLeft) {// left

						e.preventDefault();
						focus_elmt = navigableObj[25];
						moveFocus(document, navigableObj[25]);
						navigableObj[25].focus();
					}
					if (e.keyCode == keyRight) {// right

						e.preventDefault();
						focus_elmt = navigableObj[26];
						moveFocus(document, navigableObj[26]);
						navigableObj[26].focus();
					}
					if (e.keyCode == keyUp) {// up

						e.preventDefault();
						if ($("#widget_topPop").attr('showText') == 'true') {
							focus_elmt = navigableObj[15];
							moveFocus(document, navigableObj[15]);
							navigableObj[15].focus();
						} else {
							focus_elmt = navigableObj[23];
							moveFocus(document, navigableObj[23]);
							navigableObj[23].focus();
						}

					}
					if (e.keyCode == keyDown) {// down

						e.preventDefault();
						focus_elmt = navigableObj[26];
						moveFocus(document, navigableObj[26]);
						navigableObj[26].focus();
					}
					if (e.keyCode == keyEnter) {
						e.preventDefault();
						this.onclick();
						focus_elmt = navigableObj[8];
						moveFocus(document, navigableObj[8]);
						navigableObj[8].focus();
					}
					if (e.keyCode == keyEsc || e.keyCode == keyReturn) {
						e.preventDefault();
						
						this.onclick();
						
						focus_elmt = navigableObj[8];
						moveFocus(document, navigableObj[8]);
						navigableObj[8].focus();
						
						
					}
				}
			}

		}
	}
win.getThumbnails = function(){
		try{
			
		
		
		if(document.getElementById("row_0")!=null)
		{
			var count = $("#thmb_cnt0").children();
			
			for(var counter = 0;(counter<count.size() && counter<5);counter++)
			{
				 cur_ele = document.getElementById('thumb_0_0');
				 var ele = document.getElementById('thumb_0_'+counter+'');
				makeNavigable(ele);
				
			}
			
		}
				
		if(document.getElementById("row_1")!=null)
		{
			var count = $("#thmb_cnt1").children();
			
			for(var counter = 0;(counter<count.size() && counter<5);counter++)
			{
				if(!document.getElementById('thumb_0_0'))
				{
				 cur_ele = document.getElementById('thumb_1_0');
				 }
				 var ele = document.getElementById('thumb_1_'+counter+'');
				makeNavigable(ele);
				
			}
			
		}
		
		if(document.getElementById("row_2")!=null)
		{
			var count = $("#thmb_cnt2").children();
			
			for(var counter = 0;(counter<count.size() && counter<5);counter++)
			{
				// cur_ele = document.getElementById('thumb_2_0');
				 var ele = document.getElementById('thumb_2_'+counter+'');
				makeNavigable(ele);
				
			}
		}
		if(document.getElementById("row_3")!=null)
		{
			var count = $("#thmb_cnt3").children();
			
			for(var counter = 0;(counter<count.size() && counter<5);counter++)
			{
				// cur_ele = document.getElementById('thumb_3_0');
				 var ele = document.getElementById('thumb_3_'+counter+'');
			
				makeNavigable(ele);
				
			}
		
		}
		if(document.getElementById("row_4")!=null)
		{
			var count = $("#thmb_cnt4").children();
			
			for(var counter = 0;(counter<count.size() && counter<5);counter++)
			{
				 var ele = document.getElementById('thumb_4_'+counter+'');
				makeNavigable(ele);
					}
		}
		}catch(e){
					console.log ("@@@ERROR@@@ : getthumbnail :"+ e);
		}
		if(document.getElementById('thumb_0_0'))
		{
			navigableObj[22] = document.getElementById('thumb_0_0');
		}
		else if(document.getElementById('thumb_1_0'))
		{
			navigableObj[22] = document.getElementById('thumb_1_0');
		}
		else if(document.getElementById('thumb_2_0'))
		{
			navigableObj[22] = document.getElementById('thumb_2_0');
		}
		else if(document.getElementById('thumb_3_0'))
		{
			navigableObj[22] = document.getElementById('thumb_3_0');
		}
		if(navigableObj[22]){
		
					navigableObj[22].keyHook = function(e){
					try{
						
						if(e.keyCode == keyRight) { // right					
							 e.preventDefault();
							var id = cur_ele.id;
							var split_id = id.split("_");
							var item_count = parseInt(split_id[2])+1;
							
							if(!document.getElementById(split_id[0]+"_"+split_id[1]+"_"+item_count))
							{
								if(split_id[1] == 0 || split_id[1] == 1 || split_id[1] == 2)
								{
								moveFocus(document,navigableObj[6]);
								navigableObj[6].focus();
								}
								else if(split_id[1] == 3 || split_id[1] == 4){
									 var id = navigableObj[13].id;
								if($("#"+id).css("display") == "block")
								{
							
								focus_elmt = navigableObj[13];
								moveFocus(document,navigableObj[13]);
								navigableObj[13].focus();
								}else {
									var id = navigableObj[8].id;
								if($("#"+id).css("display") == "block")
								{
								
								focus_elmt = navigableObj[8];
								moveFocus(document,navigableObj[8]);
								navigableObj[8].focus();
								}
								else {
								var id = navigableObj[12].id;
								if($("#"+id).css("display") == "block")
								{
							
								focus_elmt = navigableObj[12];
								moveFocus(document,navigableObj[12]);
								navigableObj[12].focus();
									}
									}
								}
							}
							}
							else{
								
								var temp = parseInt(split_id[2])+1;
								
								var new_id = split_id[0]+"_"+split_id[1]+"_"+temp;
								
								cur_ele = document.getElementById(new_id);
								navigableObj[22] = cur_ele;
								
								moveFocus(document,navigableObj[22]);
								navigableObj[22].focus();
								navigableObj[22].keyHook = this.keyHook;
														
							}
						}
						if(e.keyCode == keyLeft) { // left				
							 e.preventDefault();
							var id = cur_ele.id;
							
							var split_id = id.split("_");
							
							if(split_id[2]!=0)
							{
								
								var temp = parseInt(split_id[2])-1;
								
								var new_id = split_id[0]+"_"+split_id[1]+"_"+temp;
								cur_ele = document.getElementById(new_id);
								navigableObj[22] = cur_ele;
								
								moveFocus(document,navigableObj[22]);
								navigableObj[22].focus();
								navigableObj[22].keyHook = this.keyHook;
								
							}
							
						}
						if(e.keyCode == keyDown) { // down	
											
							 e.preventDefault();
							var id = cur_ele.id;
							
							var split_id = id.split("_");
							
							var item_count = parseInt(split_id[1])+1;
							if(!document.getElementById('thumb_0_0'))
							{
								if(split_id[1]!=4)
								{

								
								var temp = parseInt(split_id[1])+1;
								
								var new_id = split_id[0]+"_"+temp+"_"+split_id[2];
								
								cur_ele = document.getElementById(new_id);
								var temp1 = parseInt(split_id[2]);
								while(!cur_ele){
								
								var temp1 = temp1-1;
								
								var new_id = split_id[0]+"_"+temp+"_"+temp1;
								
								cur_ele = document.getElementById(new_id);
								}
								navigableObj[22] = cur_ele;
								
								moveFocus(document,navigableObj[22]);
								navigableObj[22].focus();
								navigableObj[22].keyHook = this.keyHook;
								
							
								}
							}
							else{
							if(split_id[1]!=3)
							{

								
								var temp = parseInt(split_id[1])+1;
								
								var new_id = split_id[0]+"_"+temp+"_"+split_id[2];
								console.log("............................."+id);
								cur_ele = document.getElementById(new_id);
								var temp1 = parseInt(split_id[2]);
								while(!cur_ele){
								
								var temp1 = temp1-1;
								
								var new_id = split_id[0]+"_"+temp+"_"+temp1;
								
								cur_ele = document.getElementById(new_id);
								}
								navigableObj[22] = cur_ele;
								
								moveFocus(document,navigableObj[22]);
								navigableObj[22].focus();
								navigableObj[22].keyHook = this.keyHook;
								
							
								}
							
							}
							
						}
						if(e.keyCode == keyUp) { // up	
							console.log("up entered");					
							 e.preventDefault();
							var id = cur_ele.id;
							
							var split_id = id.split("_");
							if(!document.getElementById('thumb_0_0'))
							{
							if(split_id[1]==1)
							{
								moveFocus(document,navigableObj[1]);
								navigableObj[1].focus();
								//cur_ele = document.getElementById("thumb_1_0");
							}
							else{
								
								var temp = parseInt(split_id[1])-1;
								
								var new_id = split_id[0]+"_"+temp+"_"+split_id[2];
								cur_ele = document.getElementById(new_id);
								 temp1 = parseInt(split_id[2]);
								while(!cur_ele){
								var temp1 = temp1-1;
								
								var new_id = split_id[0]+"_"+temp+"_"+temp1;
								
								cur_ele = document.getElementById(new_id);
								}
								navigableObj[22] = cur_ele;
								
								moveFocus(document,navigableObj[22]);
								navigableObj[22].focus();
								navigableObj[22].keyHook = this.keyHook;
																
								}
							}
							else{
							if(split_id[1]==0)
							{
								moveFocus(document,navigableObj[1]);
								navigableObj[1].focus();
								//cur_ele = document.getElementById("thumb_1_0");
							}
							else{
								
								var temp = parseInt(split_id[1])-1;
								
								var new_id = split_id[0]+"_"+temp+"_"+split_id[2];
								cur_ele = document.getElementById(new_id);
								 temp1 = parseInt(split_id[2]);
								while(!cur_ele){
								var temp1 = temp1-1;
								
								var new_id = split_id[0]+"_"+temp+"_"+temp1;
								
								cur_ele = document.getElementById(new_id);
								}
								navigableObj[22] = cur_ele;
								
								moveFocus(document,navigableObj[22]);
								navigableObj[22].focus();
								navigableObj[22].keyHook = this.keyHook;
																
								}
							}
						}
							if(e.keyCode == keyEnter) { // enter					
							 e.preventDefault();
							 this.onclick();
							 }
					}catch(e){
						console.log ("@@@ERROR@@@ : navigableObj[22] :"+ e);
					}
					}
				}
}
$(document).keydown(function(e) {
//$(document).keypress(function(e) {
	
	if (e.keyCode == keyReturn)
	    e.preventDefault();	
		
	if (e.keyCode == keyReturn || e.keyCode == keyEsc) {
    }    
	
    if ($('#mymessage:visible').length > 0 || (document.webkitIsFullScreen && e.keyCode != keyOne)) {
        return false;
    }


	
		if(document.cursor && document.cursor.keyHook && document.cursor.keyHook(e)) {
			
		
		}
	});
	win.setFocusNewIds = function(){
	}
	
			win.setFocusIds = function(){
			previous_id = document.getElementById("myprofile");
			
				
				navigableObj = [document, // 0
				document.getElementById("feature"), //1 document.getElementsByClassName("p4")[0],            
                document.getElementById("categories"), // 2
                document.getElementById("toprated"), // 3
                document.getElementById("myapp"), // 4
                document.getElementById("search"),  // 5
                document.getElementById("myprofile"),  // 6
                document.getElementById("logout"),  // 7
                document.getElementById("buy"),  // 8
                document.getElementById("lock"),  // 9
                document.getElementById("share"), // 10
				 document.getElementById("info"), // 11
				document.getElementById("register"), // 12
				 document.getElementById("open"), // 13
				 document.getElementById("unregister"), // 14
				  buy_ele,//15
				 document.getElementById("searchTextBox"),//16
				 document.getElementById("searchTextButton"), // 17
				 	document.getElementById("gcancel"),//18
					document.getElementById("logout_1"),//19
					document.getElementById("logout_2"), //20
					document.getElementById("gCancel"),//21
					cur_ele,
					null,null,null,null];//22
				for(var i=0; i<navigableObj.length; i++) {					
					makeNavigable(navigableObj[i]);
				}
			
				//error popup
				navigableObj[21].keyHook = function(e){
				previous_id = navigableObj[21];
						if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						focus_elmt = navigableObj[24];
						moveFocus(document,navigableObj[24]);
						navigableObj[24].focus();
					}
					if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();
						this.onclick();						 
					  focus_elmt = navigableObj[24];
						moveFocus(document,navigableObj[24]);
						navigableObj[24].focus();
					}
				}
				//logout cancel button
				navigableObj[20].keyHook = function(e) {
					previous_id = navigableObj[20];
									    
					if(e.keyCode == keyLeft) { // left
					console.log("left key");
				    	 e.preventDefault();	
						focus_elmt = navigableObj[19];
						moveFocus(document,navigableObj[19]);
						navigableObj[19].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						focus_elmt = navigableObj[7];
						moveFocus(document,navigableObj[7]);
						navigableObj[7].focus();
					}
					if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();
						navigableObj[20].onclick();						 
					  focus_elmt = navigableObj[7];
						moveFocus(document,navigableObj[7]);
						navigableObj[7].focus();
					}
					
				}	    				
                 //logout ok button
				navigableObj[19].keyHook = function(e) {
				previous_id = navigableObj[19];
					
				    
					if(e.keyCode == keyRight) { // right
					console.log("right key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[20];
						moveFocus(document,navigableObj[20]);
						navigableObj[20].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						setTimeout(function() {
						if($("#closePopup").css("display") == "block")
						{
						console.log("....................logout popup");
						focus_elmt = navigableObj[18];
						moveFocus(document,navigableObj[18]);
						navigableObj[18].focus();
						message_id = navigableObj[7];
						}else{
						console.log("................else logout ok");
						focus_elmt = navigableObj[7];
						moveFocus(document,navigableObj[7]);
						navigableObj[7].focus();
						}},500);
						
					}
					if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();
						
						navigableObj[20].onclick();						 
						focus_elmt = navigableObj[7];
						moveFocus(document,navigableObj[7]);
						navigableObj[7].focus();
					}
					
				}
					//error popup
					navigableObj[18].keyHook = function(e) {
				previous_id = navigableObj[18];
				if(e.keyCode == keyEnter) {	
				console.log("....................."+message_id.id);
				navigableObj[18].onclick();
				setTimeout(function() {
				focus_elmt = message_id;
				
				console.log("......................message_id"+message_id);
				moveFocus(document,message_id);
						message_id.focus();
					},50);	
				}
				if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();
						
						navigableObj[18].onclick();
				
				focus_elmt = message_id;
				moveFocus(document,message_id);
						message_id.focus();
					}
				}
			//searchbutton button
				navigableObj[17].keyHook = function(e) {
				previous_id = navigableObj[17];
					console.log("entered");
				    
					if(e.keyCode == keyLeft) { // left
					console.log("left key");
				    	 e.preventDefault();	
						focus_elmt = navigableObj[16];
						moveFocus(document,navigableObj[16]);
						navigableObj[16].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						setTimeout(function() {
						if($("#closePopup").css("display") == "block")
						{
						console.log("....................popup");
						focus_elmt = navigableObj[18];
						moveFocus(document,navigableObj[18]);
						navigableObj[18].focus();
						message_id = navigableObj[5];
						}else{
						
						focus_elmt = navigableObj[5];
						moveFocus(document,navigableObj[5]);
						navigableObj[5].focus();
						}},500);
					}
					if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();
						navigableObj[5].onclick();						 
					  focus_elmt = navigableObj[5];
						moveFocus(document,navigableObj[5]);
						navigableObj[5].focus();
					}
					
					
				}	
								
                 //searchbox 
				navigableObj[16].keyHook = function(e) {
				previous_id = navigableObj[16];
					console.log("entered");
				    
					if(e.keyCode == keyRight) { // right
					console.log("right key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[17];
						moveFocus(document,navigableObj[17]);
						navigableObj[17].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						
					}
					if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();
							navigableObj[5].onclick();	
					  focus_elmt = navigableObj[5];
						moveFocus(document,navigableObj[5]);
						navigableObj[5].focus();
					}
					
				}
				//thumnails container
				if (navigableObj[15]) {
					navigableObj[15].keyHook = function(e) {
					previous_id = navigableObj[15];
					}				
				}
				
				//unregister button
				navigableObj[14].keyHook = function(e) {
				previous_id = navigableObj[14];
					console.log("entered");
				    if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[13];
						moveFocus(document,navigableObj[13]);
						navigableObj[13].focus();
					}
					if(e.keyCode == keyUp) { // top
					console.log("top key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[7];
						moveFocus(document,navigableObj[7]);
						navigableObj[7].focus();
					}
					if(e.keyCode == keyDown) { // down
					console.log("down key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[9];
						moveFocus(document,navigableObj[9]);
						navigableObj[9].focus();
					}
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						focus_elmt = navigableObj[12];
						moveFocus(document,navigableObj[12]);
						navigableObj[12].focus();
						
					}
					
				}	
				//open button
				navigableObj[13].keyHook = function(e) {
				previous_id = navigableObj[13];
					console.log("entered");
				    if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[14];
						moveFocus(document,navigableObj[14]);
						navigableObj[14].focus();
					}
					if(e.keyCode == keyUp) { // top
					console.log("top key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[6];
						moveFocus(document,navigableObj[6]);
						navigableObj[6].focus();
					}
					if(e.keyCode == keyDown) { // down
					console.log("down key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[9];
						moveFocus(document,navigableObj[9]);
						navigableObj[9].focus();
					}
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						focus_elmt = navigableObj[13];
						moveFocus(document,navigableObj[13]);
						navigableObj[13].focus();
						
					}
					
				}	
				//register button
				navigableObj[12].keyHook = function(e) {
				previous_id = navigableObj[12];
					console.log("entered");
				    if(e.keyCode == keyDown) { // down
						console.log("down key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[9];
						moveFocus(document,navigableObj[9]);
						navigableObj[9].focus();
					}
					if(e.keyCode == keyUp) { // top
					console.log("top key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[6];
						moveFocus(document,navigableObj[6]);
						navigableObj[6].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						 focus_elmt = navigableObj[13];
						moveFocus(document,navigableObj[13]);
						navigableObj[13].focus();
						
					}
					
				}				
				//info button
				navigableObj[11].keyHook = function(e) {
					previous_id = navigableObj[11];
					console.log("entered");
				    if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[10];
						moveFocus(document,navigableObj[10]);
						navigableObj[10].focus();
					}
					if(e.keyCode == keyUp) { // top
					console.log("top key");
				    	 e.preventDefault();	
						 focus_elmt = navigableObj[9];
						moveFocus(document,navigableObj[9]);
						navigableObj[9].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						
					}
					if(e.keyCode == keyEsc || e.keyCode == keyReturn) {
						 e.preventDefault();	
					  
					}
				}	

					//share button
				navigableObj[10].keyHook = function(e) {
				previous_id = navigableObj[10];
				 if(e.keyCode == keyRight) { // Right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[11];
						moveFocus(document,navigableObj[11]);
						navigableObj[11].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						//	focus_elmt = navigableObj[15];
						//moveFocus(document,navigableObj[15]);
						
					}
					if(e.keyCode == keyUp) { // up
						console.log("Top key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[9];
						moveFocus(document,navigableObj[9]);
					navigableObj[9].focus();
					}
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						
					}
				
				}
			//lock button
				navigableObj[9].keyHook = function(e) {
				previous_id = navigableObj[9];
					if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[11];
						moveFocus(document,navigableObj[11]);
						navigableObj[11].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						//	focus_elmt = navigableObj[12];
					//	moveFocus(document,navigableObj[12]);
					//	navigableObj[12].focus();
					}
					if(e.keyCode == keyUp) { // up
						console.log("up key");
				    	 e.preventDefault();
						 var id = navigableObj[13].id;
						 console.log("idddddddddddd"+$("#"+id).css("display"));
						 if($("#"+id).css("display") == "block")
						 {
							console.log("open");
							focus_elmt = navigableObj[13];
							moveFocus(document,navigableObj[13]);
							navigableObj[13].focus();
						}else {
							var id = navigableObj[8].id;
							if($("#"+id).css("display") == "block")
							{
							console.log("buy");
							focus_elmt = navigableObj[8];
							moveFocus(document,navigableObj[8]);
							navigableObj[8].focus();
							}
							else {
							var id = navigableObj[12].id;
							if($("#"+id).css("display") == "block")
							{
							console.log("register");
							focus_elmt = navigableObj[12];
							moveFocus(document,navigableObj[12]);
							navigableObj[12].focus();
							}
							}
						}
					}
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						
					}
				
				}
				//buy button
				navigableObj[8].keyHook = function(e) {
				previous_id = navigableObj[8];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[9];
						moveFocus(document,navigableObj[9]);
						navigableObj[9].focus();
					}
					if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							//focus_elmt = navigableObj[13]
						//moveFocus(document,navigableObj[13]);
						//navigableObj[13].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						//	focus_elmt = navigableObj[12];
					//	moveFocus(document,navigableObj[12]);
						
					}
					if(e.keyCode == keyUp) { // up
						console.log("Up key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[6];
						moveFocus(document,navigableObj[6]);
					navigableObj[6].focus();
					}
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						//DisplayBuyPopup();
						if (navigableObj[15]) {
					console.log("nav................" + navigableObj[15]);
					e.preventDefault();
					focus_elmt = navigableObj[15];
					moveFocus(document, navigableObj[15]);
					navigableObj[15].focus();
				}
						
					}
				}
				//logout button
				navigableObj[7].keyHook = function(e) {
				previous_id = navigableObj[7];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						 var id = navigableObj[14].id;
						 if($("#"+id).css("display") == "block")
						 {
						 focus_elmt = navigableObj[14];
						moveFocus(document,navigableObj[14]);
						navigableObj[14].focus();
						}else {
						var id = navigableObj[8].id;
						 if($("#"+id).css("display") == "block")
						 {
						 focus_elmt = navigableObj[8];
						moveFocus(document,navigableObj[8]);
						navigableObj[8].focus();
						}
						else {
						var id = navigableObj[12].id;
						 if($("#"+id).css("display") == "block")
						 {
						 focus_elmt = navigableObj[12];
						moveFocus(document,navigableObj[12]);
						navigableObj[12].focus();
						}
						}
						}
					}
					
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[6];
						moveFocus(document,navigableObj[6]);
						navigableObj[6].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						console.log(".............logout");
						focus_elmt = navigableObj[19];
						moveFocus(document,navigableObj[19]);
						navigableObj[19].focus();
						
					}
				}
				//Myaccount button
				navigableObj[6].keyHook = function(e) {
				previous_id = navigableObj[6];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						 var id = navigableObj[13].id;
						 if($("#"+id).css("display") == "block")
						 {
							focus_elmt = navigableObj[13];
							moveFocus(document,navigableObj[13]);
							navigableObj[13].focus();
						}else {
						var id = navigableObj[8].id;
						 if($("#"+id).css("display") == "block")
						 {
						 focus_elmt = navigableObj[8];
						moveFocus(document,navigableObj[8]);
						navigableObj[8].focus();
						}
						else {
						var id = navigableObj[12].id;
						 if($("#"+id).css("display") == "block")
						 {
						 focus_elmt = navigableObj[12];
						moveFocus(document,navigableObj[12]);
						navigableObj[12].focus();
						}
						}
						}
						
							
					}
					if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[7]
						moveFocus(document,navigableObj[7]);
						navigableObj[7].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						 	focus_elmt = navigableObj[5];
							moveFocus(document,navigableObj[5]);
							navigableObj[5].focus();
						
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						
					}
				}
				
				//search button
				navigableObj[5].keyHook = function(e) {
				previous_id = navigableObj[5];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						
						moveFocus(document,navigableObj[22]);
						navigableObj[22].focus();

					}
					if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[6]
						moveFocus(document,navigableObj[6]);
						navigableObj[6].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						focus_elmt = navigableObj[4];
						moveFocus(document,navigableObj[4]);
						navigableObj[4].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						focus_elmt = navigableObj[16];
						moveFocus(document,navigableObj[16]);
						navigableObj[16].focus();
						
					}
				}
				//myapps button
				navigableObj[4].keyHook = function(e) {
				previous_id = navigableObj[4];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						
						moveFocus(document,navigableObj[22]);
						navigableObj[22].focus();
console.log ("============" + navigableObj[22].id);						
console.log (navigableObj[22].keyHook)
					}
					if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[5]
						moveFocus(document,navigableObj[5]);
						navigableObj[5].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						focus_elmt = navigableObj[3];
					moveFocus(document,navigableObj[3]);
						navigableObj[3].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						setTimeout(function(){
						if($("#closePopup").css("display") == "block")
						{
						console.log("....................logout popup");
						focus_elmt = navigableObj[18];
						moveFocus(document,navigableObj[18]);
						navigableObj[18].focus();
						message_id = navigableObj[4];
						}
						},1000);
						//getThumbnails();
					}
				}
				//topnews button
				navigableObj[3].keyHook = function(e) {
				previous_id = navigableObj[3];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						
						moveFocus(document,navigableObj[22]);
						navigableObj[22].focus();
console.log ("============" + navigableObj[22].id);						
console.log (navigableObj[22].keyHook)
					}
				if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[4]
						moveFocus(document,navigableObj[4]);
						navigableObj[4].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						focus_elmt = navigableObj[2];
					moveFocus(document,navigableObj[2]);
						navigableObj[2].focus();
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						setTimeout(function(){
						if($("#closePopup").css("display") == "block")
						{
						console.log("....................logout popup");
						focus_elmt = navigableObj[18];
						moveFocus(document,navigableObj[18]);
						navigableObj[18].focus();
						message_id = navigableObj[3];
						}
						},1000);
						//getThumbnails();
					}
				}
				//categories button
				navigableObj[2].keyHook = function(e) {
				previous_id = navigableObj[2];
				if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						/*focus_elmt = child_image[1];
						moveFocus(document,child_image[1]);
						child_image[1].focus();*/
						
					}
				if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[3];
						moveFocus(document,navigableObj[3]);
						navigableObj[3].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
						/* if(navigableObj[7].css("visibility") == "hidden")
						 {
							focus_elmt = navigableObj[3];
							moveFocus(document,navigableObj[3]);
							navigableObj[3].focus();
						}
						else
						{*/
							focus_elmt = navigableObj[1];
							moveFocus(document,navigableObj[1]);
							navigableObj[1].focus();
							//}
					}
					if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						console.log ("============" + navigableObj[22].id);
						moveFocus(document,navigableObj[22]);
						navigableObj[22].focus();
		console.log ("============" + navigableObj[22].id);						
		console.log (navigableObj[22].keyHook)
					}
					
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
						setTimeout(function(){
						if($("#closePopup").css("display") == "block")
						{
						console.log("....................categories");
						focus_elmt = navigableObj[18];
						moveFocus(document,navigableObj[18]);
						navigableObj[18].focus();
						message_id = navigableObj[2];
						}
						},1000);
						//getThumbnails();
						//setTimeout(function(){getThumbnails();},6000);
						
					}
				}
				//featured button
				navigableObj[1].keyHook = function(e) {
				previous_id = navigableObj[1];
				if(e.keyCode == keyRight) { // right
						console.log("right key");
				    	 e.preventDefault();
							focus_elmt = navigableObj[2];
						moveFocus(document,navigableObj[2]);
						navigableObj[2].focus();
					}
					if(e.keyCode == keyLeft) { // left
						console.log("left key");
				    	 e.preventDefault();
					//	focus_elmt = navigableObj[3];
						//moveFocus(document,navigableObj[3]);
					//	navigableObj[3].focus();
					}
					if(e.keyCode == keyDown) { // Down
						console.log("down key");
				    	 e.preventDefault();
						
						moveFocus(document,navigableObj[22]);
						navigableObj[22].focus();
			console.log ("============" + navigableObj[22].id);						
		console.log (navigableObj[22].keyHook)
					}
					if(e.keyCode == keyEnter) {		
						 e.preventDefault();	
						this.onclick();
					//	getThumbnails();
						
					}
				}
					
				
				var mydiv = document.getElementById("cursor");
				mydiv.style.visibility = "visible";
				moveFocus(document,navigableObj[1]);
				previous_id = navigableObj[1];
	//}catch(e){console.log(e);}
	//	},
	//	6000);
	}
})(window);



var defaultStep = 20;
var step = defaultStep;

function scrollDivDown(id) {
    document.getElementById(id).scrollTop += step;
}

function scrollDivUp(id) {
    document.getElementById(id).scrollTop -= step;
}

var checkForScroll = function(id) {
    var tsl;    
    if(document.getElementById(id).scrollTop>0)
        return document.getElementById(id).scrollTop;
        
    document.getElementById(id).scrollTop += 10; // try to scroll
    tsl = document.getElementById(id).scrollTop; // will be 0 if no scroll bar
    document.getElementById(id).scrollTop = 0;   // reset scroll
    return tsl;
};

function doGetCaretPosition (oField) {
    var iCaretPos = 0;
    if (document.selection) {
        oField.focus ();
        var oSel = document.selection.createRange ();
        oSel.moveStart ('character', -oField.value.length);
        iCaretPos = oSel.text.length;
    } else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;
    
    return (iCaretPos);
}

function setCursor(node,pos){
    var node = (typeof node == "string" || node instanceof String) ? document.getElementById(node) : node;

    if(!node){
        return false;
    }else if(node.createTextRange){
        var textRange = node.createTextRange();
        textRange.collapse(true);
        textRange.moveEnd(pos);
        textRange.moveStart(pos);
        textRange.select();
        return true;
    }else if(node.setSelectionRange){
        node.setSelectionRange(pos,pos);
        return true;
    }

    return false;
}
function deleteChar(oField){
		var ci= doGetCaretPosition(navigableObj[13]);
		var str_main = document.getElementById('searchbox').value;
		var str_len = oField.value.length;
		
		if (str_main != "") {
			var str_first = str_main.substring(0,ci-1);
			var str_second = str_main.substring(ci,str_len);		
			var str_new = str_first.concat(str_second);
			document.getElementById('searchbox').value = str_new;
			setCursor(navigableObj[13], ci-1);
		
		}
}
/*function myFocus(){
	console.log("inside myfocus");
moveFocus(document,navigableObj[21]);
}*/
