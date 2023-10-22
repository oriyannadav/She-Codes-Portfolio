if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";    

var isOpera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome;                          // Chrome 1+
    var isIE = /*@cc_on!@*/false;                            // At least IE6

    // if(OSName == "MacOS" && isChrome == true) 
    // {
    //     alert('chrome on MAC OS')
    // }

function fnBrowserDetect(){
                
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
        }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
        }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
        }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
        } else if(userAgent.match(/edg/i)){
        browserName = "edge";
        }else{
        browserName="No browser detection";
        }  
}


const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("display-none")
})


// Get the navbar element
const navbar = document.getElementById('navbar');

// Define a function to add a CSS class for the animation
function animateNavbar() {
    navbar.classList.add('animated');
}

// Define a function to remove the CSS class after the animation completes
function resetNavbar() {
    navbar.classList.remove('animated');
}

// Add an event listener to the window's scroll event
window.onscroll = function() {
  // Calculate the scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Define a threshold value where the animation should start
    const threshold = 100;

  // Check if the scroll position is beyond the threshold
    if (scrollPosition > threshold) {
        animateNavbar();
        } else {
        resetNavbar();
    }
};


const video = document.querySelector("video");
// Slow it to 55% speed
video.playbackRate = 0.55;