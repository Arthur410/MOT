$(document).ready(function () {
	$(function () {
	let header = $(".header-menu");
	let intro = $(".header");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	 $(window).on("scroll resize load", function () {

		
		checkScroll(scrollPos,introH);
	 });

	 function checkScroll(scrollPos, introH) {
	 	if($(window).scrollTop() > intro.innerHeight() ) {
	 		header.addClass("fixed");
	 	} else {
	 		header.removeClass("fixed");
	 	}
	 }
	});

	$("nav a").mPageScroll2id();

	$('.slider').slick({
		autoplay:true,
		autoplaySpeed:5000,
		pauseOnHover:false,
		pauseOnFocus:false,
		dots:true,
	});

	$('.burger').on('click', function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
	});

})