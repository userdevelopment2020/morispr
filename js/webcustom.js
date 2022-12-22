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

// Animation
AOS.init();