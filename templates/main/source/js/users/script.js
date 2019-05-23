$(document).ready(function () {
    /* ========================================
        Global init clientWidth variable
    ======================================== */
    var clientWidth = document.documentElement.clientWidth;

    /* ========================================
        Popup
    ======================================== */
    window.globalPopup = new Popup();

    $(document).on('click', '[data-ajax]', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $.get(this.getAttribute('data-url'), function (response) {
            globalPopup.html(response).show();
        });
    });
    /* ========================================
        Mobile menu
    ======================================== */
    $('#js-hamburger').click(function () {

        $(this).toggleClass('active');
        $('.js-mobile-menu').toggleClass('active');
        $('html, body').toggleClass('body-fixed')
    });

    /* ========================================
        Main section Swiper
    ======================================== */
    function mainSwiper() {
        var mainSwiper = new Swiper('.js-main-slider .swiper-container', {
            speed: 1500,
            slidesPerView: 1,
            parallax: true,
            autoResize: false,
            resizeReInit: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            navigation: {
                nextEl: '.js-main-slider-next',
                prevEl: '.js-main-slider-prev'
            },
            breakpoints: {

                992: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    }
                }
            }
        });
    }

    mainSwiper();

    /* ========================================
        Tabs Swiper
    ======================================== */
    function tabsSwiper() {
        if (clientWidth > 767) {
            var tabsMenuSwiper = new Swiper('.js-tabs-menu-slider', {
                slidesPerView: 5,
                slidesPerGroup: 1,
                speed: 800,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.js-tabs-menu-next',
                    prevEl: '.js-tabs-menu-prev'
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
        }
    }

    tabsSwiper();

    /* ========================================
        Phone mask
    ======================================== */

    $("[type=tel]").inputmask("(999) 999-99-99");

    /* ========================================
        All circles
    ======================================== */
    circles();

    /* ========================================
        Charts animation Init
    ======================================== */
    function chartsInit() {
        // debugger
        $('.indicators-charts__chart').addClass('active');
        setTimeout(function () {
            $('.indicators-charts__chart').removeClass('active');
        }, 1500);
    }

    chartsInit();

    /* ========================================
        Tabs + refresh circles
    ======================================== */
    new Tabs({
        calcbackFunc: function () {
            circles();
            chartsInit();
        }
    });

    /* ========================================
        Tooltip
    ======================================== */
    var tooltip = new Tooltip('tooltip');

    /* ========================================
    Smoth scroll to section
    ======================================== */
    $(".js-anim-scroll").click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var offset = parseInt(this.getAttribute('data-offset')) || 90;

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

        $('#js-hamburger.active').click();

        return false;

    });

    /*=========================================
        Fixed btn
    ===========================================*/
    if (clientWidth < 768) {
        var fixedBtn = $('#js-sticky-btn');
        var startTarget = $('#js-about').offset().top + 200;
        var finishTarget = $('#js-indicators').offset().top - 20;

        $(document).on("scroll", function () {

            var windowBottom = $(document).scrollTop() + $(window).height();
            if (finishTarget <= windowBottom || windowBottom <= startTarget) {
                fixedBtn.addClass('hidden');
            } else {
                fixedBtn.removeClass('hidden');
            }
        });
    }

    /*=========================================
        Relax.js
    ===========================================*/
    if (clientWidth > 992) {
        var rellax = new Rellax('.js-rellax');
    }

    /* ========================================
    Cool animation with ScrollMagic and GSAP
    ===========================================*/

    // Map pin animate
    var mapPinAnimate = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true});

    mapPinAnimate
        .fromTo('.map-pin', 1,
            {delay: 0, yPercent﻿: -5, ease: Linear.easeInOut},
            {yPercent﻿: -25, ease: Linear.easeInOut});

    // About section animate
    var controller = new ScrollMagic.Controller();
    var animateIn = new TimelineMax();

    animateIn
        .to('.about__shadow', 0.5, {opacity: 1, ease: Linear.easeIn});

    var scene = new ScrollMagic.Scene({
        triggerElement: "#js-about"
    })
        .setClassToggle(".about__title", "active") // add class toggle
        // .addIndicators()
        .setTween(animateIn).addTo(controller);

    // Indicators section animate
    var indicatorsController = new ScrollMagic.Controller();
    var indicatorsAnimation = new TimelineMax();

    var indicatordScene = new ScrollMagic.Scene({
        triggerElement: ".indicators__row"
    })
        .on('start', function () {
            circles();
            chartsInit();
        })
        // .setClassToggle(".indicators-charts__chart", "active") // add class toggle
        // .addIndicators()
        .setTween(indicatorsAnimation).addTo(indicatorsController);

    indicatordScene.reverse(false);

    /* ========================================
        Tooltip
    ======================================== */
    var indicatorItem = $('.indicators-charts__row'),
        indicatorVal = $('.indicators-charts__val');

    indicatorItem.each(function () {
        console.log($(this).find(indicatorVal.text))
    });

    /* ========================================
    Reinit on window resize
    ===========================================*/
    $(window).resize(function () {

        mainSwiper();
        tabsSwiper();
    });


});

