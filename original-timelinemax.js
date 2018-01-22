var containercontroller = new ScrollMagic.Controller();
	//movement of panels
	var wipeAnimation = new TimelineMax()
	.fromTo(".wipe1",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	.fromTo(".wipe2",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	.fromTo(".wipe3",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	.fromTo(".wipe4",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	.fromTo(".wipe5",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	.fromTo(".wipe6",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	.fromTo(".wipe7",1,{y: "100%"},{y: "0%", ease:Linear.easeNone})
	;
	//scenes and links
	new ScrollMagic.Scene({
		triggerElement:"#theme-page",
		triggerHook:"onLeave",
		duration:"100%"
	})
	.setPin("#theme-page")
	.setTween(wipeAnimation)
	.addIndicators()
	.addTo(containercontroller);