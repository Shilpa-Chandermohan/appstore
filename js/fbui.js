  function facebookShare(){
  	var domainName = document.domain;
  	
  	if(domainName!="localhost"){
  		$("#share").attr("disabled", true);
		
  	}
	else if(domainName =="localhost"){
		$("#share").attr("disabled", false);
		//postToFeed();
	}
  }
  FB.init({appId: "114460485410672", status: true, cookie: true});

      function postToFeed() {
		//Session set
		var appInfo = JSON.parse(sessionStorage.getItem("appInfo"));
		
		hostname = 'http://ec2-54-251-148-245.ap-southeast-1.compute.amazonaws.com/appstore/apps/'+appInfo.app_id+'/icon.png';
		
		
        // calling the API ...
        var obj = {
          method: 'feed',
          /*redirect_uri: 'http://192.168.32.80/',
          /*link: 'https://developers.facebook.com/docs/reference/dialogs/',*/
          picture: hostname,
          name: appInfo.app_Name,
          caption: 'Reference Documentation',
          description: 'Using Dialogs to interact with users.'
        };

        function callback(response) {
         
        }

        FB.ui(obj, callback);
      }