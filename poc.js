function redirectToApp() {

    // alert('Testing....!');

    // window.location = 'visible://dummyparam';

    // const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // alert(navigator.userAgentData.platform);

    // const iOS = navigator.userAgentData.platform === 'iOS';
    // if (iOS) {
    
    //     window.location = 'visible://dummyparam';
    //     window.location.href = "https://apps.apple.com/us/app/visible-mobile/id1367950045?ls=1";
    // }
    // else {
    //     alert('Non iOS platform detected');
    // }



    (function() {
        var app = {
          launchApp: function() {
            window.location.replace("visible://dummyparam");
            this.timer = setTimeout(this.openWebApp, 1000);
          },
      
          openWebApp: function() {
            window.location.replace("https://apps.apple.com/us/app/visible-mobile/id1367950045?ls=1");
          }
        };
      
        app.launchApp();
      })();

      
}


