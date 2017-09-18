$(document).ready(function(){
	/*"hostName":"localhost",
	"hostDB":"id230935_weddingdb",
	"hostUser":"id230935_subbu",
	"hostPass":"143deepika143",*/
	// https://files.000webhost.com/?authenticated=0 357 X 557
	
	$('.slider-for1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav1'
	});
	
	
	$('.slider-nav1').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for1',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
	$('.slider-for2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav2'
	});
	$('.slider-nav2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for2',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
	
	
	$('.bigPic').click(function(e){
		//e.preventDefault();
	
	})
	$('.navbar-nav > li > a').click(function(e){
		new WOW().init();
	})
	$('.locationImg').click(function(e){
		e.stopPropagation();
		//window.open("https://www.google.co.in/maps/place/Thiruverkadu+Devi+Karumariamman+Temple/@13.0713003,80.1252963,15z/data=!4m5!3m4!1s0x0:0xbb94959ec615d333!8m2!3d13.0718856!4d80.1245574");
		console.log("locationImg clicked...");
		$('.locationScreen').fadeIn();
	})
	$('.locationImg.second').click(function(e){
		e.stopPropagation();
		//window.open("https://www.google.co.in/maps/place/Thiruverkadu+Devi+Karumariamman+Temple/@13.0713003,80.1252963,15z/data=!4m5!3m4!1s0x0:0xbb94959ec615d333!8m2!3d13.0718856!4d80.1245574");
		console.log("locationImg 2clicked...");
		var locPath = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.962250969959!2d80.19113211482333!3d13.101577990770695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52640caeba0bc7%3A0x49698987f8c3a437!2sVenkat+Hari+Mahal!5e0!3m2!1sen!2sin!4v1482068960118";
		
		$('div.locationScreen > iframe').attr("src", locPath);
		$('.locationScreen').fadeIn();
	})
	
	$('.event-tabs').click(function(){
		$('.locationScreen').fadeOut();
	});
	
	
	
	$('#submitButton').click(function(e){
		e.preventDefault();
		var name = $('#Name').val();	
		name = encodeURIComponent(name);
		//name = name.replace(/'/g, "%27");
		var detail = $('#Detail').val();
		detail = encodeURIComponent(detail);
		//detail = detail.replace(/'/g, "%27");
		var ans = $('#attendiesDetails').val();
		ans = encodeURIComponent(ans);
		//ans = ans.replace(/'/g, "%27");
		var guests = $('#guestDetails').val();
		guests = encodeURIComponent(guests);
		//guests = guests.replace(/'/g, "%27");
		var comments = $('#comments').val();
		comments = encodeURIComponent(comments);
		//comments = comments.replace(/'/g, "%27");
		var song = $('#song').val();
		song = encodeURIComponent(song);
		//song = song.replace(/'/g, "%27");
		var guestSide = $('#guestSide').val();
		guestSide = encodeURIComponent(guestSide);
		//guestSide = guestSide.replace(/'/g, "%27");
		
		
		//debugger;
		
		console.log("values:",name,detail,ans,guests,comments,song);
		console.log("guest:",guestSide);
		if (name == "" || detail == "" || ans == "" || guests == "" || comments == "" || song == "" || guestSide == ""){
			alert("please provide all details.");
		}else{
			
			$("#rsvp > div > p").css("visibility", "hidden");
			$("#frm").css("visibility", "hidden");
			$("#frm").hide();
			$("#submitLoad").show();
			if(uagent.search("android" || "iphone") > -1){
				$(window).scrollTop(6835);
			}
			new WOW().init();
			$.ajax({
				type: 'POST',
				url : "scripts/service.php",
				data: {"name":name,"details":detail,"answer":ans,"guests":guests,"comments":comments,"song":song,"guestSide":guestSide,"checkInTime":getCurrentTime,"hostName":config.hostName,"hostDB":config.hostDB,"hostUser":config.hostUser,"hostPass":config.hostPass},
				dataType    : 'application/x-www-form-urlencoded',
				success : function(data) {
					console.log("submitted..",data);
					
					if(data.a != 6){
						$('#rsvp > div > p').text("Thank you for your response!");
						$('#rsvp > div > p').css("visibility", "visible");
						$('#frm').hide();
						$("#submitLoad").hide();
						var uagent = navigator.userAgent.toLowerCase();
						if(uagent.search("android" || "iphone") > -1){
							$('#rsvp > div > p').css("margin", "188px 0px");
							$(window).scrollTop(6835);
						}else{
							$('#rsvp > div > p').css("margin", "219px 0px");
						}
					}else{
						alert("your data not submitted! please try again.");
						$("#rsvp > div > p").css("visibility", "hidden");
						$("#frm").show();
						$("#submitLoad").hide();
						new WOW().init();
					}
					
					
					
					
					new WOW().init();
				},
				error : function(xhr, err) {
					console.log("xhr",xhr,err);
					var response = JSON.parse(xhr.responseText);
					if(response.a == 1){
						$('#rsvp > div > p').text("Thank you for your response!");
						$('#rsvp > div > p').css("visibility", "visible");
						$('#frm').hide();
						$("#submitLoad").hide();
						var uagent = navigator.userAgent.toLowerCase();
						if(uagent.search("android" || "iphone") > -1){
							$('#rsvp > div > p').css("margin", "188px 0px");
							$(window).scrollTop(6835);
						}else{
							$('#rsvp > div > p').css("margin", "219px 0px");
						}
					}else{
						alert("your data not submitted! please try again.");
						$("#rsvp > div > p").css("visibility", "hidden");
						$("#frm").show();
						$("#submitLoad").hide();
						new WOW().init();
					}
				},
			});
			
		}
	})
	
	
	$('.form-control').blur(function(e){
		var value = $(e.target).val();
		//console.log("try:",$(e.target).attr('class'));
		if(value != ''){
			$(e.target).addClass("dirty");
		}else{
			$(e.target).removeClass("dirty");
		}
	})
	
	$('.navbar-toggle').click(function(e){
		$('#nav-head').css("visibility", "visible");
	})
	$('#nav-head > ul > li').click(function(e){
		$('.navbar-toggle').trigger("click");
	})
	
	/*$('ul.eventsList > li').click(function(e){
		alert("c");
		$(e.target).addClass("active");
		
	})*/
	
	$('.slider-nav1 > div > div > div').click(function(e){
		//alert("hi");
		$('#People > div > div:nth-child(2) > div.slider-for1.wow.bounceInLeft.slick-initialized.slick-slider > div > div > div.ReactFlipCard.ReactFlipCard--horizontal.ReactFlipCard--enabled.slick-slide.slick-current.slick-active > div > div.ReactFlipCard__Front > div').trigger("click");
		
	})
	
	var uagent = navigator.userAgent.toLowerCase();
	if(uagent.search("android" || "iphone") > -1){
		
	}
	
	$('fa fa-music').click(function(e){
		$('body > .media').trigger('click');
	});
	$('#events > div > div > div.event-title > ul > li:nth-child(2)').click(function(e){
		$('#event-tab2 > div > div.ceremony-details > div.cerevent-detail > div > ul').hide();
		$('#event-tab2 > div > div.ceremony-details > div.cerevent-detail > div > p').hide();
		$('#event-tab2 > div > div.event-venue.wow.bounceInRight > ul > li:nth-child(3)').hide();
	});
	
});

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

// ISTTime now represents the time in IST coordinates

var hoursIST = ISTTime.getHours();
var minutesIST = ISTTime.getMinutes();
var sec = ISTTime.getSeconds();
var d = new Date(),
month = '' + (d.getMonth() + 1),
day = '' + d.getDate(),
year = d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
if (sec <= 9 ) sec = '0' + sec;

var daysLeft = "";
var hoursLeft = "";
var monthsLeft = "";
var secLeft ="";

		
var formattedDate= year+"/"+month+"/"+day+" "+hoursIST + ":" + minutesIST + ":" + sec;
console.log("date:",formattedDate);
								$(function(){
                                    $('#future_date').countdowntimer({
                                        startDate : formattedDate,
                                        dateAndTime : config.counterTargetDate,
                                        size : "lg",
										regexpReplaceWith: "$1<sup>days</sup> / $2<sup>hours</sup> / $3<sup>minutes</sup> / $4<sup>seconds</sup>"
                                    });
                                });
new WOW().init();


var intViewportWidth = window.innerWidth;
console.log("intViewportWidth",intViewportWidth);

 
function getCurrentTime(){
	var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);

// ISTTime now represents the time in IST coordinates

var hoursIST = ISTTime.getHours();
var minutesIST = ISTTime.getMinutes();
var sec = ISTTime.getSeconds();
var d = new Date(),
month = '' + (d.getMonth() + 1),
day = '' + d.getDate(),
year = d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
if (sec <= 9 ) sec = '0' + sec;

var daysLeft = "";
var hoursLeft = "";
var monthsLeft = "";
var secLeft ="";

		
var formattedDate= year+"/"+month+"/"+day+" "+hoursIST + ":" + minutesIST + ":" + sec;
return formattedDate;
}
	
	
$(window).on("load", function() {
	$('#app').css('display','block');
	$('.page-load').css('display','none');
	$('#btn-play').css('display','block');
	new WOW().init();
});
	