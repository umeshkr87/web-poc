function redirectToApp() {

    // alert('Testing....!');

    // window.location = 'visible://dummyparam';

    // const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // alert(navigator.userAgentData.platform);

    // const iOS = navigator.userAgentData.platform === 'iOS';
    // if (!iOS) {
    //     console.log("Not an iOS platform");
    //     alert.log("Not an iOS platform");
    //     // return;
    // }
        

    // if (iOS) {
    
    //     window.location = 'visible://dummyparam';
    //     window.location.href = "https://apps.apple.com/us/app/visible-mobile/id1367950045?ls=1";
    // }
    // else {
    //     alert('Non iOS platform detected');
    // }


    // Another way 
    (function() {
        var app = {
          launchApp: function() {
            window.location.replace("visible://dummyparam");
            this.timer = setTimeout(this.openAppStore, 1000);
          },
      
          openAppStore: function() {
            window.location.replace("https://apps.apple.com/us/app/visible-mobile/id1367950045?ls=1");
          }
        };
      
        app.launchApp();
      })();


    //   var redirect = function (location) {
    //     var iframe = document.createElement('iframe');
    //     iframe.setAttribute('src', location);
    //     iframe.setAttribute('width', '1px');
    //     iframe.setAttribute('height', '1px');
    //     iframe.setAttribute('position', 'absolute');
    //     iframe.setAttribute('top', '0');
    //     iframe.setAttribute('left', '0');
    //     document.documentElement.appendChild(iframe);
    //     iframe.parentNode.removeChild(iframe);
    //     iframe = null;
    // };
    
    // setTimeout(function () {
    //     redirect('https://apps.apple.com/us/app/visible-mobile/id1367950045?ls=1');
    // }, 25);
    
    // redirect('visible://dummyparam');

}


 // Another way 
//  (function() {
//     var app = {
//       launchApp: function() {
//         window.location.replace("visible://dummyparam");
//         this.timer = setTimeout(this.openAppStore, 1000);
//       },
  
//       openAppStore: function() {
//         window.location.replace("https://apps.apple.com/us/app/visible-mobile/id1367950045?ls=1");
//       }
//     };
  
//     app.launchApp();
//   })();