jQuery('.menu-homepage-scroll-container a').addClass('js-smooth-scroll2').attr('target', '_self');
jQuery('.section:after').trigger('inview').addClass('animateme');
jQuery('.burger-i>a').addClass('no-click').removeAttr('href');
jQuery('.static>a').addClass('no-click').removeAttr('href');
//Custom toggle for the mega menu 
jQuery(document).ready(function( $ ) {
	var i = 0; 
	$('.burger-i>a').click(function(){
		if (i == 0){ 
		$('.main-navigation-ul li > .sub-menu').css({"display": "block", "width":"auto" });
			$('#menu-item-940 > .menu-item-link').html("<svg class='mk-svg-icon' data-name='mk-moon-close' data-cacheid='icon-59f20e6a1c92c' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M507.331 411.33l-.006-.005-155.322-155.325 155.322-155.325.006-.005c1.672-1.673 2.881-3.627 3.656-5.708 2.123-5.688.912-12.341-3.662-16.915l-73.373-73.373c-4.574-4.573-11.225-5.783-16.914-3.66-2.08.775-4.035 1.984-5.709 3.655l-.004.005-155.324 155.326-155.324-155.325-.005-.005c-1.673-1.671-3.627-2.88-5.707-3.655-5.69-2.124-12.341-.913-16.915 3.66l-73.374 73.374c-4.574 4.574-5.784 11.226-3.661 16.914.776 2.08 1.985 4.036 3.656 5.708l.005.005 155.325 155.324-155.325 155.326-.004.005c-1.671 1.673-2.88 3.627-3.657 5.707-2.124 5.688-.913 12.341 3.661 16.915l73.374 73.373c4.575 4.574 11.226 5.784 16.915 3.661 2.08-.776 4.035-1.985 5.708-3.656l.005-.005 155.324-155.325 155.324 155.325.006.004c1.674 1.672 3.627 2.881 5.707 3.657 5.689 2.123 12.342.913 16.914-3.661l73.373-73.374c4.574-4.574 5.785-11.227 3.662-16.915-.776-2.08-1.985-4.034-3.657-5.707z'></path></svg>");
			$('body').prepend('<style class="opbm-style">@media (min-width:1141px){.main-navigation-ul li.has-mega-menu>ul.sub-menu{top:20px;}.mk-svg-icon{position:relative; z-index:99;}.header-logo{z-index:-1}.dropdownJavascript li.dropdownOpen>ul.sub-menu {display:block!important}</style>');
			i++;
		}
		else {
			$('.main-navigation-ul li > .sub-menu').css({"display": "none", "width":"0px" }).removeAttr('style');
			$('.opbm-style').remove();
			$('#menu-item-940 > .menu-item-link').html("<svg class='mk-svg-icon' data-name='mk-icon-navicon' data-cacheid='icon-59f20bb6ba69a' style=' height:16px; width: 13.714285714286px; ' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1536 1792'><path d='M1536 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z'></path></svg>");
			i = 0;
		}
	});
});
//Move byline to just below Header
jQuery('.opbm-byline').detach().prependTo('.blog-single-meta');

//Swap icon for responsive nav menu plugin
jQuery('.responsive-menu-inner').remove();
jQuery('.responsive-menu-box').append('<div class="newiconcontainer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OUVEM0E3OUVCRjcxMUU3OUEyMDk0QzgyQzVFMEMzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OUVEM0E3QUVCRjcxMUU3OUEyMDk0QzgyQzVFMEMzNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5RUQzQTc3RUJGNzExRTc5QTIwOTRDODJDNUUwQzM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5RUQzQTc4RUJGNzExRTc5QTIwOTRDODJDNUUwQzM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CE6PWQAAABpJREFUeNpi/P//PwMxgImBSDCqkDoKAQIMANUSAxFqvpFcAAAAAElFTkSuQmCC" alt=""/></div>');

//Start scroll functions
jQuery(document).ready(function( $ ) {
// add bouncy arrow
	$('body').append('<div class="arrow jump animatedscroll iteration"></div>');
	 $('.header-logo a').append('<img src="http://superiorcloudsolutions.com/broadleafresults/wp-content/uploads/2018/01/logo-scroll.svg" class="widthzero " />');
	
/* MagicScroll */
// init controller
var hgt = document.getElementsByTagName("BODY").scrollHeight;
var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: hgt , offset:450}});

// create a scene
new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".mk-header-holder","transparent")
.addTo(controller);

// create a scene
new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".arrow","hidden")
.addTo(controller);

// create a scene
new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".mk-sticky-logo","hidden")
.addTo(controller);
	
// create a scene
new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".widthzero","widthactual")
.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".widthzero","fadeIn")
.addTo(controller);	
	new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".widthzero","animated")
.addTo(controller);	

// create a scene
new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".dark-logo","hidden")
.addTo(controller);	
})