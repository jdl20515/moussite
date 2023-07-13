$(function(){
	"use strict";

	$('.top_header').sticky({topSpacing:0});
	
	$("a[href^='#']").on('click' , function(e){
		var target = $(this).attr('href');
		var strip_text = target.slice(1);
		var go_to = $("div[id='"+ strip_text +"']");
		e.preventDefault();
		$('html , body').animate({
			scrollTop : go_to.offset().top - 100 , 
		});
	});
	
	//parallax options
	$('.layer , .apps_celebaretion, .apps_announcement , .apps_subscription').parallax();

	if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
		$('#ios-notice').removeClass('hidden');
		$('.parallax-container').height( $(window).height() * 0.5 | 0 );
	} else {
	$(window).on('resize', function(){
		var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
		$('.parallax-container').height(parallaxHeight);
	}).trigger('resize');
	}
	
	$(".apps_video").each(function() {
		$('.apps_video').YTPlayer({
			fitToBackground: true,
			videoId: $(this).data('videoid')
		});
	});
	
	$('.apps_screenshot_content').owlCarousel({
		items : 5,
		autoPlay: 3000,
		responsive:{
			600:{
			items:3
			}
		}
	});
	
	$( ".ac_data" ).each(function() {
		$('.ac_data:nth-of-type(1)').find('.ac_text').slideDown().parent().find('.fa').toggleClass('fa-plus');;
		$(this).on("click", function(){
			$(this).find('.ac_text').slideToggle().toggleClass('active_ac').parent().find('.fa').toggleClass('fa-minus');
			$(this).siblings().find('.ac_text').slideUp().parent().find('.fa').removeClass('fa-minus').addClass('fa-plus');
		});
	});

	var wow = new WOW(
	{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();

	$('.testimonial_item').owlCarousel({
		singleItem : true,
		autoPlay : true,
		pagination : false,
		navigation : true,
		navigationText: ["<i class='fa-angle-left fa testi_button_right'></i>",
		"<i class='fa-angle-right fa testi_button_right'></i>"]
	});
	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	$('.main_menu').slicknav({
		brand : $('#logo').html(),
		label : '',
		closedSymbol : '<i class="fa fa-angle-double-right"></i>',
		openedSymbol : '<i class="fa fa-angle-double-down"></i>'

	});
});
