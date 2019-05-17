$(document).ready(function () {
	
	window.globalPopup = new Popup();
	
	$('#js-hamburger').click(function () {
		
		$(this).toggleClass('active');
		$('.js-mobile-menu').toggleClass('active');
		
		$('html, body').toggleClass('body-fixed')
	});
	
	$(document).on('click', '[data-ajax]', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$.get(this.getAttribute('data-url'), function (response) {
			globalPopup.html(response).show();
		});
	});
	
	var mainSwiper = new Swiper('.js-main-slider .swiper-container', {
		speed: 1500,
		slidesPerView: 1,
		parallax: true,
		autoplay: {
			delay: 200000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
			
			
		},
		navigation: {
			nextEl: '.js-main-slider-next',
			prevEl: '.js-main-slider-prev',
		},
		breakpoints: {
			
			992: {
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets'
					
					
				},
			}
		}
	});
	
	var stickyBtn = $('#js-sticky-btn'),
		mainPage = $('#js-main-section'),
		mainPageH = mainPage.height(),
		stickyBtnHeight = stickyBtn.height(),
		finalSection = $('#js-indicators'),
		btnOffsetTop = stickyBtn.offset().top,
		target = finalSection.offset().top - 110;
	
	$('.test').css('top', finalSection.offset().top - 110);
	console.log(stickyBtnHeight, 'stickyBtnHeight');
	
	$(document).on('scroll', function () {
		var documentScroll = $(this).scrollTop(),
			documentScrollBottom = documentScroll + mainPageH + stickyBtnHeight + 15;
		
		console.log(documentScroll, 'documentScroll');
		console.log(btnOffsetTop, 'btnOffsetTop');
		console.log(documentScrollBottom, 'documentScrollBottom');
		console.log(target, 'target');
		
		
		
		// if (documentScrollBottom > mainPageH + 180) {
		if (btnOffsetTop < documentScrollBottom && documentScrollBottom < target - 200) {
			stickyBtn.addClass('sticky');
			mainPage.addClass('sticky');
			stickyBtn.removeClass('sticky-end');
			mainPage.removeClass('sticky-end');
		} else if (documentScrollBottom >= target){
			console.log('sticky-end');
			stickyBtn.removeClass('sticky');
			mainPage.removeClass('sticky');
			stickyBtn.addClass('sticky-end');
			mainPage.addClass('sticky-end');
			$('.sticky-end').css('top', target - 200 + 'px');
		}else {
			stickyBtn.removeClass('sticky');
			mainPage.removeClass('sticky');
			stickyBtn.removeClass('sticky-end');
			mainPage.removeClass('sticky-end');
		}
		
		// if (documentScroll > stickyBtnPos) {
		//
		// 	stickyBtn.addClass('fixed');
		// 	stickyBtn.css('top', stickyBtnH);
		// } else {
		//
		// 	stickyBtn.removeClass('fixed');
		// 	stickyBtn.css('top', stickyBtnPos + menuH);
		// }
	});
	
	var tabsMenuSwiper = new Swiper('.js-tabs-menu-slider', {
		slidesPerView: 5,
		slidesPerGroup: 1,
		speed: 800,
		spaceBetween: 30,
		navigation: {
			nextEl: '.js-tabs-menu-next',
			prevEl: '.js-tabs-menu-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 34
			}
		}
	});
	
	// (function () {
	// 	var mainPageH = $('#js-main-section').height();
	// 	var stickyBtn = $('#js-sticky-btn');
	//
	// 		$(document).on('scroll', function () {
	//
	// 			var stickyBtnTop = stickyBtn.offset().top,
	// 				documentScroll = $(this).scrollTop() + stickyBtnTop;
	//
	// 			console.log(stickyBtnTop, 'btn offset top');
	// 			console.log(documentScroll, 'document scroll');
	//
	// 			if (documentScroll < stickyBtnTop) {
	//
	// 				stickyBtn.addClass('fixed');
	// 			}
	// 		});
	// })();
	
	
	$("[type=tel]").inputmask("(999) 999-99-99");
	
	
	circles();
	
	new Tabs({
		calcbackFunc: function () {
			circles();
		}
	});
	
	var tooltip = new Tooltip('tooltip');
	
	$(".js-anim-scroll").click(function (e) {
		e.preventDefault();
		
		var offset = parseInt(this.getAttribute('data-offset')) || 150;
		
		var top = $(this.getAttribute("href")).offset().top - offset;
		
		$("html, body").animate({scrollTop: top + "px"});
		
		if ($(this).attr('href') == '#js-platforms-tabs-1') {
			$('.platforms__tabs .tabs-menu').children()[0].click();
		} else if ($(this).attr('href') == '#js-platforms-tabs-2') {
			$('.platforms__tabs .tabs-menu').children()[1].click();
		} else if ($(this).attr('href') == '#js-platforms-tabs-3') {
			$('.platforms__tabs .tabs-menu').children()[2].click();
		} else if ($(this).attr('href') == '#js-platforms-tabs-4') {
			$('.platforms__tabs .tabs-menu').children()[3].click();
		} else if ($(this).attr('href') == '#js-platforms-tabs-5') {
			$('.platforms__tabs .tabs-menu').children()[4].click();
		} else if ($(this).attr('href') == '#js-platforms-tabs-6') {
			$('.platforms__tabs .tabs-menu').children()[5].click();
		}
		
		return false;
		
	});
	
});
