//var pcKey = {"Left":37,"Right":39,"Up":38,"Down":40,"Enter":13,"Escape":27};
var boxeeKeyCode = {"Left":37,"Right":39,"Up":38,"Down":40,"Enter":13,"Escape":27};
var lGKey = {"Left":37,"Right":39,"Up":38,"Down":40,"Enter":13,"Escape":27};

function _(id) {

	// About object is returned if there is no 'id' parameter
	var about = {
		Version: 1.0,
		Author: "",
		Created: "",
		Updated: ""
	};
  
	if (id) {

		// Avoid clobbering the window scope: 
		// return a new _ object if we're in the wrong scope
		if (window === this) 
		{
			return new _(id);
		}

		// We're in the correct object scop:
		// Init our element object and return the object
		this.e = document.getElementById(id);
		return this;
	} else 
	{
		// No 'id' paramter was given, return the 'about' object
		return about;
	}
}

//boxeeAPI.keyboardMode();
var currentdevice="PC";
var curKeyCode=pcKey;
var next;
var flag=false;
var flag1=false;
var flag2=false;
var rightFlag=0;
switch(currentdevice){
case "Boxee"://include api for boxee
			    var head= document.getElementsByTagName('head')[0];
				var script= document.createElement('script');
				script.type= 'text/javascript';
				script.src= '/js/boxeeAPI.js';
   
				head.appendChild(script);
				boxeeAPI.keyboardMode();
			    curKeyCode=boxeeKeyCode;
			    break;
			 
case "PC":
			curKeyCode=pcKey;
break;

case "LG":curKeyCode=lgKey;
break;
case "Samsung"://include API's
				var head= document.getElementsByTagName('head')[0];
				var script= document.createElement('script');
				script.type= 'text/javascript';
				script.src= '$MANAGER_WIDGET/Common/API/TVKeyValue.js';
   
				head.appendChild(script);
			 var TVKeyValue =new Common.API.TVKeyValue()
			 	break;
case "Panasonic":curKeyCode=panasonic_Key;
break;
//some more code to be added
}
_.prototype = {
		
	/* Returns widget/objectid which is focussed currently*/
		setFocusId: function (param){
			
			focus_id = param;
			

		},
		setParameter: function (value){
		if(value == "register")
		flag=true;
		if(value == "open")
		flag1=true;
		if(value=="buy")
		flag2=true;
		return;
		},
	
	/* Returns true if it has childs
				false if it is a parent*/
	getParent: function (objectId) {
				var subString = objectId.split("_");
				if(subString[0] === "widget")
					return false;
				else
					return true;
								
			},

	
	checkForChild: function (objectId) {
				var element = document.getElementById(objectId);
					if ($('#'+objectId).children().size() >0) {
						return true;
						
					} else {
					
						return false;
					}

				
			},
	/*  Checks whether the object has focus or not*/
	IsFocus:	function (widgetId) {
	
				return $("#"+widgetId).attr('isFocused');;
			
			},
	/*  Returns the position of the focused object in the current widget*/
	getFocusedPositionAttrb:function (objectId) {
				var subString = objectId.split("_");
				if(subString[1] == 1)
				{
					return 'first';
				}
				else
				{
					if(subString[1] == _('widget_subString[0]')._(" ").NoOfChilds())
					{
						return 'last';
					}
				}
				
				
			},
			
	KeyDown:function () {
		$(document).keydown(function(e) {
		//$(document).keypress(function(e) {
					if(e.keyCode == curKeyCode.Escape)
					{
						/*shilpa*/
						if(focus_id=='box'){
							rightFlag=1;
							$("#box").attr("disabled",true);
							return;
						}
						//shilpa
						var resultStr = focus_id.split("_");
							if(resultStr[0] == "settings")
							{
								
								if($("#widget_settings").attr("popupDisplay") == "true")
								{
							
									var subString = focus_id.split("_");
									var close_id = "widget_"+subString[0];
									var destination_id = $("#"+close_id).parent().attr('id');
									_(" ").closeCallOut(close_id);
									_(" ").setCursorPosition(close_id,destination_id);
									$("#menu_1").attr('popupDisplay','false');
								}
								else
								console.log("Entered escape");
							}
							else if(resultStr[0] == "search")
							{
							console.log("Entered escape");
								var subString = focus_id.split("_");
								var close_id = "widget_"+subString[0];
								var destination_id = $("#"+close_id).parent().attr('id');
								_(" ").closeCallOut(close_id);
								_(" ").searchPopup();
								_(" ").setCursorPosition(close_id,destination_id);
								$("#menu_2").attr('popupDisplay','false');
							}
							
					}
					
					if(e.keyCode == curKeyCode.Enter)
					{
						
						/**shilpa**/
					//	if(focus_id == "buyinfo_1"){
						
						//	focus_id="couponLink";
						//	_(" ").setCursorPosition('buyinfo_1','couponLink');
						//	return;
					//	}
						if(focus_id == "couponLink"){
							showTextBox();
							$("#widget_topPop").css('background-image','url()'); 
							
							return;
						}
						if(focus_id == 'box'){
							$("#box").attr("disabled",false);
							return;
						}
						/**end**/
						if(focus_id == "menu_1")
						{
							 
							document.getElementById('menu_1').onclick();
							$("#widget_settings").attr('popupDisplay','true');
							//_(" ").settingsPopup();
							var popup=$("#widget_settings").attr("popupDisplay");
							setTimeout('_(" ").setCursorPosition(focus_id,"settings_1")', 1000);
							//_(" ").setCursorPosition(focus_id,'settings_1');
							focus_id = "settings_1";
						}
						else if(focus_id == "menu_2")
						{
							
							$("#widget_search").attr('popupDisplay','true');
							document.getElementById('menu_2').onclick();
							//_(" ").searchPopup();
							setTimeout('_(" ").setCursorPosition(focus_id,"search_1")', 1000);
							
							
							focus_id = "search_1";
							}
							else if(focus_id == "menu_3")
							{
								document.getElementById('menu_3').onclick();
							}
							else if(focus_id == "menu_4")
							{
								document.getElementById('menu_4').onclick();
							}
							else if(focus_id=="settings_1") 
						{    	if(e.keyCode == curKeyCode.Enter){ 
								if (bVisible && dropDownVisible) {
									dropDownVisible = false;
									bVisible = false;
								} else { 
									ExpandSelect('select_id1');
									$("#settings_1").attr("dropDown","true");
									 
								}
								}
						} 
						else if(focus_id=="settings_2")
						{
						       if(e.keyCode == curKeyCode.Enter)
								{if (bVisible && dropDownVisible) {
									dropDownVisible = false;
									bVisible = false;
								} else { 
									ExpandSelect('select_id2');
									$("#settings_2").attr("dropDown","true");
									 
								}
									 
								}
						}
						else if(focus_id=="settings_3")
						{ 
						     if(e.keyCode == curKeyCode.Enter)
								{ 
								 if (bVisible && dropDownVisible) {
								
									dropDownVisible = false;
									bVisible = false;
								} else {  
									ExpandSelect('select_id3');
									$("#settings_3").attr("dropDown","true");  
								}
									 
								}
						}
						else if(focus_id=="search_2") {					
						searchterm = $("#search_1").val();
                    	_(" ").closeCallOut('widget_search');
						_(" ").setCursorPosition('search_1','menu_2');
                    	if(searchterm != "") {
                            currentPage = 1;
                    		isSearch = 1;
                    		isFilter = 0;
                            getJsonResponse("http://api.bigflix.com/BIGFlixApi.do?parameter=search&pageIndex="+currentPage+"&keyword="+searchterm+"&producttypeid="+categoryid+"&tvip=10.123.234.6&familyFilter=1&languageid=0&genreid=0&partnerID=4&uniqueID=1648788777577349&timestamp="+timestamp+"&digest="+hex_md5("41648788777577349viera@tv"+timestamp),"search");
                        }                    	
						
					}
					else if(focus_id=="settings_4") {
					   $("#filter").toggle();
                    	_(" ").closeCallOut('widget_settings');
                        genFilter = $('#settings_1').val();
                        langFilter = $('#settings_2').val();
                        famFilter = $('#settings_3').val();
                        isFilter = 1;
                    	isSearch = 0;
                        currentPage = 1;
                        getJsonResponse('http://api.bigflix.com/BIGFlixApi.do?parameter=filter&pageIndex=1&producttypeid='+categoryid+'&tvip=10.123.234.6&displayOrder='+subcategory+'&familyFilter='+famFilter+'&languageid='+langFilter+'&genreid='+genFilter+'&partnerID=4&uniqueID=1648788777577349&timestamp='+timestamp+'&digest='+hex_md5("41648788777577349viera@tv"+timestamp),'list');
                        _(" ").setCursorPosition('settings_4','menu_1');
                        return false;
    
					}
						}
				
				
					
					if(e.keyCode == curKeyCode.Left)
					{ // left
					/** Lakshmi **/
						if(focus_id=='userEmail' || focus_id=='forgotSubmit'){
							return;
						}
						if(focus_id=='forgotCancel'){
							_(" ").setCursorPosition('forgotCancel','forgotSubmit');
							return;
						}
						/**shilpa**/
						if(focus_id=='couponLink'||focus_id=='box'||focus_id=='bottomPop_1'){
							return;
						}
						
						if(focus_id=="buyinfo_4")
						_(" ").setCursorPosition('buyinfo_4','buyinfo_3');
						
						if(focus_id=='submit'){
							$("#box").attr("disabled",false);
							
							_(" ").setCursorPosition('submit','box');
                                                          $("#cursor").show();
							$("#box").focus();
							focus_id='box';
							
							$("#submit").css('background-image','url(img/btn01_nor.png)'); 
							return;
						}
						if(focus_id=='payCancel'){
							//_(" ").setCursorPosition('payCancel','bottomPop_1');
							$("#bottomPop_1").focus();
							focus_id='bottomPop_1';
							$("#payCancel").css('background','url(img/Cancel.png)'); 
							$("#bottomPop_1").attr('src','img/buy_now_over.png'); 	
							$("#payCancel").css('background-size','100% 100%'); 
							return;
						}
					/**end**/
						if(_(" ").getParent(focus_id))
						{
							if(focus_id=="p4")
							{  
							widget_id_temp="video_1";
							}
							else{
												
							widget_id_temp=_(" ").getNextChild(focus_id,'left');
							}
							 
							_(" ").setCursorPosition(focus_id,widget_id_temp);
						}
						else
						{
						if(focus_id=="p4")
							{ 
							widget_id_temp="video_1";
							}else{
							widget_id_temp=_(" ").getNextWidgetId(focus_id,'left');
							}
						 
						_(" ").setCursorPosition(focus_id,widget_id_temp);
						}
					}
				
					if(e.keyCode == curKeyCode.Right)
					{ // right
					/** Lakshmi **/
						
						if(focus_id=='userEmail' || focus_id=='forgotCancel'){
							return;
						}
						if(focus_id=='forgotSubmit'){
							_(" ").setCursorPosition('forgotSubmit','forgotCancel');
							return;
						}
						/**shilpa**/
						if(focus_id=='couponLink'||focus_id=='submit'||focus_id=='payCancel'){
							return;
						}
						if(focus_id=='box'){
							var value=document.getElementById("box").value;
							if(value == '' || rightFlag == 1){
							$("#submit").attr("disabled",false);
							$("#submit").focus();
							focus_id='submit';
							$("#cursor").hide();
							$("#submit").css('background-image','url(img/btn01_hov.png)');
							$("#box").css('background-image','url()');
							rightFlag=0;
							return;
							}
						}
						if(focus_id=='bottomPop_1'){
							//_(" ").setCursorPosition('bottomPop_1','payCancel');
							$("#payCancel").focus();
							focus_id='payCancel';
							$("#bottomPop_1").attr('src','img/buy.png');
							$("#payCancel").css('background-image','url(img/Cancel_over.png)');
							return;
						}
						/**end**/
						if(_(" ").getParent(focus_id))
						{
							
							
							widget_id_temp=_(" ").getNextChild(focus_id,'right');
							console.log("return::"+widget_id_temp);
							var temp = widget_id_temp.split("_"); 
							next=focus_id;
							
						  if(temp[1]==="gallery")
							{
								widget_id_temp="p4";
							}
							else
							{
								
								focus_id = widget_id_temp;
							}  
							if(_(" ").getParent(widget_id_temp))
							_(" ").setCursorPosition(next,widget_id_temp);
							else
							{
						
							focus_id = temp[1]+"_1";
							_(" ").setCursorPosition(next,temp[1]+"_1");
							}	
						}
						
						else
						{
							if(focus_id=="p4")
							{ 
							 
							widget_id_temp="video_1";
							}else{
							widget_id_temp=_(" ").getNextWidgetId(focus_id,'left');
							}
						 
						  _(" ").setCursorPosition(focus_id,widget_id_temp);
		                }
					}
				
					if(e.keyCode == curKeyCode.Up) 
					{ // UP
					/** Lakshmi **/
					if(focus_id=='userEmail'){
						return;
					}
					if(focus_id=='forgotSubmit' || focus_id=='forgotCancel'){
						 _(" ").setCursorPosition(focus_id,'userEmail');
						 $("#userEmail").focus();
						 return;
					}
					/**shilpa**/
						 if(focus_id=='couponLink'){
							return;
						 }
						 if(focus_id=='box'){
							$("#box").attr("disabled",true);
						 	$("#couponLink").focus();
							focus_id='couponLink';
							_(" ").setCursorPosition('box','couponLink');
							$("#box").css('background-image','url()');
							return;
						}
						if(focus_id=='submit'){
							$("#cursor").show();
							_(" ").setCursorPosition('','couponLink');
							$("#couponLink").focus();
							focus_id='couponLink';
							$("#submit").css('background-image','url(img/btn01_nor.png)'); 
							$("#submit").attr("disabled",true);
							return;
							
						}
						if(focus_id=='bottomPop_1'){
							$("#cursor").show();
							if($("#widget_topPop").attr('showText')=='true'){
								_(" ").setCursorPosition('bottomPop_1','couponLink');
								$("#couponLink").focus();
								focus_id='couponLink';
								$("#bottomPop_1").attr("disabled",true);
							}else{
								$("#box").attr("disabled",false);
								$("#box").focus();
								focus_id='box';
								_(" ").setCursorPosition('bottomPop_1','box');
							}
							$("#bottomPop_1").attr('src','img/buy.png');
							$("#bottomPop_1").css('background-size','100% 100%'); 
							$("#bottomPop_1").css('background-image','url()');
							return;
						 }
						 if(focus_id=='payCancel'){
							$("#cursor").show();
							if($("#widget_topPop").attr('showText')=='true'){
								$("#couponLink").focus();
								focus_id='couponLink';
								_(" ").setCursorPosition('payCancel','couponLink');
							}
							else{
								$("#box").attr("disabled",false);
								$("#box").focus();
								focus_id='box';
								_(" ").setCursorPosition('payCancel','box');
							}
							$("#payCancel").css('background-image','url(img/Cancel.png)');
							return;
						 }
						 
						  /**end**/
					if(_(" ").getParent(focus_id))
						{
							widget_id_temp=_(" ").getNextChild(focus_id,'up');
							
							if(widget_id_temp == "buyinfo_1")
							{
							
							if($("#buyinfo_1").css("display")!="none")
							{
							flag2=true;
							flag=false;
							flag1=false;
							}
							else if($("#buyinfo_2").css("display")!="none")
							{
							flag=true;
							flag1=false;
							flag2=false;
							}
							else
							{
							flag1=true;
							flag2=false;
							flag=false;
							}
							
							if(flag2)
							{
							
							widget_id_temp="buyinfo_1";
							$("#buyinfo_1").css('background-image','url(img/btn01_hov.png)'); 
							_(" ").setCursorPosition(focus_id,widget_id_temp);
							
							flag2=false;
							return;
							}
							if(flag)
							{
							widget_id_temp="buyinfo_2";
							_(" ").setCursorPosition(focus_id,widget_id_temp);
							flag=false;
							return;
							}
							else if(flag1)
							{
							widget_id_temp="buyinfo_3";
							_(" ").setCursorPosition(focus_id,widget_id_temp);
							flag1=false;
							return;
							}
							
							
							
							}
							if(widget_id_temp == "widget_gallery")
							{
								var a=_(" ").NoOfChilds(widget_id_temp);
								var b=((a/2)*10)%10;
								if(b!=0)
								{
									a=a+1;
									b=a/2;
								}
								else
									b=a/2;
							var child_id=$("#"+widget_id_temp).children().attr('id');
							for(i=1;i<b;i++)
								var child_id=$("#"+child_id).next().attr('id');
							}
						
							_(" ").setCursorPosition(focus_id,widget_id_temp);
						}
						else
						{
							
							widget_id_temp=_(" ").getNextWidgetId(focus_id,'up');
							if(widget_id_temp == "buyinfo_1" && ($("buyinfo_2").attr("isTrue")=="true"))
							_(" ").setCursorPosition(focus_id,"buyinfo_2");
							else
							_(" ").setCursorPosition(focus_id,widget_id_temp);
						}
					}
					if(e.keyCode == curKeyCode.Down)
					{ // Down
						if(focus_id == "widget_row1")
						{
							
						}
					
						if(focus_id=='forgotSubmit' || focus_id=='forgotCancel'){
							return;
						}
						if(focus_id=='userEmail'){
							 _(" ").setCursorPosition('userEmail','forgotSubmit');
							 return;
						}
						/***shilpa**/
						 if(focus_id=='couponLink'){
							if($("#widget_topPop").attr('showText')=='true'){
								$("#cursor").hide();
								$("#bottomPop_1").attr('src','img/buy_now_over.png');
								$("#bottomPop_1").focus();
								focus_id='bottomPop_1';
								$("#submit").attr("disabled",false);
								$("#bottomPop_1").attr("disabled",false);
								return;
							}else{
								$("#box").attr("disabled",false);
								$("#box").focus();
								focus_id='box';
								_(" ").setCursorPosition('couponLink','box');
								$("#couponLink").css('background-image','url()');
								return;
							}
						 }
						 if(focus_id=='bottomPop_1'||focus_id=='payCancel'){
							return;
						 }
						 if(focus_id=='box'){
							$("#box").attr("disabled",true);
						 	$("#cursor").hide();
						 	$("#bottomPop_1").attr('src','img/buy_now_over.png');
						 	$("#bottomPop_1").focus();
						 	focus_id='bottomPop_1';
							$("#box").css('background-image','url()');
							$("#bottomPop_1").attr("disabled",false);
						 	return;
						 	
						 }
						 if(focus_id=='submit'){
						 	$("#submit").css('background-image','url(img/btn01_nor.png)');
						 	$("#bottomPop_1").attr('src','img/buy_now_over.png');
						 	$("#bottomPop_1").focus();
						 	focus_id='bottomPop_1';
							$("#bottomPop_1").attr("disabled",false);
						 	return;
						 }
						/**end**/
						if(_(" ").getParent(focus_id))
						{
							if(focus_id=="p4")
							{  
							widget_id_temp="menu_1";
							}else{ 
							
							widget_id_temp=_(" ").getNextChild(focus_id,'down');
							}
							_(" ").setCursorPosition(focus_id,widget_id_temp);
						}
						else
						{
							if(focus_id=="p4")
							{  
							widget_id_temp="menu_1";
							}else{ 
							widget_id_temp=_(" ").getNextChild(focus_id,'down');
							}
							_(" ").setCursorPosition(focus_id,widget_id_temp);
						
						}
					}			
		});
	},
	getPosition:function (widgetId)
				{
					var offset = new Array();
					
					offset[0]=$("#"+widgetId).offset().left;
					offset[1]=$("#"+widgetId).offset().top;
					offset[2]= $("#"+widgetId).offset().width;
					offset[2]= $("#"+widgetId).offset().height;
					return offset;
				},
	getNextChild:function (ObjectId,keyPressed) 
				{
				
					switch(keyPressed)
					{
						case 'right':
							
							if(!(_(" ").getParent(ObjectId)))
							{
								var child_id=$("#"+ObjectId).children().attr('id');
								var no_of_child=_(" ").NoOfChilds(ObjectId);
								for(i=0;i<no_of_child;i++)
								{
									if(_(" ").IsFocus(child_id))
										return child_id;
									else
										child_id=$("#"+child_id).next().attr('id');
								}
							}
							else
							{
								console.log("idddd"+ObjectId);
								var str = ObjectId.split("_");
								var ObjectId_popup = "widget_"+str[0];
								var popUp = $("#"+ObjectId_popup).attr('popupDisplay');
								if(popUp == "true")
								{
								if(!dropDownVisible)
									{
									var child_top=$("#"+ObjectId).attr('childBegin');
									if(child_top == "false")
									{
									
										var str = ObjectId.split("_");
										if(str[1]<($("#widget_"+str[0]).attr('count')))
										{
											str[1] =  parseInt(str[1])+1;
										}
										return (str[0]+"_"+str[1]);
									}
									else
										return ObjectId;
								}
								}
								else
								{
									console.log($("#"+ObjectId));
									var child_right = $("#"+ObjectId).attr('childRight');
									if(child_right == "true")
									{
										console.log("eeeeeeeeeeee");
										var next_parent_widget = $("#"+ObjectId).parent().attr('id');
										console.log("parent::"+$("#"+next_parent_widget).attr('widgetRight'));
										
										return $("#"+next_parent_widget).attr('widgetRight');
									}
									var child_id=$("#"+ObjectId).next().attr('id');
									var Child_End=$("#"+child_id).attr('childEnd');
									console.log(("#"+ObjectId));
									console.log($('#'+ObjectId).parent().attr('id'));
									if(!(Child_End === "true"))
									{
										console.log("Focussssssssss");
										if(_(" ").IsFocus(child_id))
										{
											return child_id;
										}
										else
										{
											child_id=$("#"+child_id).next().attr('id');
										}
									}
									if(_(" ").IsFocus(child_id))
									{
										return child_id;
									}
									else
									{
										
										var widget_id=_(" ").getNextWidgetId(child_id,'right');
									
										var child_id=$("#"+widget_id).children().attr('id');
										var no_of_childs=_(" ").NoOfChilds(widget_id);
										for(i=0;i<no_of_childs;i++)
										{
											if(_(" ").IsFocus(child_id))
												return child_id;
											else
												child_id=$("#"+child_id).next().attr('id');
										}
									}
									if(($("#"+ObjectId).attr('childEnd')) == "false")
									{
										return ObjectId;
									}
								}
							}
							;
						case 'left':
							if(!(_(" ").getParent('ObjectId')))
							{
								
								var child_id=$("#"+ObjectId).children().attr('id');
								var no_of_child=_(" ").NoOfChilds(ObjectId);
								for(i=1;i<no_of_child;i++)
									child_id=$("#"+child_id).next().attr('id');
								for(i=0;i<no_of_child;i++)
								{
									if(_(" ").IsFocus(child_id))
										return child_id;
									else
										child_id=$("#"+child_id).prev().attr('id');
								}
							}
							else
							{
							
								var str = ObjectId.split("_");
								var ObjectId_popup = "widget_"+str[0];
								var popUp = $("#"+ObjectId_popup).attr('popupDisplay');
							
								if(popUp == "true")
								{
									if(!dropDownVisible)
									{
									var child_top=$("#"+ObjectId).attr('childBegin');
									if(child_top == "false")
									{
										var str = ObjectId.split("_");
										if(str[1]>"1") 
										{
											str[1] =  parseInt(str[1])-1;
										}
										return (str[0]+"_"+str[1]);
									}
									else
									 return ObjectId;
								}
								}
								else
								{
									var child_left = $("#"+ObjectId).attr('childLeft');
									if(child_left == "true")
									{
										return $("#"+ObjectId).prev().attr('id');
										//var next_parent_widget = $("#"+ObjectId).parent().attr('id');
										//return $("#"+next_parent_widget).prev().children().attr('id');
									}
								
									var Child_Begin=$("#"+ObjectId).attr('childBegin');
									if((Child_Begin == "false"))
									{
										var child_id=$("#"+ObjectId).prev().attr('id');
										var Child_Begin=$("#"+child_id).attr('childBegin');
										while(!Child_Begin)
										{
											if(_(" ").IsFocus(child_id))
											{
												return child_id;
											}
											else
											{
												child_id=$("#"+child_id).prev().attr('id');
											}
										}
										if(_(" ").IsFocus(child_id))
											return child_id;
									
									}
									else
									{
										
										var widget_id=_(" ").getNextWidgetId(ObjectId,'left');
										
										var child_id=$("#"+widget_id).children().attr('id');
										var no_of_childs=_(" ").NoOfChilds(widget_id);
										for(i=1;i<no_of_child;i++)
											child_id=$("#"+child_id).next().attr('id');
										for(i=0;i<no_of_childs;i++)
										{
											if(_(" ").IsFocus(child_id))
												return child_id;
											else
												child_id=$("#"+child_id).prev().attr('id');
										}
									}
								}
							}
												
							;
							
					
						case 'up':
							if(ObjectId == "app_2")
								{
								var widget_top=$("#"+ObjectId).attr('widgetTop');
									var pos=_(" ").getPosition(ObjectId);
									if(widget_top == "null")
									{
										return ObjectId;
										
									}
									var parent = $("#"+ObjectId).parent().attr('id');
									next_widget_id=$("#"+parent).prev().attr('id');
									var pos1=_(" ").getPosition(next_widget_id);
									while(pos[1]===pos1[1])
									{
										
										pos[0]=pos1[0];
										next_widget_id1=$("#"+next_widget_id).prev().attr('id');
										pos1=_(" ").getPosition(next_widget_id1);
									}
									if(pos1[1]<pos[1])
									{
									return next_widget_id;
									
									}
								
								}
							   
								if(!(_(" ").getParent(ObjectId)))
								{
									
								 	var widget_top=$("#"+ObjectId).attr('widgetTop');
									var pos=_(" ").getPosition(ObjectId);
									if(widget_top == "null")
									{
										return ObjectId;
										
									}
									var parent = $("#"+ObjectId).parent().parent().attr('id');
									next_widget_id=$("#"+parent).prev().attr('id');
									var pos1=_(" ").getPosition(next_widget_id);
									while(pos[1]===pos1[1])
									{
										
										pos[0]=pos1[0];
										next_widget_id1=$("#"+next_widget_id).prev().attr('id');
										pos1=_(" ").getPosition(next_widget_id1);
									}
									if(pos1[1]<pos[1])
									{
									return next_widget_id;
									
									}
								
								}
								else
								{
								var str = ObjectId.split("_");
								var ObjectId_popup = "widget_"+str[0];
								var popUp = $("#"+ObjectId_popup).attr('popupDisplay');
								if(popUp == "true")
								{
								if(!dropDownVisible)
									{
									var child_top=$("#"+ObjectId).attr('childTop');
									if(child_top == "false")
									{
									
										var str = ObjectId.split("_");
										if(str[1]>"1")
										{
										
											str[1] =  parseInt(str[1])-1;
											
										}
										return (str[0]+"_"+str[1]);
									}
								}
								}
								else
								{
									var str = _(" ").getNextWidgetId(ObjectId,'up').split("_");
									
									return str[1]+"_1";
									
								}
							}
							;
							
							case 'down':
								
								if(ObjectId =="app_1")
								{
								var widget_bottom=$("#"+ObjectId).attr('widgetBottom');
									
									if(widget_bottom)
									{
										return ObjectId;
										
									}
									
								//	var pos=_(" ").getPosition(ObjectId);
									next_widget_id=$("#"+ObjectId).next().children().attr('id');
									next_widget_id="button_1";
								
									return next_widget_id;
								
								}
								
								if(!(_(" ").getParent(ObjectId)))
								{
									var widget_bottom=$("#"+ObjectId).attr('widgetBottom');
									
									if(widget_bottom)
									{
										return ObjectId;
										
									}
									
									var pos=_(" ").getPosition(ObjectId);
									next_widget_id=$("#"+ObjectId).parent().attr('id');
									
									var pos1=_(" ").getPosition(next_widget_id);
									while(pos[1]===pos1[1])
									{
										
										pos[0]=pos1[0];
										next_widget_id1=$("#"+next_widget_id).next().attr('id');
										pos1=_(" ").getPosition(next_widget_id1);
									}
									if(pos1[1]>pos[1])
									{
									
									var next_child_id1=_(" ").getNextChild(next_widget_id1);
									return next_child_id1;									
									}
								
								}
								else
								{
									var str = ObjectId.split("_");
									var ObjectId_popup = "widget_"+str[0];
									var popUp = $("#"+ObjectId_popup).attr('popupDisplay');
									if(popUp == "true")
									{
									if(!dropDownVisible)
									{
										var child_bottom=$("#"+ObjectId).attr('childBottom');
										if(child_bottom == "false")
										{
											var str = ObjectId.split("_");
											if(str[1]<($("#widget_"+str[0]).attr('count')))
											{
										
												str[1] =  parseInt(str[1])+1;
											
											}
											return (str[0]+"_"+str[1]);
										}
									}
									}
									else
									{
										var str = _(" ").getNextWidgetId(ObjectId,'down').split("_");
										
										return str[1]+"_1";
									}
								
								}
							
							;
					case 'next':
								
								$("#"+ObjectId).parent().attr('id');
								if($("#"+ObjectId).parent().next().attr('isFocus') === "false")
								{
											
											_(" ").setCursorPosition("buy_btn",$("#"+ObjectId).parent().next().next().attr('id'));
								}
								else
									{
										
									
											
									}
									;
								
									
									
					}
						
				
				
		},

				
	NoOfChilds:	function (widgetId) {
				
				var TotalChilds=$("#"+widgetId).children().size();
				
				return TotalChilds;
			},
	/* Returns the next widget on the screen */		
	getNextWidgetId:	function (WidgetId, Key_Pressed) {
				
				switch(Key_Pressed)
				{				
					case 'right': 
								console.log("id of widget"+WidgetId);
								var str = WidgetId.split("_");
								var widget_next=$("#widget_"+str[0]).attr('widgetRight');
								console.log("id of  next widget"+widget_next);
								if(widget_next == "null")
									return WidgetId;
								else
									return widget_next;
					
							;
					case 'left': 
								
								var str = WidgetId.split("_");
								var widget_next=$("#widget_"+str[0]).attr('widgetLeft');
															if(widget_next == "null")
									return WidgetId;
								else
									return widget_next;
							;
								
					case 'up':												
								var str = WidgetId.split("_");
								var widget_next=$("#widget_"+str[0]).attr('widgetTop');
								
								if(widget_next == "null")
									return WidgetId;
								else
										return widget_next;
							;
													
					case 'down':	
								
								var str = WidgetId.split("_");
								
								var widget_next=$("#widget_"+str[0]).attr('widgetBottom');
								
								if(widget_next == "null")
								
									return WidgetId;
								else
									
									return widget_next;
							;  
					
					}
			},
	/* Change the focus from source object to destination object */
	setCursorPosition:	function (CurObject,NextObject) 
					{ 
					
						if($("#"+NextObject).prop("tagName").toLowerCase() == "button")
						{
							$("#cursor").hide();
							
							$("#"+NextObject).css('background-image','url(img/btn01_hov.png)');
							
							if(CurObject != " ")
							{
								if($("#"+CurObject).prop("tagName").toLowerCase() == "button")
								{
								
							$("#"+CurObject).css('background-image','url(img/btn01_nor.png)');
								}
							}	
							$("#"+NextObject).focus();
							focus_id = NextObject;
							
							return;
						}
						else
						{
						$("#"+CurObject).css('background-image','url(img/btn01_nor.png)');
						 $("#cursor").show();
						 }
						var nextPosition = new Array();
						 if(NextObject=="p4")
						 {
						 NextObject_Height=$("."+NextObject).height();  
						NextObject_Width=$("."+NextObject).width();  
						var offsetX1=$("."+NextObject).offset().left;
						var offsetY1=$("."+NextObject).offset().top; 
						 }
						  else
						 {
						NextObject_Height=$("#"+NextObject).height();  
						NextObject_Width=$("#"+NextObject).width();  
					//	console.log("xy"+$("#gallery_6").offset().left); 
						var offsetX1=$("#"+NextObject).offset().left;
						var offsetY1=$("#"+NextObject).offset().top; 
						console.log("offsetX1::offsetY1--"+offsetX1+"::"+offsetY1);
						
						} 
					//	if(NextObject=="search_1"){
						//$("#cursor").delay(8000);}
						$("#cursor").animate({left:offsetX1  },-1);
						$("#cursor").animate({top: offsetY1},-1);
						$("#cursor").animate({width:NextObject_Width},-1 );
						$("#cursor").animate({height:NextObject_Height},-1 );
						focus_id = NextObject;
					},
	closeCallOut:function (param)
			{
				switch(param)
				{
					case "widget_settings" :
						document.getElementById('widget_settings').childNodes[1].className = "callout border-callout";
						document.getElementById("widget_settings").style.visibility = "hidden";
						setTimeout('document.getElementById("menu_1").childNodes[1].style.visibility = "hidden"',400);
						document.getElementById("filter").style.display = "none";
						$("#widget_settings img").css("display","none");
					break;
					case "widget_search" :
						console.log("Entered callout");
						//console.log("callout visibility befor"+document.getElementById("widget_search").style.visibility);
						document.getElementById('widget_search').childNodes[1].className = "callout border-callout";
						setTimeout('document.getElementById("widget_search").style.visibility = "hidden"',600);
						document.getElementById("searchFilter").style.display = "none";
						//$("#widget_search img").css("display","none");
						console.log("callout visibility after"+document.getElementById("widget_search").style.visibility);
					break;
		
				}
			}
			,
			settingsPopup:function()
			{
				console.log("called popup");
			if((document.getElementById('menu_1').childNodes[1].className.split(" ")).indexOf("active") == -1) {
			console.log("inside if");
			document.getElementById('menu_1').childNodes[1].style.visibility = "visible";
			document.getElementById("filter").style.display = "block";$("#menu_1 img").css("display","block");
			//setTimeout('document.getElementById("filter").style.display = "block";$("#menu_1 //img").css("display","block");',0);
			document.getElementById('menu_1').childNodes[1].className = "callout border-callout active";
			console.log("id:::::::"+$("#settings_1").attr('childBegin'));
			//closing other popups
			closeCallOut('menu_2');
			}
			
			},
			searchPopup:function()
			{
			if((document.getElementById('menu_2').childNodes[1].className.split(" ")).indexOf("active") == -1) {
			document.getElementById('menu_2').childNodes[1].style.visibility = "visible";
			setTimeout('document.getElementById("searchFilter").style.display = "block";$("#search img").css("display","block");',800);
			document.getElementById('menu_2').childNodes[1].className = "callout border-callout active";
			
			//closing other popups
			closeCallOut('menu_1');			
		}
			
			}
	
};
