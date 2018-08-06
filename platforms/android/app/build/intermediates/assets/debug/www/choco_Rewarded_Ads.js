// JavaScript Documen "choco_Rewarded_Ads.js"
window.addEventListener("loadR",init,false)

//You need to intialize SDK only once, as we have alredy initialised this in Interstital ads, so we are commenting it here.

//function init(){

//initializeChocolateSDK("XqjhRR");

//}

function LoadR(){

	document.getElementById("loadReward").style.display="block";
	//document.getElementById("adloading").style.display="block";
	window.alert("Ad Request is in progress. Now click Ok to dismiss this alert and wait for next alert to appear before clicking any other button");
    callbackFunction = RewardAdEvent;
     loadRewardAdFromSDK("XqjhRR");
     setAdRequestAppParams("CordovaDemo", "Vdopia", "cordova-demo.com", "vdopia.com", "", "movie");

}
//Premodal Message function - optional

//function showRewardDialog() {
//if (REWARD_AD_LOADED == true) {
//var dialog = document.getElementById('premodal');
//document.getElementById('yes').onclick = function() {
// dialog.close();
//   showRewardAd();
// };

//document.getElementById('no').onclick = function() {
//      dialog.close();
//    };

//     dialog.showModal();
//    } else {
//          alert("Reward Ad Not Loaded.");
//        }
//     }

function ShowR(){

console.log("Show Reward Ad Start");

 showRewardAdFromSDK("qj5ebyZ0F0vzW6yg", "CordovaUser", "coin", "30");

}

function rewardAdCompleted() {
           //  var dialog = document.getElementById('postmodal');
            // setTimeout(function(){ dialog.close(); }, 3000);
            // dialog.show();
        }

        function RewardAdEvent(message) {
             console.log("Reward Ad Event ::: " + message);

        if (message === "onRewardedVideoLoaded") {
                 window.alert("Reward ad loaded");
                     }

         if (message === "onRewardedVideoFailed") {
                  window.alert("Reward ad Failed");
                      }

        if (message === "onRewardedVideoShown") {
                  window.alert("Reward ad Shown");
                      }

        if (message === "onRewardedVideoShownError") {
                  window.alert("Reward ad Error");
                      }

        if (message === "onRewardedVideoDismissed") {
                  window.alert("Reward ad Dismissed");
                      }

        if (message === "onRewardedVideoCompleted") {
                 rewardAdCompleted();
                   window.alert("Reward ad Completed");
                        }
        }


