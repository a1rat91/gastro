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
		} else if($(this).attr('href') == '#js-platforms-tabs-2') {
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
