$(function() {

    'use strict';

    // Side Bar
    $('.ui.right.sidebar').first().sidebar('attach events', '.menu-button button', 'show');
    $('.menu-button button').removeClass('disabled');

    //Active Class on side bar title
    $('.ui.sidebar .ui.accordion .title').on('click', function() {
        $(this).addClass('select');
        $('.ui.sidebar .ui.accordion .title').not($(this)).removeClass('select');
    });

    //Trigger Side Bar Accordio
    $('.ui.accordion').accordion();

    //Adjusting Fixed Menu on scroll
    var lastScrollTop = 30;
    $(window).on('scroll', function() {
        var currentscrollTop = $(this).scrollTop();
        if(currentscrollTop > lastScrollTop) {
            $('.cart-search-logo').addClass('fixed');
            $('.logo .text').addClass('fixed');
            //Adjusting Margin-top
            $('section.menu').addClass('fixed');
            $('.slider-ads').addClass('fixed');
            $('section.sections').addClass('fixed');
            $('section.product').addClass('fixed');
            $('section.vendors').addClass('fixed');
            $('section.vendor').addClass('fixed');
            $('section.login').addClass('fixed');
            $('section.register').addClass('fixed');
            $('section.reset-password').addClass('fixed');
            $('section.change-password').addClass('fixed');
        } else {
            $('.cart-search-logo').removeClass('fixed');
            $('.logo .text').removeClass('fixed');
            //Adjusting Margin-top
            $('section.menu').removeClass('fixed');
            $('.slider-ads').removeClass('fixed');
            $('section.sections').removeClass('fixed');
            $('section.product').removeClass('fixed');
            $('section.vendors').removeClass('fixed');
            $('section.vendor').removeClass('fixed');
            $('section.login').removeClass('fixed');
            $('section.register').removeClass('fixed');
            $('section.reset-password').removeClass('fixed');
            $('section.change-password').removeClass('fixed');
        }
        // lastScrollTop = currentscrollTop;
    });

    //Trigger Search Bar Select
    $('.search-bar #search-select').dropdown();

    //Show Search Bar When click on Search-icon
    $('.cart-search-logo .search-icon').on('click', function() {
        $('.cart-search-logo .search-bar').toggleClass('on');
    });

    //Trigger Slider
    $('.slider').slick({
        autoplay: true,
        prevArrow: '<i class="chevron right icon"></i>',
        nextArrow: '<i class="chevron left icon"></i><',
        dots: true,
        adaptiveHeight: true,
    });

    //Trigger Product Slider
    $('.product-slider').slick({
        autoplay: false,
        prevArrow: '<i class="chevron right icon"></i>',
        nextArrow: '<i class="chevron left icon"></i><',
        adaptiveHeight: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ],
    });

    // Initialize Tabs
    $('.tabular.menu .item').tab();

    //Form validation
    $('.ui.form').form({
        // inline : true,
        on: 'blur',
        fields: {
            name: {
                identifier: 'name',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your name'
                    }
                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a valid e-mail'
                    }
                ]
            },
            password: {
                identifier: 'password',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a password'
                    },
                    {
                        type   : 'minLength[6]',
                        prompt : 'Your password must be at least {ruleValue} characters'
                    }
                ]
            },
            checkbox: {
                identifier: 'checkbox',
                rules: [
                    {
                        type   : 'checked',
                        prompt : 'Please check the checkbox'
                    }
                ]
            },
            maxLength: {
                identifier  : 'maxLength',
                rules: [
                    {
                        type   : 'maxLength[300]',
                        prompt : 'Please enter at most 300 characters'
                    }
                ]
            },
        }
    });

    //Pages:-

    // Sections
    $('.sections .head .right.menu > div:last-child').on('click', function() {
        $('.sections .products .vertical-layout').addClass('on');
        $('.sections .products .horizontal-layout').removeClass('on');
    });

    $('.sections .head .right.menu > div:first-child').on('click', function() {
        $('.sections .products .horizontal-layout').addClass('on');
        $('.sections .products .vertical-layout').removeClass('on');
    });

    //Vendor
    // Sections
    $('section.vendor-products .head .right.menu > div:last-child').on('click', function() {
        $('section.vendor-products .products .vertical-layout').addClass('on');
        $('section.vendor-products .products .horizontal-layout').removeClass('on');
    });

    $('section.vendor-products .head .right.menu > div:first-child').on('click', function() {
        $('section.vendor-products .products .horizontal-layout').addClass('on');
        $('section.vendor-products .products .vertical-layout').removeClass('on');
    });

    //Product

    //Initiate Rate
    $('.ui.rating').rating();

    //Quantity Plus and Minus Buttons
    $('#quantity button').on('click', function() {

        var $button = $(this);
        var newVal = '';
        var oldVal = $('#pieces').val();

        if($button.hasClass('plus')) {
            newVal = parseFloat(oldVal) + 1;
        } else if($button.hasClass('minus')) {
            if(oldVal > 1) {
                newVal = parseFloat(oldVal) - 1;
            } else {
                newVal = 1;
            }
        }
        $('#pieces').val(newVal);
    });

    //State Dropdown
    $('.ui.dropdown').dropdown();


});
