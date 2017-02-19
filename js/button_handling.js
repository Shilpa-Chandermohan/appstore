$(document).ready(function(){
	showButton();	
});
		var url="http://10.75.11.75/appstore/userapps/";
		var email="kishore@gmail.com";
		var device_id="7";
		var app_id="10";
		var isFree="";
		var type1;
		
function showButton() {		
	showNone();
	showLock();
	
	/*$("#register").click(function(){ 		
		var divText=$("#register").text();
		if(divText == "Register") {
			setSession();
			newGetJsonResponse("install", {
				"app_id" : app_id,
				"is_free" : isFree
			});
		}
	});	*/
		
	/*$("#lock").click(function(){
		var divText=$("#lock").text();				
		if($("#lock").text()== "Lock") {
			newGetJsonResponse("lock", {});					
		} else {
			newGetJsonResponse("unlock", {});
		}			
	});
	$("#unregister").click(function(){ 					
		if($("#unregister").text() == "UnRegister") {
			setSession();
		newGetJsonResponse("uninstall", {
				"app_id" : app_id,
				"is_free" : isFree
			});
		}		
	});
	$("#open").click(function(){ 
			});
			
			$("#buyinfo_1").click(function(){ 
					
					var divText=$("#buy").text();
					if(divText == "Buy") {
						//showInstall();		
					} 
		
				});*/
				
		//	$("#buyinfo_1").click(function(){ 
				//	showBuyPopup();
				//	var divText=$("#buy").text();
				//	if(divText == "Buy") {
				//		//showInstall();		
				//	} 
		
			//	});	
			
			$("#buyinfo_3").click(function(){ 
		
			});
			
			
	
			
			}
			
	
function showBuy() {
	
	$("#buy").css("display","block");
	$("#open").css("display","none");
	$("#unregister").css("display","none");
	$("#register").css("display","none");
	
	$("#lock").attr("disabled","disabled");
}

function showInstall() {	
	$("#open").css("display","none");
	$("#unregister").css("display","none");
	$("#buy").css("display","none");
	$("#register").css("display","block");
}
function showOpen() {	
	$("#register").css("display","none");
	$("#open").css("display","block");
	$("#open").text("Open");
}
function showUnInstall() {
	$("#buy").css("display","none");
	$("#register").css("display","none");
	$("#unregister").css("display","block");
	$("#unregister").text("UnRegister");
	//gameResult.games[0].isPaid = !gameResult.games[0].isPaid;		//temporary test
}
function showUnlock()
{
$("#lock").text("UnLock");
}
function showLock()
{
$("#lock").text("Lock");
}
function showNone()
{
	$("#buyinfo_3").css("display","none");
	$("#buyinfo_4").css("display","none");
	$("#buyinfo_2").css("display","none");
	$("#buyinfo_1").css("display","none");
	
}

function showBuyInfo() {

	$("#buyinfo_3").css("display","none");
	$("#buyinfo_4").css("display","none");
	$("#buyinfo_2").css("display","none");
	$("#buyinfo_1").css("display","block");
	$("#lock_1").attr("disabled","disabled");
	//$("#buy").text("Buy");
	
	//gameResult.games[0].isPaid = !gameResult.games[0].isPaid;	//temporary test
}

function showInstallInfo() {
	
	$("#buyinfo_3").css("display","none"); //open
	$("#buyinfo_4").css("display","none"); //un-register
	$("#buyinfo_1").css("display","none"); //buy
	$("#buyinfo_2").css("display","block"); //register
	//$("#buy").text("Register");
	
	//gameResult.games[0].isPaid = !gameResult.games[0].isPaid;	//temporary test
}
function showOpenInfo() {
	$("#buyinfo_1").css("display","none");
	$("#buyinfo_2").css("display","none");
	$("#buyinfo_3").css("display","block");
	$("#buyinfo_3").text("Open");
}
function showUnInstallInfo() {
	$("#buyinfo_1").css("display","none");
	$("#buyinfo_2").css("display","none");
	$("#buyinfo_4").css("display","block");
	$("#buyinfo_4").text("UnRegister");
	//gameResult.games[0].isPaid = !gameResult.games[0].isPaid;		//temporary test
}
function showUnlockInfo()
{
$("#lock_1").text("UnLock");
}
function showLockInfo()
{
$("#lock_1").text("Lock");
}
function prepareUrl(type,appid)
{
	url="http://10.75.11.79/appstore/userapps/"+type+"/email:kishore@gmail.com/deviceId:7/appId:"+appid+"/isFree:yes"
	return url;
}	
function setSession(type) {
	var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
	app_id = appInfo.app_id;
	isFree = appInfo.is_free;
	if (isFree == true) {
		isFree = "yes";
	} else {
		isFree = "no";
	}

	if(!search_flag)
		updateResponseArray(appInfo.cat_name,appInfo.app_id,type,appInfo);
	else
		updateSearchResponseArray(appInfo.app_id,type,appInfo);
		

}

function updateSearchResponseArray(app_id,type,appInfo){
	var len = res.TotalResults;
	if(len<5)
	{
		tot_rows = 1;
	}
	else
	{
		tot_rows = len/5;
	}
	tot_rows = Math.ceil(tot_rows);
	for (var row=0; row < tot_rows; row++) {

		for (var col=0; col < len; col++) {
			  if(res.Results[1][col].applists.app_id==app_id){
					if(type=="register"){
						res.Results[1][col].userapps.installed_on = getCurrentDateString();
						var obj = {};
						obj['id'] = "thumb_"+row+"_"+col;
						searchShowPreview(obj);
						break;
					}
					if(type=="unregister"){
						res.Results[1][col].userapps.installed_on = null;
						var obj = {};
						obj['id'] = "thumb_"+row+"_"+col;
						//alert(obj);
						searchShowPreview(obj);
						break;
					}	   	
			 }
		}
	}
}
function updateResponseArray(cat_name,app_id,type,appInfo){
	
	for (var row=0; row < res.TotalResults; row++) {
		
	 if(res.Results[row][0]==cat_name){
	 		
	 	for (var col=0; col < res.Results[row][1].length; col++) {
		   if(res.Results[row][1][col].applists.app_id==app_id){
		   		if(type=="register"){
					res.Results[row][1][col].userapps.installed_on = getCurrentDateString();
					var obj = {};
					obj['id'] = "thumb_"+row+"_"+col;
					
					showPreview(obj);
				}
				if(type=="unregister"){
					res.Results[row][1][col].userapps.installed_on = null;
					var obj = {};
					obj['id'] = "thumb_"+row+"_"+col;
					//alert(obj);
					showPreview(obj);
					
				}	   	
		   }
		 }
	 }
	}
	
}
function getCurrentDateString() {
  	var n = new Date();
	var day=n.getDay();
	var month=n.getMonth();
	var year=n.getFullYear();
	var result = year+"-"+month+"-"+day;
    return result;  
}
function registerClick()
{

					var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
					app_id=appInfo.app_id;
					prepareUrl("installApp",app_id);
				
					
					
						$.getJSON(url, function(data) {
													
								
								if(data.Status == "Success")
								{
								$("#lock_1").removeAttr("disabled"); 
								if(data.message="Application successfully installed")
								{
										
										showOpenInfo();
										showUnInstallInfo();
										//gameResult.games[0].bought_on = null;		//temporary test
								}
								
								}
								else
								{
									if(data.message="Application is installed already")
									{
										alert("application already installed");
									}
									
								}
							
						});		
				
		


}
function unregisterClick()
{
						var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
					app_id=appInfo.app_id;
						prepareUrl("UnInstallApp",app_id);
						$.getJSON(url,function(data) {
						
						if(data.Status == "Success")
						{
						
						showLockInfo();
						$("#lock_1").attr("disabled","disabled");
						if(data.message="Application successfully Uninstalled"){
									showInstallInfo();
							}
						}
						else
								{
									if(data.message="The App is not yet purchased \/ installed")
									{
									console.log("failure to UNinstall application");
									
									}
								}
						
					   }); 



}
