//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
	
	var doc = document.documentElement;
	var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
	
	var uagent = navigator.userAgent.toLowerCase();
	if(uagent.search("android" || "iphone") > -1){
		if(top >= 556){
		
			
			$(".navbar-fixed-top").removeClass("navShadow");
			$(".navbar-fixed-top").addClass("navShadowFixed");
			 
		}else if($('#page-top > nav').hasClass('navShadowFixed')){
			$(".navbar-fixed-top").removeClass("navShadowFixed");
			$(".navbar-fixed-top").addClass("navShadow");
		}
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	}else{
		if(top >= 705){
			
			/*if(top == 776 || top ==35 || top == 800 || top == 0 || top == 1400){
				new WOW().init();
			}*/
			$(".navbar-fixed-top").removeClass("navShadow");
			$(".navbar-fixed-top").addClass("navShadowFixed");
			 
		}else if($('#page-top > nav').hasClass('navShadowFixed')){
			$(".navbar-fixed-top").removeClass("navShadowFixed");
			$(".navbar-fixed-top").addClass("navShadow");
		}
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	}
	
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
