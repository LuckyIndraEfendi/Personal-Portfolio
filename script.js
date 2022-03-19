
  var typed = new Typed(".text-animation", {
    strings: ["Developer", "Freelancer","Desaigner"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  

  // Navbar
  const nav = document.querySelector(".background-nav")
  window.addEventListener("scroll", function(){
    nav.style.transition = ".4s"
    if(this.window.pageYOffset > 50){
      nav.classList.add("navbg-when-scroll")
    } else {
      nav.classList.remove("navbg-when-scroll")
    }
  })

//   const navBar_BG = document.querySelector(".background-nav");
// window.addEventListener("scroll", function () {
//   navBar_BG.style.transition = "0.1s";
//   if (window.pageYOffset > 50) {
//     navBar_BG.classList.add("scroll-nav", "shadow");
//   } else {
//     navBar_BG.classList.remove("scroll-nav", "shadow");
//   }
// });


// Looping Font

// Selector
const counters = document.querySelectorAll('.counter');
// Main function
for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 5000; // change animation speed here
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}

$(document).on({
  "contextmenu": function (e) {
      console.log("ctx menu button:", e.which); 

      // Stop the context menu
      e.preventDefault();
  },
  "mousedown": function(e) { 
      console.log("normal mouse down:", e.which); 
  },
  "mouseup": function(e) { 
      console.log("normal mouse up:", e.which); 
  }
});

function disableselect(e){  
  return false  
  }  
  
  function reEnable(){  
  return true  
  }  
  
//   //if IE4+  
  // document.onselectstart=new Function ("return false")  
  // document.oncontextmenu=new Function ("return false")  
  // //if NS6  
  // if (window.sidebar){  
  // document.onmousedown=disableselect  
  // document.onclick=reEnable  
  // }

// jQuery(document).ready(function(){
//   jQuery(function() {
//         jQuery(this).bind("contextmenu", function(event) {
//             event.preventDefault();
//             alert('Mau Copy Element ya 🤣')
//         });
//     });
// });


// Pendeteksi Ads Bloker dan Menonaktifkannya secara otomatis
function adBlockNotDetected() {
	alert('AdsBlocker Disable on This Site');
}
// Function called if AdBlock is detected
function adBlockDetected() {
	alert('AdBlock is enabled');
}

// We look at whether FuckAdBlock already exists.
if(typeof fuckAdBlock !== 'undefined' || typeof FuckAdBlock !== 'undefined') {
	// If this is the case, it means that something tries to usurp are identity
	// So, considering that it is a detection
	adBlockDetected();
} else {
	// Otherwise, you import the script FuckAdBlock
	var importFAB = document.createElement('script');
	importFAB.onload = function() {
		// If all goes well, we configure FuckAdBlock
		fuckAdBlock.onDetected(adBlockDetected)
		fuckAdBlock.onNotDetected(adBlockNotDetected);
	};
	importFAB.onerror = function() {
		// If the script does not load (blocked, integrity error, ...)
		// Then a detection is triggered
		adBlockDetected(); 
	};
	importFAB.integrity = 'sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=';
	importFAB.crossOrigin = 'anonymous';
	importFAB.src = 'https://cdnjs.cloudflare.com/ajax/libs/fuckadblock/3.2.1/fuckadblock.min.js';
	document.head.appendChild(importFAB);
}

// let spinners = document.querySelector(".spinner");
// window.addEventListener("load", function () {
//   spinners.style.display = "none"
// })