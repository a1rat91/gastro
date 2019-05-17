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
	
	(function () {
		
		var mainSection = document.querySelector('#js-main-section'),
			winH = window.document.documentElement.clientHeight - 50;
		
		console.log(winH);
		
		var a = document.querySelector('#js-sticky-btn'),
			b = null,
			P; // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
		
		var scrollPos = 0;
		$(window).scroll(function(){
			var st = $(this).scrollTop();
			if (st > scrollPos){
				P = winH + 50; //down
			} else {
				P = winH; //up
			}
			scrollPos = st;
		});
		
		window.addEventListener('scroll', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		
		function Ascroll() {
			if (b == null) {
				var Sa = getComputedStyle(a, ''), s = '';
				for (var i = 0; i < Sa.length; i++) {
					if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
						s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
					}
				}
				b = document.createElement('div');
				b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
				a.insertBefore(b, a.firstChild);
				var l = a.childNodes.length;
				for (var i = 1; i < l; i++) {
					b.appendChild(a.childNodes[1]);
				}
				a.style.height = b.getBoundingClientRect().height + 'px';
				a.style.padding = '0';
				a.style.border = '0';
			}
			var Ra = a.getBoundingClientRect(),
				R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#js-indicators').getBoundingClientRect().top + 10);
			// селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
			if ((Ra.top - P) <= 0) {
				if ((Ra.top - P) <= R) {
					b.className = 'stop';
					b.style.top = -R + 'px';
				} else {
					b.className = 'sticky';
					b.style.top = P + 'px';
				}
			} else {
				b.className = '';
				b.style.top = '';
			}
			window.addEventListener('resize', function () {
				a.children[0].style.width = getComputedStyle(a, '').width;
				winH = window.document.documentElement.clientHeight - 50;
			}, false);
		}
	})();
	
});
