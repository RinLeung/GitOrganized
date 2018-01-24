jQuery('.menu-homepage-scroll-container a').addClass('js-smooth-scroll2').attr('target', '_self');
jQuery('.section:after').trigger('inview').addClass('animateme');
jQuery('.burger-i>a').addClass('no-click').removeAttr('href');
jQuery('.static>a').addClass('no-click').removeAttr('href');
//Move byline to just below Header
jQuery('.opbm-byline').detach().prependTo('.blog-single-meta');

/*
|--------------------------------------------------------------------------
| CUSTOM TOGGLE FOR THE MEGA MENU
|--------------------------------------------------------------------------
*/
jQuery(document).ready(function( $ ) {
	$('.burger-i .mk-svg-icon').parent().addClass('actualburger');
	$('.burger-i .mk-svg-icon').remove();
	var iconburger = '<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTM2cHgiIGhlaWdodD0iMTI2Ljc3cHgiIHZpZXdCb3g9IjI0NS42NjcgMCAxMzYgMTI2Ljc3IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDI0NS42NjcgMCAxMzYgMTI2Ljc3Ig0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMxNDFCNEQiIGQ9Ik0zODEuNjY3LDIyLjEzNWMwLDMuODY2LTMuMTM1LDctNyw3aC0xMjJjLTMuODY3LDAtNy0zLjEzNC03LTdsMCwwYzAtMy44NjYsMy4xMzMtNyw3LTdoMTIyDQoJQzM3OC41MzMsMTUuMTM1LDM4MS42NjcsMTguMjY5LDM4MS42NjcsMjIuMTM1TDM4MS42NjcsMjIuMTM1eiIvPg0KPHBhdGggZmlsbD0iIzE0MUI0RCIgZD0iTTM4MS42NjcsMTA0LjEzNWMwLDMuODY2LTMuMTM1LDctNyw3aC0xMjJjLTMuODY3LDAtNy0zLjEzNC03LTdsMCwwYzAtMy44NjYsMy4xMzMtNyw3LTdoMTIyDQoJQzM3OC41MzMsOTcuMTM1LDM4MS42NjcsMTAwLjI2OSwzODEuNjY3LDEwNC4xMzVMMzgxLjY2NywxMDQuMTM1eiIvPg0KPHBhdGggZmlsbD0iIzE0MUI0RCIgZD0iTTM4MS42NjcsNjIuMTM1YzAsMy44NjYtMy4xMzUsNy03LDdoLTEyMmMtMy44NjcsMC03LTMuMTM0LTctN2wwLDBjMC0zLjg2NiwzLjEzMy03LDctN2gxMjINCglDMzc4LjUzMyw1NS4xMzUsMzgxLjY2Nyw1OC4yNjksMzgxLjY2Nyw2Mi4xMzVMMzgxLjY2Nyw2Mi4xMzV6Ii8+DQo8L3N2Zz4NCg==" style="width:35px" />';
	$('.actualburger').append(iconburger);
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
			$('#menu-item-940 > .menu-item-link').html(iconburger);
			i = 0;
		}
	});
});


/*
|--------------------------------------------------------------------------
| SWAP ICON FOR THE RESPONSIVE NAV MENU
|--------------------------------------------------------------------------
*/

jQuery('.responsive-menu-inner').remove();
jQuery('.responsive-menu-box').append('<div class="newiconcontainer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OUVEM0E3OUVCRjcxMUU3OUEyMDk0QzgyQzVFMEMzNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OUVEM0E3QUVCRjcxMUU3OUEyMDk0QzgyQzVFMEMzNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5RUQzQTc3RUJGNzExRTc5QTIwOTRDODJDNUUwQzM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5RUQzQTc4RUJGNzExRTc5QTIwOTRDODJDNUUwQzM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CE6PWQAAABpJREFUeNpi/P//PwMxgImBSDCqkDoKAQIMANUSAxFqvpFcAAAAAElFTkSuQmCC" alt=""/></div>');

/*
|--------------------------------------------------------------------------
| BEGINNING OF SCROLL FUNCTIONS
|--------------------------------------------------------------------------
*/

jQuery(document).ready(function( $ ) {
// calculate wipe heights for some mobile browsers to prevent bg re-scaling on scroll b/c address bar moving
	function calcVH() {
  var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  $(".heightfullscene").css("cssText", "height:" + vH + "px;");
}
calcVH();
window.addEventListener('onorientationchange', calcVH, true);
// trim superflous visual composer code	
$('.home .master-holder-bg-holder').remove();
$('.home .mk-main-wrapper-holder').remove();
// add bouncy arrow
	$('body').append('<div class="arrow jump animatedscroll iteration"></div>');
	 $('.header-logo a').append('<img src="http://superiorcloudsolutions.com/broadleafresults/wp-content/uploads/2018/01/logo-scroll.svg" class="widthzero " />');
	
/*
|--------------------------------------------------------------------------
| BEGINNING OF SCROLL ANIMATIONS
|--------------------------------------------------------------------------
*/
// init controller
var hgt = document.getElementsByTagName("BODY").scrollHeight;
var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: hgt , offset:450}});

/*
|--------------------------------------------------------------------------
| BEGINNING OF NAVIGATION ANIMATIONS
|--------------------------------------------------------------------------
*/
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

/*
|--------------------------------------------------------------------------
| BEGINNING OF DARK MENU ICON SWAP
|--------------------------------------------------------------------------
*/

new ScrollMagic.Scene({triggerElement: "#wipe3",triggerHook: 'onLeave', duration: "100%"})
.setClassToggle(".newiconcontainer","darkicons")
.addTo(controller2);	
new ScrollMagic.Scene({triggerElement: "#wipe3",triggerHook: 'onLeave', duration: "100%"})
.setClassToggle(".responsive-menu-button","darkiconsbg")
.addTo(controller2);	
	
new ScrollMagic.Scene({triggerElement: "#wipe6",triggerHook: 'onLeave', duration: "100%"})
.setClassToggle(".newiconcontainer","darkicons")
.addTo(controller2);	
new ScrollMagic.Scene({triggerElement: "#wipe6",triggerHook: 'onLeave', duration: "100%"})
.setClassToggle(".responsive-menu-button","darkiconsbg")
.addTo(controller2);	


/*
|--------------------------------------------------------------------------
| BEGINNING OF SCROLL ANIMATIONS SECTION WIPES
|--------------------------------------------------------------------------
*/
var containercontroller = new ScrollMagic.Controller();
	

	new ScrollMagic.Scene({
		triggerElement:"#wipe1",
		triggerHook:"onLeave"
	})
	.setPin("#wipe1")
	
	.addTo(containercontroller);
	
/*
|--------------------------------------------------------------------------
| BEGINNING OF WIPE #2
|--------------------------------------------------------------------------
*/
	
	var blackbars = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAMAAABXc8oyAAABvFBMVEUAAAAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAjHyAi64aDAAAAlHRSTlMAAQIDBAUGBwgJCgsMDg8QERITFBUWFxkbHB0eHyEiIyQlJicoKissLS4wMTM0NTc4OTo7PT5AQkNERkdISUpMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWdoaWtsbW5vcXN0dXZ3eHl6fH1+gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmR6Vu6gAAAsJJREFUeNp10+dWE2EUheE9TGghISC9I7333qWJFJESaTFAEJCOgJHeWyCEJHPDfud8zMLI8gqeH+/e0Aoxdh4SejGKQi0TM4eq8fYTKn3JcOwqkY/tqH+Ow+oaYrGIRF81eu9N6r4dGVoxhq/Cgk+tyNNyMHliCL8ZRKk/DXNIwNKWEv3UgiZPjLKxjARvLTofzEHOOaT6yzB4E244nkK2BhSReKBG3PWxuLCjWEj0xGJNiJ56tD9alB0H1AMbiyOXoSFnVuRr2Zg6FuIAyvypmHMq5odO1HoT0PwUrWySWIMuF4tp/lIWTyeRo+XBehocdjUM3PWiypdEYpS7DQ1CXF9F3DOJkcquA8m+CvTfGlUI8XwcBSQeGYwspmB+j8U6bzxWNpQYTyNaQaJJdc4KsQRD12HBQszVcjFB4hBK/OmwO1WTCyw2SjHeW4cOEueR4i8n0XA0jSxuAkwL8bYf5SRSjA4WV9cRK8Q2d5SyTU2qkE4ixZhgcVKI1ySmYZbEbtR4uQk2Vlj88GBW9kgsw8ANiSJGAcbFCi5HuAkC87PYwOLPBSQJsfcugpvgK+VnkfKzGGR2dbG4vClW0IwWagKz8kvmH9Dz58N6xmKxlgEbrYCa4E3+BRGjEn0kziBTK8KIbEKD4/wkyvzLFKOJxa0lXkG3yyQHx/mFSPlZ/Lavmu5JTMTiNjfBM4uUn0WR/5DEQoxeCHFMHCSLm4Dyk/ia300iH6RHrOC3XTbBS/7PMr8QXT2oJlEcxN2KRjoINYGeX6X8JOqXfC8v2Y8KbgKsyPytlD/gkumBl5T5WeT8JL5c8od+SUUcBCzK/Becn0T9ko7XS4LE75SfRP2SX+Ql8+QluQn+yi/E/17yBHJwev6P+iUtL5dc0y8Jmd8m85P4zyVT9Uu+o/wkcv7XS5bql8yRl4TtTX6+JIkBl/wDAw4qMufy8M8AAAAASUVORK5CYII=) repeat,';
	
	var bgoriginal = $('#wipe2').css("background-image");
	var bgnew = blackbars + bgoriginal;
	
	$('#wipe2').css("cssText", "background:" + bgnew + "center / cover !important") ;
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:"100%"
	})
	.setPin("#wipe2")
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement: "#wipe2",
		triggerHook:"onLeave",
	})
.setClassToggle("#wipe2 .animated","fadeIn")
.addTo(containercontroller);
	
	var orangeTween = TweenMax.to("#wipe2 .orangePanel",2,{className: "+=tweendisplay"});
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:200,
		offset:225
	})
	.setTween(orangeTween)
	.addTo(containercontroller);
	
	var bgdarkswipe = CSSRulePlugin.getRule("#wipe2:before");
	var bgds = TweenMax.to(bgdarkswipe, 1, {cssRule: { top: '0%' }},{autoAlpha:0,rotation:0.001, x:500,  ease:Linear.easeNone});
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe2",
		triggerHook:"onLeave",
		duration:25,
		offset:200
	})
	.setTween(bgds)
	
	.addTo(containercontroller);
	
/*
|--------------------------------------------------------------------------
| BEGINNING OF WIPE #3
|--------------------------------------------------------------------------
*/
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe3",
		triggerHook:"onLeave"
	})
	.setPin("#wipe3")
	
	.addTo(containercontroller);
	
/*
|--------------------------------------------------------------------------
| BEGINNING OF WIPE #4
|--------------------------------------------------------------------------
*/
	
	var bgoriginal2 = $('#wipe4').css("background-image");
	var bgnew2 = blackbars + bgoriginal2;
	$('#wipe4').css("cssText", "background:" + bgnew2 + "center / cover !important") ;
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe4",
		triggerHook:"onLeave",
		duration:"110%"
	})
	.setPin("#wipe4")
	
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement: "#wipe4",
		triggerHook:"onLeave",
	})
.setClassToggle("#wipe4 .animated","fadeIn")
.addTo(containercontroller);
	
	var orangeTween2 = TweenMax.to("#wipe4 .orangePanel",2,{className: "+=tweendisplay"});
	new ScrollMagic.Scene({
		triggerElement:"#wipe4",
		triggerHook:"onLeave",
		duration:200,
		offset:225
	})
	.setTween(orangeTween2)
	.addTo(containercontroller);
	
	var bgdarkswipe2 = CSSRulePlugin.getRule("#wipe4:before");
	var bgds2 = TweenMax.to(bgdarkswipe2, 1, {cssRule: { top: '0%' }},{autoAlpha:0,rotation:0.001, x:500,  ease:Linear.easeNone});
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe4",
		triggerHook:"onLeave",
		duration:25,
		offset:200
	})
	.setTween(bgds2)
	
	.addTo(containercontroller);
	
/*
|--------------------------------------------------------------------------
| BEGINNING OF WIPE #6
|--------------------------------------------------------------------------
*/
	new ScrollMagic.Scene({
		triggerElement:"#wipe6",
		triggerHook:"onLeave",
		duration:200
		
	})
	.setPin("#wipe6")
	
	.addTo(containercontroller);
/*
|--------------------------------------------------------------------------
| BEGINNING OF EXTRA WIPE EXAMPLES
|--------------------------------------------------------------------------
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe6",
		triggerHook:"onLeave"
	})
	.setPin("#wipe6")
	.addTo(containercontroller);
	
	new ScrollMagic.Scene({
		triggerElement:"#wipe7",
		triggerHook:"onLeave"
	})
	.setPin("#wipe7")
	.addTo(containercontroller);
*/
/*

|--------------------------------------------------------------------------
| BEGINNING OF SECTION WIPE NAVIGATION
|--------------------------------------------------------------------------
*/
$('body').append('<div id="aninav" class="animated"><ul><li id="wipelink1" class="reglink animated"><a href="#wipe1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" alt=""/></a></li><li id="wipelink2" class="reglink animated"><a href="#wipe2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" alt=""/></a></li><li id="wipelink3" class="reglink animated"><a href="#wipe3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" alt=""/></a></li><li id="wipelink4" class="reglink animated"><a href="#wipe4"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" alt=""/></a></li><li id="wipelink5" class="reglink animated"><a href="#wipe6"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" alt=""/></a></li><li class="nextlink"><a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=" alt=""/></a></li></ul></div>');

new ScrollMagic.Scene({triggerElement:"#top-of-page",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#aninav","hidden")
	.addTo(containercontroller);
	new ScrollMagic.Scene({triggerElement:"#top-of-page",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#aninav","fadeIn")
	.addTo(containercontroller);
new ScrollMagic.Scene({triggerElement:"#wipe2",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink2","active")
	.addTo(containercontroller);
new ScrollMagic.Scene({triggerElement:"#wipe2",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink2","fadeIn")
	.addTo(containercontroller);
new ScrollMagic.Scene({triggerElement:"#wipe3",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink3","active")
	.addTo(containercontroller);
	new ScrollMagic.Scene({triggerElement:"#wipe3",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink3","fadeIn")
	.addTo(containercontroller);
new ScrollMagic.Scene({triggerElement:"#wipe4",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink4","active")
	.addTo(containercontroller);
	new ScrollMagic.Scene({triggerElement:"#wipe4",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink4","fadeIn")
	.addTo(containercontroller);
new ScrollMagic.Scene({triggerElement:"#wipe6",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink5","active")
	.addTo(containercontroller);
	new ScrollMagic.Scene({triggerElement:"#wipe6",triggerHook:"onLeave",duration:"100%"})
	.setClassToggle("#wipelink5","fadeIn")
	.addTo(containercontroller);

	
	
// change behaviour of controller to animate scroll instead of jump
	containercontroller.scrollTo(function (newposition) {
		TweenMax.to(window, .5, {scrollTo: {y: newposition}});
	});

	//  bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			containercontroller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});
	
})

