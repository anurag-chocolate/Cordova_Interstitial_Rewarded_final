// JavaScript Documen "choco_interstitial_Ads.js"




function Load(){

	document.getElementById("loadIntesrtitial").style.display="block";
	//document.getElementById("adloading").style.display="block";
	window.alert("Ad Request is in progress. Now click Ok to dismiss this alert and wait for next alert to appear before clicking any other button");
    callbackFunction = InterstitialAdEvent;
     loadInterstitialAdFromSDK("XqjhRR");
     setAdRequestAppParams("CordovaDemo", "Vdopia", "cordova-demo.com", "vdopia.com", "", "movie");

}

function Show(){

 showInterstitialAdFromSDK();

}

function InterstitialAdEvent(message) {
console.log("Interstitial Ad Event ::: " + message);

	if (message === "onInterstitialLoaded") {

       window.alert("Interstitial Ad loaded, Now click on Show Interstitial ad to view the ad");

      // document.getElementById("adloading").style.display="block";
       document.getElementById("showInterstitial").style.display="block";

  }

    if (message === "onInterstitialShown") {

        window.alert("Interstitial ad shown");

   }

   if (message === "onInterstitialFailed") {

        window.alert("Interstitial ad failed, Click on Load Interstitial ad again to request for a new ad");

   }

   if (message === "onInterstitialDismissed") {

        window.alert("Interstitial Ad dismissed");

        reload();

     }
   if (message === "onInterstitialClicked") {
	   window.alert("Interstitial Ad clicked");

    }

}


