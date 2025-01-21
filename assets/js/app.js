document.addEventListener('DOMContentLoaded', function () {

var mySwiperСhapter = new Swiper('.mySwiperСhapter', {
   /// loop: true, // Включение циклического пролистывания
     autoplay: { // Автопрокрутка
        delay: 5000,
        disableOnInteraction: false,
     },
    spaceBetween: 30,
    slideWidth: 250,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4, 
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});

var mySwiperBanners = new Swiper('.mySwiperBanners', {
    /// loop: true, // Включение циклического пролистывания
    autoplay: { // Автопрокрутка
        delay: 5000,
        disableOnInteraction: false,
     },
    spaceBetween: 66.6,
    //slideWidth: 250,
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4, 
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.5,
        },
        840: {
            slidesPerView: 3,
        },
        980: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});

})