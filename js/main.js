//Mobile Menu Open 
$(document).ready(function() {
	$('.nav-panel-mobile #toggle').click(function() {
		$(this).toggleClass('menu_active');
		$('.nav-panel-mobile #overlay').toggleClass('open');
	});
});

$(document).ready(function() {
//Navigation scroll on click
var sections = $('section')
	, nav = $('nav')
	, nav_height = $('.nav-panel').outerHeight();

function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.home') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - (nav_height - 10);
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}
//Function to limit scroll calls
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
	
var myEfficientFn = debounce(function() {
	// All the taxing stuff you do
		$(window).on('mousewheel', function(){
		//code that will only fire on manual scroll input
			//$(window).on('scroll', function () {
			var cur_pos = $(this).scrollTop();
			sections.each(function() {
				var top = $(this).offset().top - (nav_height + 300),
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('li').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('active');  
				}	
			});
			//$(window).unbind('scroll'); 	  
		});
	
}, 500);	
	
window.addEventListener('scroll', myEfficientFn);
	
//Update Active Menu Item and scroll to section 
jQuery(document).ready(function() {
				
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass("fly_out")) {
				
				$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
				})
			
				$('.nav-btn:nth-of-type(6)').addClass('active');
				scroll_to($(this), nav_height);
			}
		
		else if ($(this).hasClass("os-arrow")) {
				
				$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
				})
			
				$('.nav-btn:nth-of-type(3)').addClass('active');
				scroll_to($(this), nav_height);
			}
		else if ($(this).hasClass("ww-arrow")) {
				
				$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
				})
			
				$('.nav-btn:nth-of-type(4)').addClass('active');
				scroll_to($(this), nav_height);
			}
		else if ($(this).hasClass("t-arrow")) {
				
				$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
				})
			
				$('.nav-btn:nth-of-type(5)').addClass('active');
				scroll_to($(this), nav_height);
			}
		else if ($(this).hasClass("reg-arrow")) {
				
				$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
				})
			
				$('.nav-btn:nth-of-type(6)').addClass('active');
				scroll_to($(this), nav_height);
			}
		
		else {
			
				if ($(window).width() < 1025) {
					$('#overlay').removeClass('open');
					$('#toggle').removeClass('menu_active');
					
					$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
					})
			
					$(this).parent().addClass('active');
					scroll_to($(this), (nav_height - 100));
				}
			
				else {
					$('a.scroll-link').each(function () {
					$(this).parent().removeClass('active');
					})
			
					$(this).parent().addClass('active');
					scroll_to($(this), nav_height);
				}
			}
		});
});
});
//On window scroll change navigation bar background class for color
$(function() {
	if ($(window).width() > 768) {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 650) {
				$('.nav-panel').removeClass('navbar-no-bg');
			} 
			else if (scroll <= 650) {
				$('.nav-panel').addClass('navbar-no-bg');
			}
		});
	}
});    	

//Our Story H1 slide up 
$(function() {
	var ourstory = $("OurStory > h1");	
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 5) {
			ourstory.addClass("slide-in-bottom-small");
			$('.tl-item:nth-of-type(1)').addClass("delay200 slide-in-left");
			$('.tl-item:nth-of-type(2)').addClass("delay300 slide-in-left");
			$('.tl-item:nth-of-type(3)').addClass("delay400 slide-in-left");
			$('.tl-item:nth-of-type(4)').addClass("delay500 slide-in-left");
		} 
	});
});   	

//When Where sections slide in
//var waypoint = new Waypoint({
//  element: document.getElementById('WhenWhere'),
//  handler: function() {
//	$('.ceremony').addClass('slide-in-left');
//	$('.reception').addClass('slide-in-right');
//   },
//  offset: '25%'
//}) 

function loadFrame() {
	$('.reg_frame_content').attr("src", "registry.html");
	var container = $('.reg_frame_container');
	container.addClass("reg_frame_loaded");
	
}

var timer = setInterval(function() {
	if ($("#Registry h1").hasClass("slide-in-bottom-small")) {
		loadFrame();
		$('#loading').removeClass('spinner');
            // to run this block only once, simply uncomment the next line:
            clearInterval(timer);
        }

}, 250);



//On scroll to element do this script	
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
					
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function(){

//	$(window).scroll(function () {
//		if (isScrolledIntoView('.waypoint.registry')) {
//			loadFrame();
//		} 
//	});

	if(!isMobile) {
		$(window).scroll(function () {
			$('.waypoint.whenwhere').each(function () {
				if (isScrolledIntoView(this) === true) {          
					$(".WhenWhere-container h1").addClass("slide-in-bottom-small"); 
					$('.ceremony').addClass('slide-in-left');
					$('.reception').addClass('slide-in-right');
						$(function(){
							$(".ceremony img, .reception img").addClass("slide-in-bottom-small delay800");
							$(".ceremony h3, .reception h3").addClass("slide-in-bottom-small delay1000");
							$(".ceremony p, .reception p").addClass("slide-in-bottom-small delay1200");
							$("#clockdiv").addClass("slide-in-top delay1200");
						});
				}
			});

			$('.waypoint.travel').each(function () {
				if (isScrolledIntoView(this) === true) {          
					$(".Travel-container h1").addClass("slide-in-bottom-small");
					$(".hotels").addClass("slide-in-bottom delay800");
						$(function(){
							$("p.hotel-intro").addClass("slide-in-bottom-small delay1000");
							$(".hotels img").addClass("slide-in-bottom-small delay1200");
							$(".hotels .row h3:nth-of-type(1)").addClass("slide-in-bottom-small delay1200");
							$(".hotels .row p:nth-of-type(1)").addClass("slide-in-bottom-small delay1500");
							$(".hotels .row p:nth-of-type(2)").addClass("slide-in-bottom-small delay1800");
							$("p.attire").addClass("slide-in-bottom-small delay2000");
//							$(".hotels h3:nth-of-type(2)").addClass("slide-in-bottom-small delay1200");
//							$(".hotels p:nth-of-type(3)").addClass("slide-in-bottom-small delay1400");
//							$(".hotels p:nth-of-type(4)").addClass("slide-in-bottom-small delay1400");
						});
					
				}
			});

			$('.waypoint.registry').each(function () {
				if (isScrolledIntoView(this) === true) {          
					$(".Registry-container h1").addClass("slide-in-bottom-small");
					$(".registry_content").addClass("slide-in-bottom delay800");
				}
			});

			$('.waypoint.rsvp').each(function () {
				if (isScrolledIntoView(this) === true) {          
					$(".RSVP-container h1").addClass("slide-in-bottom-small");
				}
			});	

			$('.waypoint.photos').each(function () {
				if (isScrolledIntoView(this) === true) {          
					$(".Photos-container h1").addClass("slide-in-bottom-small");
				}
			});		
		});
	}
});	



	

//$(window).scroll(function () {
//
//		if (isScrolledIntoView('.waypoint.registry') === true) {          
//			loadFrame();
//			}
//	});




//timeline slide in script	
//$(function(){
//	window.sr = ScrollReveal();
//	
//	if ($(window).width() < 768) {
////		if ($('.timeline-content').hasClass('js--fadeInLeft')) {
////			$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
////		}
////		 sr.reveal('.js--fadeInRight', {
////			 origin: 'right',
////			 distance: '300px',
////			 easing: 'ease-in-out',
////			 delay: 600,
////			 duration: 800,
////	 	});
//
//		var waypoints = new Waypoint({
//			element: document.getElementById('end-home'),
//			handler: function() {
//				$(".timeline-item-1").addClass("slide-in-right");  
//				$(".timeline-item-4").addClass("slide-in-right delay1000");
//				$(".timeline-item-5").addClass("slide-in-right delay1000");
//				$(".timeline-item-5").addClass("slide-in-right delay2000");  
//		}
//		}) 
//	} 
//	
//	else {
//		sr.reveal('.js--fadeInLeft', {
//			origin: 'left',
//			distance: '300px',
//			easing: 'ease-in-out',
//			delay: 600,
//			duration: 800,
//		});
//		sr.reveal('.js--fadeInRight', {
//			origin: 'right',
//			distance: '300px',
//			easing: 'ease-in-out',
//			delay: 600,
//			duration: 800,
//		});
//	}
//});
//	


//Photos modal js
// Open the Modal
//function openModal() {
//  document.getElementById("photo_modal").style.display = "block";
//}
//// Close the Modal
//function closeModal() {
//	document.getElementById("photo_modal").style.display = "none";
//}
//var slideIndex = 1;
//showSlides(slideIndex);
//// Next/previous controls
//function plusSlides(n) {
//	showSlides(slideIndex += n);
//}
//// Thumbnail image controls
//function currentSlide(n) {
//	showSlides(slideIndex = n);
// }
//function showSlides(n) {
//	var i;
//	var slides = document.getElementsByClassName("slide");
//	if (n > slides.length) {slideIndex = 1}
//	if (n < 1) {slideIndex = slides.length}
//	for (i = 0; i < slides.length; i++) {
//		slides[i].style.display = "none";
//	}
////          for (i = 0; i < dots.length; i++) {
////            dots[i].className = dots[i].className.replace(" active_photo", "");
////          }
//    slides[slideIndex-1].style.display = "block";
////          dots[slideIndex-1].className += " active_photo";
//}    
