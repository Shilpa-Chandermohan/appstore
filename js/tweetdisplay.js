/*	var pcKey = {
		"Left" : 37,
		"Right" : 39,
		"Up" : 38,
		"Down" : 40,
		"Enter" : 13,
		"Escape" : 27
	};*/

$(document).ready(function() {
	newGetJsonResponse("tweets", {});
});
function setTweettitle(appInfo) {
	$("#tweet_name").text(appInfo.app_Name);	
	$("#tweet_date").text(appInfo.released_on);
	$("#tweet_size").text(appInfo.size+"Mb");
	$("#tweet_nod").text(appInfo.downloads);
	
	$("#tweet_version").text("ver"+appInfo.version_Code);
	
	$("#tweet_img").attr("src", appInfo.url_image);
	$("#p_supported").text(appInfo.platform_supported);
	$("#tweet_nop").text("("+appInfo.usersRated+")");
	$("#tweet_rate").text(appInfo.rating);
	tweetRating(appInfo.rating);
}

function displayTweets(result) {
	var setData1 = 0;
	var setData2 = 4;
	var tweetinc = 0;
	var pageIndex = 1;
	var paageCnt = 5;
	var count = 0;
	var counter = 0;
	var c = 0;

	var curKeyCode = pcKey;
	for ( tweetinc = 0; tweetinc < 5; tweetinc++) {
		$("#userimg" + tweetinc).attr("src", result.results[tweetinc].profile_image_url);
		$("#username" + tweetinc).text(result.results[tweetinc].from_user);
		$("#userdesc" + tweetinc).text(result.results[tweetinc].text);
		$("#usertime" + tweetinc).text(result.results[tweetinc].created_at);
	}

	$(document).keydown(function(e) {
	//$(document).keypress(function(e) {

		if (e.keyCode == curKeyCode.Down) {
			count = 0;
			if (pageIndex == 5) {
				return;
			}
			for ( tweetinc = (pageIndex * paageCnt); tweetinc < (pageIndex * paageCnt) + 5; tweetinc++) {

				$("#userimg" + setData1).attr("src", result.results[tweetinc].profile_image_url);
				$("#username" + setData1).text(result.results[tweetinc].from_user);
				$("#userdesc" + setData1).text(result.results[tweetinc].text);
				$("#usertime" + setData1).text(result.results[tweetinc].created_at);
				setData1++;
				count++;
			}
			pageIndex++;
			if (count == 5) {
				count = 0;
			}

		}
		setData1 = 0;
		if (e.keyCode == curKeyCode.Up) {
			if (pageIndex == 1)
				return;
			pageIndex--;

			count = 0;
			counter++;
			for ( tweetinc = (pageIndex * paageCnt) - 1; tweetinc >= (pageIndex * paageCnt) - 5; tweetinc--) {
				$("#userimg" + setData2).attr("src", result.results[tweetinc].profile_image_url);
				$("#username" + setData2).text(result.results[tweetinc].from_user);
				$("#userdesc" + setData2).text(result.results[tweetinc].text);
				$("#usertime" + setData2).text(result.results[tweetinc].created_at);
				setData2--;
				count++;
			}
			if (count == 5) {
				count = 0;
			}

		}
		setData2 = 4;
	});
}

function tweetRating(rating) {
	

	var halfStar = 0;
	var fractn = 0;
	var clearstar = 0;

	for ( clearstar = 1; clearstar <= 5; clearstar++) {

		$("#tstar" + clearstar).attr({
			"src" : "img/star_gray_info.png"
		});
	}

	if (!isNaN(rating) && rating != null && rating > 0) {
		if (Math.floor(rating) != Math.ceil(rating)) {
			var fractn = rating % 1;
		
			rating = Math.floor(rating);
			fractn = Math.round(fractn);
			

			for ( setstar = 1; setstar <= rating; setstar++) {
				
				$("#tstar" + setstar).attr({
					"src" : "img/star_red.png"
				});
			}
			fractn = Math.round(fractn);
			if (fractn != 0) {

				
				$("#tstar" + setstar).attr({
					"src" : "img/star_red.png"
				});

			} else {

				
				$("#tstar" + setstar).attr({
					"src" : "img/half_star.png"
				});
			}

		} else {
			for (var setstar = 1; setstar <= rating; setstar++) {
				//alert("set " + i + " th star of " + index + " index");
				$("#tstar" + setstar).attr({
					"src" : "img/star_red.png"
				});
			}
		}

	}
	if (rating == null || rating == 0) {
		for (var setstar = 1; setstar <= 5; setstar++) {
			$("#tstar" + setstar).attr({
				"src" : "img/star_gray_info.png"
			});
		}
	}
}
