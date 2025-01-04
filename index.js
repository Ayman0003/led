// Array of image paths
const images = ["../img/image0_0.jpg", "img/image0_0.jpg", "img/image0_0.jpg"]; // Add more images as needed
let currentIndex = 0;



//#home backgground 
$(document).ready(function(){
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); 
                    
      $(window).scroll(function() {
                    								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		var coords = '50% '+ yPos + 'px';

		$bgobj.css({ backgroundPosition: coords });
		
}); 

 });	

}); 



// google maps iframe so it work on safari and firefox  ...

document.createElement("article");
document.createElement("section");
document.addEventListener("DOMContentLoaded", function() {
    let iframes = document.querySelectorAll('iframe.lazyload-iframe');
    
    iframes.forEach(function(iframe) {
      const src = iframe.getAttribute('src');
      iframe.setAttribute('data-src', src);
      iframe.setAttribute('src', 'about:blank');

      // Lazy load manually for browsers that do not support the loading="lazy" attribute
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            iframe.setAttribute('src', iframe.getAttribute('data-src'));
            observer.unobserve(iframe);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(iframe);
    });
  });
  const $PANE = $("#triple-pane");
const $CONTENT = $("#triple-pane .pane-content");
const $TITLE = $("#triple-pane .pane-title");
const $TEXT = $("#triple-pane .pane-text");
const $BTN = $("#triple-pane .pane-btn");

// Pick the sizes that look best at max width of the element
const maxTitleSize = 36;
const maxTextSize = 20;
const maxBtnSize = 24;
const maxPadding = 20;

const resize = _ => {
	const W = $PANE.width() / 1400;

	$TITLE.css("font-size", maxTitleSize * W);
	$TEXT.css("font-size", maxTextSize * W);
	$BTN.css("font-size", maxBtnSize * W);
	$CONTENT.css("padding", maxPadding * W);
};

$(window).resize(resize);
$(document).ready(resize);





document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  // Toggle the 'show' class on nav-menu when hamburger is clicked
  hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked");  // Debugging log
    navMenu.classList.toggle('show');
  });

  // Optional: Close the menu when clicking outside
  document.addEventListener('click', (event) => {
    console.log("Document clicked");  // Debugging log
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('show');
    }
  });
});
