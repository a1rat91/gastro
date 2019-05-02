$(document).ready(function () {

	window.globalPopup = new Popup();
	
	$('#js-hamburger').click(function () {
		
		$(this).toggleClass('active');
		$('#js-menu').toggleClass('active');
	});
	
	
	
	var mainSwiper = new Swiper('.js-main-slider .swiper-container', {
		speed: 600,
		slidesPerView: 1,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.js-main-slider .swiper-pagination',
			type: 'fraction',
		},
		navigation: {
			nextEl: '.js-main-slider-next',
			prevEl: '.js-main-slider-prev',
		}
	});
	
	var tabsMenuSwiper = new Swiper('.js-tabs-menu-slider', {
		// slidesPerView: 'auto',
		slidesPerView: 6,
		slidesPerGroup: 6,
		speed: 800,
		spaceBetween: 30,
		navigation: {
			nextEl: '.js-tabs-menu-next',
			prevEl: '.js-tabs-menu-prev',
		}
	});

	$("[type=tel]").inputmask("(999) 999-99-99");
	
	function circles() {
		var c1 = $('.all.circle');
		var c2 = $('.ekat.circle');
		
		c1.circleProgress({
			startAngle: -Math.PI / 4 * 3,
			size: 137,
			value: 0,
			lineCap: 'round',
			fill: {color: '#B4D239'}
		});
		
		c2.circleProgress({
			startAngle: -Math.PI / 4 * 3,
			size: 137,
			value: 0,
			lineCap: 'round',
			fill: {color: '#B4D239'}
		});
		
		// Let's emulate dynamic value update
		setTimeout(function() { c1.circleProgress('value', 0.3); }, 500);
		setTimeout(function() { c2.circleProgress('value', 0.5); }, 500);
	}
	circles();
	
	new Tabs({
		calcbackFunc: function () {
			circles();
		}
	});
	
	// Прибивка адаптивного футера к низу
	(function (footerSelector, wrapperSelector) {

		var footer = document.querySelector(footerSelector);
		var wrapper = document.querySelector(wrapperSelector);
		var height;
		var setSize;

		if (!wrapper || !footer) {
			return false;
		}

		setSize = function () {

			height = footer.offsetHeight;

			wrapper.style.paddingBottom = height + 'px';
			footer.style.marginTop = (height * (-1)) + 'px';

		}

		setSize();

		window.addEventListener('resize', setSize, false);

	})('#js-footer', '#js-wrapper');

});
