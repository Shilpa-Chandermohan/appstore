appInfo = new function() {
	/* class data member*/
		this.app_id = "";
		this.app_Name = "";
		this.description="";
		this.version_Code = "";
		this.age_restriction = "";
		this.languages_supported = "";
		this.platform_supported = "";
		this.os_version = "";
		this.released_on = "";
		this.demo_video = "";
		this.runs_offline ="";
		this.no_of_reviews ="";
		this.rating = "";
		this.pack_Name = "";
		this.version_Name = "";
		this.cat_id = "";
		this.url_image = "";
		this.price = "";
		this.apkUrl="";
		this.publisher="";
		this.size = "";
		this.downloads = "";
		this.updatedOn = "";
		this.installed_on = "0000-00-00";
		this.bought_on = "0000-00-00";
		this.is_locked = "";
		this.usersRated="";
		this.is_free="";
		this.is_installed="";
		this.app_open_URL = "";
		this.cat_name = "";
	   
	   /* getter and setter methods of class members*/
	 
	   this.getAppId = function () {
			return appInfo.app_id;
		};
		this.setAppId = function (appId) {
			appInfo.app_id = appId;
		};
	   
		this.getAppName = function () {
			return appInfo.app_Name;
		};
		this.setAppName = function (appName) {
			appInfo.app_Name = appName;
		};
		
		this.getPackageName = function () {
			return appInfo.pack_Name;
		};
		this.setPackageName = function (packageName) {
			appInfo.pack_Name = packageName;
		};
		
		this.getVersionName = function () {
			return appInfo.version_Name;
		};
		this.setVersionName = function (versionName) {
			appInfo.version_Name = versionName;
		};
		
		this.getVersionCode = function () {
			return appInfo.version_Code;
		};
		this.setVersionCode = function (versionCode) {
			appInfo.version_Code = versionCode;
		};
		
		this.getCatId = function () {
			return appInfo.cat_id;
		};
		this.setCatId = function (catId) {
			appInfo.cat_id = catId;
		};
		
		this.getRating = function () {
			return appInfo.rating;
		};
		this.setRating = function (rating) {
			appInfo.rating = rating;
		};
		
		this.getUrlImage = function () {
			return appInfo.url_image;
		};
		this.setUrlImage = function (urlImage) {
			appInfo.url_image = urlImage;
		};
		
		this.getPrice = function () {
			return appInfo.price;
		};
		this.setPrice = function (price) {
			appInfo.price = price;
		};
		
		this.getApkUrl = function () {
			return appInfo.apkUrl;
		};
		this.setApkUrl = function (apkUrl) {
			appInfo.apkUrl = apkUrl;
		};
		
		this.getPublisher = function () {
			return appInfo.publisher;
		};
		this.setPublisher = function (publisher) {
			appInfo.publisher = publisher;
		};
		
		this.getDescription = function () {
			return appInfo.description;
		};
		this.setDescription = function (description) {
			appInfo.description = description;
		};
		
		this.getSize = function () {
			return appInfo.size;
		};
		this.setSize = function (size) {
			appInfo.size = size;
		};
		
		this.getDownloads = function () {
			return appInfo.downloads;
		};
		this.setDownloads = function (downloads) {
			appInfo.downloads = downloads;
		};
		
		this.getUpdatedOn = function () {
			return appInfo.updatedOn;
		};
		this.setUpdatedOn = function (updatedOn) {
			appInfo.updatedOn = updatedOn;
		};
		
		this.getInstalledOn = function () {
			return appInfo.installed_on;
		};
		this.setInstalledOn = function (installedOn) {
			appInfo.installed_on = installedOn;
		};
		this.getIsLocked = function () {
			return appInfo.is_locked;
		};
		this.setIsLocked = function (is_locked) {
			appInfo.is_locked = is_locked;
		};
		
		this.getBoughtOn = function () {
			return appInfo.bought_on;
		};
		this.setBoughtOn = function (boughtOn) {
			appInfo.bought_on = boughtOn;
		};
		
		this.getUsersRated = function () {
			return appInfo.usersRated;
		};
		this.setUsersRated = function (usersRated) {
			appInfo.usersRated = usersRated;
		};
		
		this.getIsFree = function () {
			return appInfo.is_free;
		};
		this.setIsFree = function (isFree) {
			appInfo.is_free = isFree;
		};
		
		this.getIsInstalled = function () {
			return appInfo.is_installed;
		};
		this.setIsInstalled = function (isInstalled) {
			appInfo.is_installed = isInstalled;
		};
		this.getAgeRestriction = function () {
			return appInfo.age_restriction;
		};
		this.setAgeRestriction = function (age_restriction) {
			appInfo.age_restriction = age_restriction;
		};
		this.getLanguageSupported = function () {
			return appInfo.languages_supported;
		};
		this.setLanguageSupported = function (languages_supported) {
			appInfo.languages_supported = languages_supported ;
		};
		this.getPlatformSupport = function () {
			return appInfo.platform_supported;
		};
		this.setPlatformSupport = function (platform_supported) {
			appInfo.platform_supported = platform_supported ;
		};
		
		this.getOSVersion = function () {
			return appInfo.os_version;
		};
		this.setOSVersion = function (os_version) {
			appInfo.os_version = os_version;
		};
		
		this.getReleasedOn = function () {
			return appInfo.released_on;
		};
		this.setReleasedOn = function (released_on) {
			appInfo.released_on = released_on;
		};
		
		this.getDemoVideo = function () {
			return appInfo.demo_video;
		};
		this.setDemoVideo = function (demo_video) {
			appInfo.demo_video = demo_video;
		};
		
		this.getRunsOffline = function () {
			return appInfo.runs_offline;
		};
		this.setRunsOffline = function (runs_offline) {
			appInfo.runs_offline = runs_offline ;
		};
		
		this.getNoOfReviews = function () {
			return appInfo.no_of_reviews;
		};
		this.setNoOfReviews = function (no_of_reviews) {
			appInfo.no_of_reviews = no_of_reviews ;
		};
		this.getAppOpenUrl = function () {
			return appInfo.app_open_URL;
		};
		this.setAppOpenUrl = function (app_open_URL) {
			appInfo.app_open_URL = app_open_URL;
		};
		 this.getCatName = function () {
			return appInfo.cat_name;
		};
		this.setCatName = function (cat_name) {
			appInfo.cat_name = cat_name;
		};
		
	}
	
	
/*
How to use class member function
---------------------------------------
appInfo.getAppName() ----->  for getting a value....

appInfo.setAppName('Cool Birds') ------>  for setting a value....

*/
