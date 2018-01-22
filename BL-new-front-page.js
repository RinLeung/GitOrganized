jQuery('.menu-homepage-scroll-container a').addClass('js-smooth-scroll2').attr('target', '_self');
jQuery('.section:after').trigger('inview').addClass('animateme');
jQuery('.burger-i>a').addClass('no-click').removeAttr('href');
jQuery('.static>a').addClass('no-click').removeAttr('href');
//Custom toggle for the mega menu 
jQuery(document).ready(function( $ ) {
	window.scrollTo(0,1);
	var i = 0; 
	$('.burger-i>a').click(function(){
		if (i == 0){ 
		$('.main-navigation-ul li > .sub-menu').css({"display": "block", "width":"auto" });
			$('#menu-item-940 > .menu-item-link').html("<img src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMTUwIDE1MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiPjxkZWZzPjxwYXRoIGQ9Ik0zNi45OCAxMjEuMjZDMzQuMiAxMjMuOTEgMjkuNzkgMTIzLjgyIDI3LjEzIDEyMS4wM0MyNy4xMyAxMjEuMDMgMjcuMTMgMTIxLjAzIDI3LjEzIDEyMS4wM0MyNC40OCAxMTguMjYgMjQuNTkgMTEzLjg1IDI3LjM3IDExMS4yQzM2LjEzIDEwMi44MyAxMDYuMjggMzUuODIgMTE1LjA1IDI3LjQ0QzExNy44MyAyNC43OSAxMjIuMjMgMjQuODkgMTI0Ljg4IDI3LjY3QzEyNC44OCAyNy42NyAxMjQuODggMjcuNjcgMTI0Ljg4IDI3LjY3QzEyNi41OSAzMi40NSAxMjYuNTEgMzUuNzMgMTI0LjY2IDM3LjVDMTE1Ljg5IDQ1Ljg4IDQ1Ljc0IDExMi44OSAzNi45OCAxMjEuMjZaIiBpZD0iZU1uNFhrVzUyIj48L3BhdGg+PHBhdGggZD0iTTI2LjI1IDM3LjMxQzIzLjQ2IDM0LjY3IDIzLjM1IDMwLjI2IDI1Ljk5IDI3LjQ3QzI1Ljk5IDI3LjQ3IDI1Ljk5IDI3LjQ3IDI1Ljk5IDI3LjQ3QzI4LjYzIDI0LjY5IDMzLjA1IDI0LjU3IDM1LjgzIDI3LjIxQzQ0LjYyIDM1LjU2IDExNSAxMDIuMzIgMTIzLjggMTEwLjY3QzEyNi41OSAxMTMuMzEgMTI2LjcgMTE3LjcyIDEyNC4wNiAxMjAuNUMxMjQuMDYgMTIwLjUgMTI0LjA2IDEyMC41IDEyNC4wNiAxMjAuNUMxMTkuMzYgMTIyLjQ0IDExNi4wOCAxMjIuNTMgMTE0LjIyIDEyMC43N0MxMDUuNDIgMTEyLjQyIDM1LjA0IDQ1LjY1IDI2LjI1IDM3LjMxWiIgaWQ9ImYyNjFrU29LTEwiPjwvcGF0aD48L2RlZnM+PGc+PGc+PGc+PHVzZSB4bGluazpocmVmPSIjZU1uNFhrVzUyIiBvcGFjaXR5PSIxIiBmaWxsPSIjMTQxYjRkIiBmaWxsLW9wYWNpdHk9IjEiPjwvdXNlPjxnPjx1c2UgeGxpbms6aHJlZj0iI2VNbjRYa1c1MiIgb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW9wYWNpdHk9IjAiPjwvdXNlPjwvZz48L2c+PGc+PHVzZSB4bGluazpocmVmPSIjZjI2MWtTb0tMTCIgb3BhY2l0eT0iMSIgZmlsbD0iIzE0MWI0ZCIgZmlsbC1vcGFjaXR5PSIxIj48L3VzZT48Zz48dXNlIHhsaW5rOmhyZWY9IiNmMjYxa1NvS0xMIiBvcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2Utb3BhY2l0eT0iMCI+PC91c2U+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==' style='width:35px;' />");
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
	
$('.home .master-holder-bg-holder').remove();
$('.home .mk-main-wrapper-holder').remove();
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
	new ScrollMagic.Scene({triggerElement: "#theme-page"})
.setClassToggle(".mk-resposnive-logo","hidden")
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
	
//$('.swap-dark3').attr('id','swap-dark3');
//$('.swap-dark2').attr('id','swap-dark2');
//var hgt2 = document.getElementById("swap-dark3").scrollHeight;
//var hgt3 = document.getElementById("swap-dark2").scrollHeight;
//var hgtsum = hgt2 + hgt3;
var controller2 = new ScrollMagic.Controller();

// create a scene
	/*
new ScrollMagic.Scene({triggerElement: "#swap-dark3",triggerHook: 'onLeave', duration: "%100"})
.setClassToggle(".newiconcontainer","darkicons")
.addTo(controller2);	
new ScrollMagic.Scene({triggerElement: "#swap-dark3",triggerHook: 'onLeave', duration: "%100"})
.setClassToggle(".responsive-menu-button","darkiconsbg")
.addTo(controller2);	
	
new ScrollMagic.Scene({triggerElement: "#swap-dark2",triggerHook: 'onLeave', duration: "%100"})
.setClassToggle(".newiconcontainer","darkicons")
.addTo(controller2);	
new ScrollMagic.Scene({triggerElement: "#swap-dark2",triggerHook: 'onLeave', duration: "100%"})
.setClassToggle(".responsive-menu-button","darkiconsbg")
.addTo(controller2);	
	*/
	
var containercontroller = new ScrollMagic.Controller();
	

	new ScrollMagic.Scene({
		triggerElement:"#wipe1",
		triggerHook:"onLeave"
	})
	.setPin("#wipe1")
	.addIndicators()
	.addTo(containercontroller);
	
	/** WIPE #2 **/
	var blackbars = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAMAAABXc8oyAAABvFBMVEUAAAAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAi64aDAAAAlHRSTlMAAQIDBAUGBwgJCgsMDg8QERITFBUWFxkbHB0eHyEiIyQlJicoKissLS4wMTM0NTc4OTo7PT5AQkNERkdISUpMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWdoaWtsbW5vcXN0dXZ3eHl6fH1+gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmR6Vu6gAAAsJJREFUeNp10+dWE2EUheE9TGghISC9I7333qWJFJESaTFAEJCOgJHeWyCEJHPDfud8zMLI8gqeH+/e0Aoxdh4SejGKQi0TM4eq8fYTKn3JcOwqkY/tqH+Ow+oaYrGIRF81eu9N6r4dGVoxhq/Cgk+tyNNyMHliCL8ZRKk/DXNIwNKWEv3UgiZPjLKxjARvLTofzEHOOaT6yzB4E244nkK2BhSReKBG3PWxuLCjWEj0xGJNiJ56tD9alB0H1AMbiyOXoSFnVuRr2Zg6FuIAyvypmHMq5odO1HoT0PwUrWySWIMuF4tp/lIWTyeRo+XBehocdjUM3PWiypdEYpS7DQ1CXF9F3DOJkcquA8m+CvTfGlUI8XwcBSQeGYwspmB+j8U6bzxWNpQYTyNaQaJJdc4KsQRD12HBQszVcjFB4hBK/OmwO1WTCyw2SjHeW4cOEueR4i8n0XA0jSxuAkwL8bYf5SRSjA4WV9cRK8Q2d5SyTU2qkE4ixZhgcVKI1ySmYZbEbtR4uQk2Vlj88GBW9kgsw8ANiSJGAcbFCi5HuAkC87PYwOLPBSQJsfcugpvgK+VnkfKzGGR2dbG4vClW0IwWagKz8kvmH9Dz58N6xmKxlgEbrYCa4E3+BRGjEn0kziBTK8KIbEKD4/wkyvzLFKOJxa0lXkG3yyQHx/mFSPlZ/Lavmu5JTMTiNjfBM4uUn0WR/5DEQoxeCHFMHCSLm4Dyk/ia300iH6RHrOC3XTbBS/7PMr8QXT2oJlEcxN2KRjoINYGeX6X8JOqXfC8v2Y8KbgKsyPytlD/gkumBl5T5WeT8JL5c8od+SUUcBCzK/Becn0T9ko7XS4LE75SfRP2SX+Ql8+QluQn+yi/E/17yBHJwev6P+iUtL5dc0y8Jmd8m85P4zyVT9Uu+o/wkcv7XS5bql8yRl4TtTX6+JIkBl/wDAw4qMufy8M8AAAAASUVORK5CYII=) repeat,';
	
	var bgoriginal = $('#wipe2').css("background-image");
	var bgnew = blackbars + bgoriginal;
	
	$('#wipe2').css("cssText", "background:" + bgnew + "center / cover !important") ;
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:"110%"
	})
	.setPin("#wipe2")
	.addIndicators()
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement: "#wipe2",
		triggerHook:"onLeave",
	})
.setClassToggle(".animated","fadeIn")
.addTo(containercontroller);
	
	var orangeTween = TweenMax.to(".orangePanel",2,{className: "+=tweendisplay"});
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:200,
		offset:"70%"
	})
	.setTween(orangeTween)
	.addIndicators({name:"orangetween"})
	.addTo(containercontroller);
	/*
	var bgdarkswipe = TweenMax.to(".passivebg",5,{className: "+=activebg"});
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:300,
		offset:125
	})
	.setTween(bgdarkswipe)
	.addIndicators()
	.addTo(containercontroller);
	*/
	var bgdarkswipe = CSSRulePlugin.getRule("#wipe2:before");
	var bgds = TweenMax.to(bgdarkswipe, 1, {cssRule: { top: '0%' }},{autoAlpha:0,rotation:0.001, x:500,  ease:Linear.easeNone});
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:25,
		offset:"60%"
	})
	.setTween(bgds)
	.addIndicators()
	.addTo(containercontroller);
	
	/*
	use a pseudo selector to animate the dark background
	
	https://codepen.io/jamiejefferson/pen/ibHAt
	div#wipe2:before {
    position: absolute;
    width: 100%;
    height: calc(100% + 90px);
    background: rgba(19,28,78,0.6);
    top: 0px;
}
	*/
	/** WIPE 3 **/
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe3",
		triggerHook:"onLeave"
	})
	.setPin("#wipe3")
	.addIndicators()
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe4",
		triggerHook:"onLeave"
	})
	.setPin("#wipe4")
	.addIndicators()
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe5",
		triggerHook:"onLeave",
		
	})
	.setPin("#wipe5")
	.addIndicators()
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe6",
		triggerHook:"onLeave"
	})
	.setPin("#wipe6")
	.addIndicators()
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe7",
		triggerHook:"onLeave",
	
	})
	
	
})

