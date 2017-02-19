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
var up=0,up1=0;

//boxeeAPI.keyboardMode();
var currentdevice="PC";
var curKeyCode=pcKey;
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
		setFocusId: function (){ 
			
			prev_id="";
			counter=0;
			
			//alert("focus after"+focus_id);
		},
		
	setFocus: function (){
			
			 
			var b=$("#country_1").attr('isSelect1'); 
					
					if(prev_id=="country_1") 
					{
					$("#country_1").attr('isFirst','true');
					focus_id = "country_1";
					return;
					}
					if(prev_id=="hint_1")
					{
					$("#hint_1").attr('isFirst1','true');
					focus_id = "hint_1";
					
					
					}
					 
			//focus_id = "country_1";			
			 
			/*var a=$("#hint_1").attr('isSelect1');
			if(a=="true"){
					$("#country_1").attr('isFirst','true');
					focus_id = "country_1"; 
					
			}*/
			
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
					var ePopup = document.getElementById("closePopup").style.display;
					 if(focus_id=="gcancel")
					 {
						_(" ").setCursorPosition(" ","email1_1");
						$("#email1_1").focus();
					 }
					if(ePopup == "block"){
						removeErrorPopup(); 
						return;
					}
						//document.location.href="login.html";
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
					if (event.keyCode == 8 || event.keyCode == 46) { 
					up=0;
					up1=0;
					 if(focus_id=="country_1"){
						event.returnValue = false;
					return false;
					}
					if (event.keyCode == 8 || event.keyCode == 46) { 
					 if(focus_id=="gcancel")
					 {
						$("#closePopup").css("display", "none");
						_(" ").setCursorPosition(" ","email1_1");
						$("#email1_1").focus();
						 
					 }
					 
					 if(focus_id=="sub_1" ||focus_id=="sub_2" ){
						event.returnValue = false;
					return false;
					}
					}
					 if(focus_id=="hint_1"){
						event.returnValue = false;
					return false;
					}
					}
					if(e.keyCode == curKeyCode.Enter)
					{
						//mine
						  
						if(focus_id=="reg1_2")
						{ //alert("ji");
							$("#reg1_2").prop('disabled', true); 
							return false;
						}
						if(focus_id == "country_1")
						{
							var hint=$("#country_1").attr('isFirst');
							//alert(hint);
							//alert(hint);
							hint="false";
							if(up==0 && hint=="false")
							{
							prev_id=focus_id;
							focus_id="";
							$("#country_1").attr('disabled',false);
							up=1;
							ExpandSelect('country_1');
							} 
							else{
								up=0;
							}
							
						}
						if(focus_id == "hint_1")
						{
							
							var hint=$("#hint_1").attr('isFirst1');
							hint="false";
							if(up1==0 && hint=="false")
							{
							prev_id=focus_id;
							focus_id="";
							$("#hint_1").attr('disabled',false);
							up1=1;
							ExpandSelect('hint_1'); 
							}else{
							up1=0;
							}
							
						}
						
						//mine
					
						if(focus_id == "sub_1")
						 { 
						        $("#sub_1").css('background-image','url(img/btn01_nor.png )'); 
						 }
						 if(focus_id == "sub_2")
						 { 
						        $("#sub_2").css('background-image','url(img/btn01_nor.png )'); 
							//checkPageForward(); 
						 }
					 
							if(focus_id=="remember_1")
							{ 
							// $('input[name=foo]').attr('checked', true);
							var ar=$('input:checkbox[name=foo]').is(':checked');  
								 
								if(ar==false){
								 $('input[name=foo]').prop('checked', true);
								}
								else{ 
								$('input[name=foo]').prop('checked', false);
								} 
							 
							}
						// var ntagname=$("#"+focus_id).prop("tagName").toLowerCase();  
						// var ntagname=$("#"+CurObject).prop("tagName").toLowerCase();
						 if(focus_id=="sub1_1")
						 { 
							$("#sub1_1").css('background-image','url(img/btn01_nor.png)'); 
						 }
						 if(focus_id=="sub1_2")
						 { 
							$("#sub1_2").css('background-image','url(img/btn01_nor.png)'); 
						 }
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
				
					if (event.keyCode == 8 || event.keyCode == 46) { 
					 if(focus_id=="country_1"){
						event.returnValue = false;
					return false;
					}
					 if(focus_id=="hint_1"){
						event.returnValue = false;
					return false;
					}
					}
					
					if(e.keyCode == curKeyCode.Left)
					{ // left
					 
					if(focus_id=="reg1_1")
					{
					$("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
					}
					if(focus_id=="sub1_2")
					{
					 $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
					}
					
				 
						if(focus_id=="reg1_2")
						{
								 $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
						}
						if(_(" ").getParent(focus_id))
						{
							if(focus_id=="reg1_2")
							{  
							widget_id_temp="reg1_1";
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
					 
						if(_(" ").getParent(focus_id))
						{ 
							widget_id_temp=_(" ").getNextChild(focus_id,'right');
							 
							console.log("return::"+widget_id_temp);
							var temp = widget_id_temp.split("_"); 
						  if(temp[1]==="gallery")
							{
								widget_id_temp="p4";
							}
							else
							{
								focus_id = widget_id_temp;
							}  
							if(_(" ").getParent(widget_id_temp))
							_(" ").setCursorPosition(focus_id,widget_id_temp);
							else
							{
							focus_id = temp[1]+"_1";
							_(" ").setCursorPosition(focus_id,temp[1]+"_1");
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
					  //mine
					 if(focus_id=='hint_1'){
						//$("#country_1").attr('isFirst','false');
						$("#country_1").attr('disabled',false);
					}
					if(focus_id=='ans_1'){
						//$("#country_1").attr('isFirst','false');
						$("#hint_1").attr('disabled',false);
					}
					
					  if(focus_id=="dob_1")
					  {
						$("#country_1").attr('disabled',false);
					  }
					if(focus_id=='country_1'){
						$("#country_1").attr('isFirst','false');
						$("#country_1").attr('disabled',true);
					}
					if(focus_id=='hint_1'){
						$("#hint_1").attr('isFirst1','false');
						$("#hint_1").attr('disabled',true);
					}
					  //mine
					if(focus_id =="dob_1")
					{ 
							$("#country_1").attr('isFirst','false');
					}
					if(focus_id =="ans_1")
					{ 
							$("#hint_1").attr('isFirst1','false'); 
					}
					if(focus_id=="reg1_1")
					{
						 $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
					}
					if(focus_id=="reg1_2")
					{
						 $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
					}
					if(focus_id=="sub1_1")
					{
						 $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
					}
					if(focus_id=="sub1_2")
					{
						 $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
					}
					
						if(_(" ").getParent(focus_id))
						{
							widget_id_temp=_(" ").getNextChild(focus_id,'up');
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
							_(" ").setCursorPosition(focus_id,widget_id_temp);
						}
					}
					if(e.keyCode == curKeyCode.Down)
					{ // Down
						//mine
					if(focus_id=="cpwd_1")
					{
						$("#country_1").attr('disabled',false);
					}
					if(focus_id=="address_1")
					{
						$("#hint_1").attr('disabled',false);
					}
					if(focus_id=='country_1'){
						//$("#country_1").attr('isFirst','false');
						$("#country_1").attr('disabled',true);
					}
					if(focus_id=='hint_1'){
						//$("#hint_1").attr('isFirst1','false');
						$("#hint_1").attr('disabled',true);
					}
					  //mine
						/*if(focus_id == "country_1")
						{
							var hint=$("#country_1").attr('isFirst');
							if(hint=="false")
							{
							prev_id=focus_id;
							focus_id="";
							
							ExpandSelect('country_1');
							}
							
						}
						if(focus_id == "hint_1")
						{
							
							var hint=$("#hint_1").attr('isFirst1');
							if(hint=="false")
							{
							prev_id=focus_id;
							focus_id="";
							
							ExpandSelect('hint_1');
							
							}
							
						}*/
						 if(focus_id=="sub1_1")
						 {
						  $("#"+focus_id).css('background-image','url(img/btn01_nor.png)'); 
						 }
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
						  
						   if(ObjectId=="sub_1")
						 {
							$("#"+ObjectId).css('background-image','url(img/btn01_nor.png)'); 
						 }
						  if(ObjectId=="sub1_1")
						  {
							 $("#"+ObjectId).css('background-image','url(img/btn01_nor.png)'); 
						  }
						  if(ObjectId=="reg1_1")
						  {
							 $("#"+ObjectId).css('background-image','url(img/btn01_nor.png)'); 
						  }
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
										var next_parent_widget = $("#"+ObjectId).parent().attr('id');
										console.log("parent::"+$("#"+next_parent_widget).attr('widgetRight'));
										return $("#"+next_parent_widget).attr('widgetRight');
									}
									var child_id=$("#"+ObjectId).parent().children().next().attr('id');
									 
									var Child_End=$("#"+child_id).attr('childEnd');
									console.log(("#"+ObjectId));
									console.log($('#'+ObjectId).parent().attr('id'));
									if(ObjectId=="reg1_1")
									{
									child_id="reg1_2";
									} 
									if(!(Child_End === "true"))
									{
										 
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
							if(ObjectId=="sub_2")
							{
								$("#"+ObjectId).css('background-image','url(img/btn01_nor.png)'); 
							}
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
							var tag=$("#"+ObjectId).prop("tagName").toLowerCase();
							if(tag=="button")
							{
								$("#"+ObjectId).css('background-image','url(img/btn01_nor.png)');
							}
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
									
									 
									return next_widget_id;
								/*	var pos1=_(" ").getPosition(next_widget_id);
									while(pos[1]===pos1[1])
									{
										alert("hai");
										pos[0]=pos1[0];
										next_widget_id1=$("#"+next_widget_id).next().attr('id');
										pos1=_(" ").getPosition(next_widget_id1);
									}
									if(pos1[1]>pos[1])
									{
									
									var next_child_id1=_(" ").getNextChild(next_widget_id1);
									return next_child_id1;									
									}*/
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
					 //alert(CurObject);
					 
					  
						 var ntagname=$("#"+NextObject).prop("tagName").toLowerCase(); 
						// var ntagname=$("#"+CurObject).prop("tagName").toLowerCase();
						 if(ntagname=="button")
						 {
							$("#cursor").hide();
							$("#"+NextObject).css('background-image','url(img/btn01_hov.png)'); 
						 }
						  if(ntagname=="input")
						 { 	 
						  $("#cursor").show(); 
						 }
						 if(NextObject=="reg1_1")
						 {
						  $("#sub1_2").css('background-image','url(img/btn01_nor.png)');
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
								if(NextObject == "email1_1")
								{ 
									NextObject_Width-=25;
									NextObject_Height-=2; 
									focus_id=NextObject;
									$("#"+NextObject).focus();
					
								}
								if(NextObject == "pwd1_1")
								{
									NextObject_Width-=25;
									NextObject_Height-=2;
						 
									focus_id=NextObject;
									$("#"+NextObject).focus();
					
								}
								 
								if(NextObject == "remember_1")
								{
									NextObject_Width-=204;
									NextObject_Height=0; 
									focus_id=NextObject;
									offsetX1+=80;
									$("#"+NextObject).focus();
					
								} 
					/*----------------------registration------------------------------*/
								if(NextObject == "fname_1" ||"lname_1")
								{
									NextObject_Width+=32;
									NextObject_Height+=12;
									focus_id=NextObject;
									$("#"+NextObject).focus();
					
								}
								if(NextObject == "address_1")
								{
						 
									//NextObject_Height+=22;
									//NextObject_Width+=5;
									focus_id=NextObject;
									$("#"+NextObject).focus();
								}
								if(NextObject == "address_1")
								{
						 
									NextObject_Height-=8;
									NextObject_Width-=2;
									focus_id=NextObject;
									$("#"+NextObject).focus();
								}
						
								if(NextObject == "hint_1")
								{
									NextObject_Width-=35;
									NextObject_Height-=10;
					
									//focus_id=NextObject;
						
									//$("#"+NextObject).focus();
								}
								if(NextObject == "country_1")
								{
									NextObject_Width-=35;
									NextObject_Height-=10; 
								}
								if(NextObject == "sub_1" )
								{
									NextObject_Width-=60;
						
									focus_id=NextObject;
									$("#"+NextObject).focus();
								}
								if(NextObject == "sub_2" )
								{
									NextObject_Width-=60;
						
									focus_id=NextObject;
								$("#"+NextObject).focus();
								}
								 
								
						 
						} 
					//	if(NextObject=="search_1"){
						//$("#cursor").delay(8000);}
						$("#cursor").animate({left:offsetX1  },-1);
						$("#cursor").animate({top: offsetY1},-1);
						$("#cursor").animate({width:NextObject_Width},-1 );
						$("#cursor").animate({height:NextObject_Height},-1 );
						//$("#"+NextObject).focus();
						//focus_id=NextObject;
					
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
