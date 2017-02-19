var imageSrc;
var appName;
var developerName;
var noOfDownloads;
var cost;
var addr;

function popUp(){
	$("#box").val("");
	$("#widget_topPop").attr('showText',true);
	document.getElementById('couponLink').innerHTML='Click here to enter coupon code';
	$("#topDown").css("display","none");
	$("#middlePop").css("height","48%");
	$("#widget_topPop").css("margin","4%");
	$("#widget_topPop").css("margin-left","48.5%");
	$("#popUpDiv").css("height","40%");
	//$("#payCancel").css("background-size","100% 100%");
	$("#popUpDiv").css("display","block");
	_(" ").setCursorPosition("buyinfo_1","couponLink");
	$("#couponLink").focus();
	/* _(" ").setFocusId();*/
	
}
function setBuyInfo(appInfo){
	imageSrc=appInfo.url_image;
	appNum=appInfo.app_id;
	versionName=appInfo.size;
	appName=appInfo.app_Name;
	noOfDownloads=appInfo.downloads;
	cost=appInfo.price;
}
function showTextBox(){
	if($("#widget_topPop").attr('showText')=='true'){
		$("#topDown").css("display","block");
		
		$("#box").focus();
		document.getElementById('couponLink').innerHTML='Click here to hide coupon code';
		$("#popUpDiv").css("height","55%");
		$("#middlePop").css("height","40%");
		$("#widget_topPop").css("margin","2%");
		$("#widget_topPop").css("margin-left","47%");
		//$("#payCancel").css("height","75%");
		$("#widget_topPop").attr('showText',false);
		$("#submit").css('background-image','url(img/btn01_nor.png)'); 
		
		_(" ").setCursorPosition("couponLink","box");
		$("#couponLink").css('background-image','url()'); 	
						
	}
	else{
		document.getElementById('couponLink').innerHTML='Click here to enter coupon code';
		$("#topDown").css("display","none");
		$("#middlePop").css("height","48%");
		$("#widget_topPop").css("margin","4%");
		$("#widget_topPop").css("margin-left","48.5%");
		$("#popUpDiv").css("height","40%");
	//	$("#payCancel").css("height","100%");
		$("#widget_topPop").attr('showText',true);
		_(" ").setCursorPosition("widget_topPop","couponLink");
		$("#couponLink").css('background-image','url()'); 	
		return;
	}
}

function verifyCouponNumber(){
	var couponValue=document.getElementById("box").value;
	//alert(couponValue);
    newGetJsonResponse("coupons", {
        "couponVal": couponValue,
        "appId" : "2",
        "issueTo" : "kishore@gmail.com",
		"AppId" : appNum
    });
	
}

function closeCall(){
	//$("#payCancel").css('background','url(img/btn01_nor.png)');
	//$("#popUpDiv").css("display","none");
	
	$("#wrapper").css("opacity","1");
	$(".menu_list fontbutton button").attr( "disabled", false );
	$(".fontbutton").attr( "disabled", false );
	
	_(" ").setCursorPosition("payCancel","buyinfo_1");
	$("#buyinfo_1").focus();
	$("#cursor").hide();
	$("#popUpDiv").remove();
}
function searchPopUp(){
	
}

function showBuyPopup() {
	//alert("in buy pop");
	$("#cursor").show();
	var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
	setBuyInfo(appInfo);
	var payPal='<div id="popUpDiv" success="false"><div id="widget_topPop" showText="true" onclick="showTextBox();"><u id="couponLink">Click here to enter coupon code</u></div><div id="topDown"><div id="couponText">Enter coupon code</div><div id="couponBox"><input id="box" type="text" size="10"><input id="submit"  type="submit" value="Submit" onclick="verifyCouponNumber();"></div></div><div id="middlePop"><div id="midLeft" style="background:url('+imageSrc+') no-repeat;"></div><div id="midRight">'+appName+'<br><p>Size:&nbsp;'+versionName+'GB<br></p><p>Downloads:&nbsp;'+noOfDownloads+'<br></p><p>'+cost+'$</p></div></div><div id="widget_bottomPop"><form method="post" action="https://www.sandbox.paypal.com/cgi-bin/webscr" class="paypal-button" target="_top" style="opacity: 1;"><input type="hidden" name="business" value="shilpa@gmail.com"><input type="hidden" name="item_name" value="'+appName+'"><input type="hidden" name="quantity" value="1"><input type="hidden" name="item_number" value="'+appNum+'"><input type="hidden" name="amount" value="0.01"><input type="hidden" name="return" value="http://localhost/today/home.html"><input type="hidden" name="rm" value="2"><input type="hidden" name="cancel_return" value="http://localhost/today/home.html"><input type="hidden" name="cmd" value="_xclick"><input type="image" id="bottomPop_1" src="img/buy.png"></form><button id="payCancel" onclick="closeCall();"></button></div></div>';
	$("body").append(payPal);
	popUp();
}
function errorPopUp(message) {
	$("#submit").css('background','url(img/btn01_nor.png)');
	$("#submit").css('background-size','100% 100%');
	$("#closePop").css("display", "block");
	$("#eMessage").text(message);
	_(" ").setCursorPosition("submit","gCancel");
	
	$("#gCancel").focus();
	$("#gCancel").css('background-image','url(img/btn01_hov.png)');
	$("#gCancel").css('background-size','100% 100%');
}

function removeErrorPopUp() {
	$("#closePop").css("display", "none");
	if($("#popUpDiv").attr('success')=='true'){
		_(" ").setCursorPosition("gCancel","buyinfo_2");
		$("#buyinfo_2").focus();
		$("#wrapper").css("opacity", "1");
	}else{
		
		$("#box").val("");
		$("#submit").focus();
		
		$("#submit").css('background-image','url(img/btn01_hov.png)');
		_(" ").setCursorPosition("gCancel","submit");
		$("#cursor").hide();
	}
	$("#gCancel").css('background','url(img/btn01_nor.png)');
}