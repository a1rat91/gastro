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
		slidesPerView: 5,
		slidesPerGroup: 1,
		speed: 800,
		spaceBetween: 30,
		navigation: {
			nextEl: '.js-tabs-menu-next',
			prevEl: '.js-tabs-menu-prev',
		}
	});

	$("[type=tel]").inputmask("(999) 999-99-99");
	
	function circleFillOpts(el, emptyFill, fill, val, delay) {
		$(el).circleProgress({
			startAngle: -Math.PI / 4 * 3,
			size: 137,
			value: 0,
			lineCap: 'round',
			emptyFill: emptyFill,
			fill: {color: fill}
		});
		setTimeout(function() { $(el).circleProgress('value', val); }, delay);
	}
	
	function circles() {
		
		/* =============================================================================================================
			Все города
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.all-month', '#E6EAF0', '#B4D239', 0.33, 500);// 33%
		circleFillOpts('.all-year', '#E6EAF0', '#B4D239', 0.40, 500);
		circleFillOpts('.all-sex', '#FEA32A', '#B4D239', 0.63, 500);
		
		
		/* =============================================================================================================
			Екатеринбург
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.ekat-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.ekat-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.ekat-sex', '#FEA32A', '#B4D239', 0.50, 500);
		
		
		/* =============================================================================================================
			Санкт-Петербург
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.spb-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.spb-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.spb-sex', '#FEA32A', '#B4D239', 0.50, 500);
		
		
		/* =============================================================================================================
			Новосибирск
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.novosib-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.novosib-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.novosib-sex', '#FEA32A', '#B4D239', 0.50, 500);
		
		
		/* =============================================================================================================
			Самара
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.samara-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.samara-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.samara-sex', '#FEA32A', '#B4D239', 0.50, 500);
		
		
		/* =============================================================================================================
			Нижний Новгород
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.nn-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.nn-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.nn-sex', '#FEA32A', '#B4D239', 0.50, 500);
		
		
		/* =============================================================================================================
			Пермь
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.perm-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.perm-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.perm-sex', '#FEA32A', '#B4D239', 0.50, 500);
		
		
		/* =============================================================================================================
			Уфа
			(класс элемента, цвет заливки пустой области, цвет заливки активной области, значение графика, время задержки)
=============================================================================================================*/
		circleFillOpts('.ufa-month', '#E6EAF0', '#B4D239', 0.33, 500);
		circleFillOpts('.ufa-year', '#E6EAF0', '#B4D239', 0.50, 500);
		circleFillOpts('.ufa-sex', '#FEA32A', '#B4D239', 0.50, 500);
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
