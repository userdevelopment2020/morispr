// header js start
$(document).ready(function() {
    $("#openSearch").click(function() {
        $("#searchBox").toggleClass("opensearch_box");
    });
});

$(document).ready(function() {
    $("#closeSearch").click(function() {
        $("#searchBox").removeClass("opensearch_box");
    });
});

$(document).ready(function() {
    $("#closeCookies").click(function() {
        $("#CookiesBox").removeClass("opencookies_box");
    });
});
// header js end


// Swiper Slider
$(document).ready(function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        breakpoints: {
            767: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            300: {
                slidesPerView: 1.2,
                spaceBetween: 15,
            },
        },
    });
});

var screenwidth = $(window).width();
if ($(window).width() < 1025) {
    $("#navbar").find('.mega-menu').hide();
}



function closeMegaCountries() {
    jQuery('#globe').removeClass('active');
    $('body').removeClass('overflow-hidden');

    if ($(window).width() < 1025) {
        $('#header').removeClass('active-responsive-countries white');
    } else {
        jQuery('#globe-content').hide();
    }
}

function closeMenu() {
    jQuery('body').removeClass('overflow-hidden');
    jQuery('#header').removeClass('active-responsive-nav white');
    jQuery('#responsive-menu-hamburger').removeClass('active');
    jQuery('#sub-menu-wrapper').removeClass('show');
}

function closeMegaHotlinks() {
    jQuery('body').removeClass('overflow-hidden');
    jQuery('#mega').removeClass('active');
    jQuery('#header').removeClass('active-mega-nav white');

    if ($(window).width() > 1024) {
        jQuery('.hotlinks-megamenu').hide();
    } else {
        $('.responsive-grid').removeClass('active');
    }
}

$(document).ready(function() {
    $('#globe .inactive-countries-icon').on('click', function() {
        closeMegaHotlinks();
        closeMenu();

        $('#globe').addClass('active');
        $('body').addClass('overflow-hidden');

        if ($(window).width() > 1024) {
            $('#globe-content').show();
        } else {
            $('#header').addClass('active-responsive-countries white');
        }
    });

    $('#globe .active-countries-icon').on('click', function() {
        closeMegaCountries();
    });

    $('#lang-list li').on('click', function() {
        let langData = $(this).attr('lang-data');
        let selectedLabel = $('#selected-lang-label');
        selectedLabel.empty();
        selectedLabel.append(langData);
        $('#selected-lang-img').attr('src', `images/header-assets/${langData}.png`);
    });

    $('.inactive-hotlinks-megamenu-icon').on('click', function() {
        $('#mega').addClass('active');
        $('.hotlinks-megamenu').show();
        $('#header').addClass('active-mega-nav white');
        $('body').addClass('overflow-hidden');
    });

    $('.active-hotlinks-megamenu-icon').on('click', function() {
        closeMegaHotlinks();
    });

    $('.active-hotliniks-sm').on('click', function() {
        closeMegaCountries();
        closeMenu();
        $('.responsive-grid').toggleClass('active');
        $('#header').addClass('active-mega-nav white');
        $('body').addClass('overflow-hidden');
    });

    $('.inactive-hotliniks-sm').on('click', function() {
        closeMegaHotlinks();
    });

    $('.inactive-hotlinks-sm-icon').on('click', function() {
        closeMegaHotlinks();
        closeMegaCountries();

        $('#responsive-menu-hamburger').addClass('active');
        $('#header').toggleClass('active-responsive-nav white');
        $('body').toggleClass('overflow-hidden');
        $('#sub-menu-wrapper').removeClass('show');
        $('#navbar').show();
    });

    $('.active-hotlinks-sm-icon').on('click', function() {
        closeMenu();
    });

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        let header = $("#header");
        if (scroll > 73) {
            header.addClass("sticky-header");
        } else {
            header.removeClass("sticky-header");
        }
    });

    function getval() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();

        let dateElement = currentTime.toDateString();

        if (minutes < 10)
            minutes = "0" + minutes;

        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }
        var current_time = hours + ":" + minutes + " " + suffix;
        $('.digital-clock').text(current_time);
        $('.date-holder').text(dateElement);
    }

    getval();
    setInterval(getval, 1000);

    // responsive nav
    $(document).on('click', '.open_menu', function() {
        console.log("aassassd");

        if ($(window).width() < 1025) {
            // $(this).closest('.sub-nav').find('.mega-menu').hide();
            $(this).closest('.nav-bar').find('#sub-menu-wrapper').addClass('show');
            $('#sub-menu-wrapper').html($(this).closest('.sub-nav').find('.mega-menu').html());
        }


        //if ($(window).width() < 1025) {
        // let currentElement = $(this);
        // let sub_menu_wrapper = $('#sub-menu-wrapper');
        // sub_menu_wrapper.html(currentElement.find('.mega-menu').html());
        // sub_menu_wrapper.addClass('show');
        // currentElement.parents('.nav-bar').find('#navbar').hide();
        //}
    });

    $(document).on('click', '#sub-menu-wrapper .heading', function() {
        let sub_menu_wrapper = $('#sub-menu-wrapper');
        sub_menu_wrapper.empty();
        sub_menu_wrapper.removeClass('show');
        $('#navbar').fadeIn();
    });

    // inner content 
    $(document).on('click', '.menu-items .has-sub-content a', function(e) {
        console.log('has sub');
        $('#menu-banner').hide();
        let targetedEl = $('.sub-content');

        // let currentEl = $(this).parents('.has-sub-content');
        // let targetedEl = $('.sub-content');
        // console.log(currentEl);

        let windowWidth = $(window).width();

        $('.menu-items .has-sub-content').removeClass('active');

        if (windowWidth < 1025) {
            targetedEl.slideUp();
            $(this).parents('.has-sub-content').find('.sub-content').slideDown();
            $(this).parents('.has-sub-content').addClass('active');
        } else {
            targetedEl.hide();
            $(this).parents('.has-sub-content').find('.sub-content').show();
            $(this).parents('.has-sub-content').addClass('active');
        }
    });

    $(document).on('click', '.inactive-slide', function() {
        $(this).parents('.has-sub-content').removeClass('active');
        $(this).parents('.has-sub-content').find('.sub-content').slideUp();
    });

    // $('.language-dropdown').mouseover(function() {
    //     closeMegaCountries();
    //     closeMegaHotlinks();
    // });

    // $('#globe-content').on('mouseleave', function() {
    //     closeMegaCountries();
    // });

    // $('.hotlinks-megamenu').on('mouseleave', function() {
    //     closeMegaHotlinks();
    // });

});

// Animation
AOS.init();