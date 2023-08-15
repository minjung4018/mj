var swiper = new Swiper(".mainslide", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".recomm", {
    slidesPerView: 1,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".sec02 .swiper-button-next",
        prevEl: ".sec02 .swiper-button-prev",
    },
    breakpoints: {
        466: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },
    },
});
var swiper3 = new Swiper(".traveltext", {
    loop: true,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    // effect: "fade",
    cssMode: true,
});
var swiper4 = new Swiper(".travel", {
    loop: true,
    navigation: {
        nextEl: ".sec05 .swiper-button-next",
        prevEl: ".sec05 .swiper-button-prev",
    },
    thumbs: {
        swiper: swiper3,
    },
});
let api = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=129&appid=38d9c92c8bdbd2fe5a4e473e1986f44f&units=metric';
fetch(api)
    .then((response) => response.json())
    .then(function (result) {
        let icon = `<img src="img/ulsan/${result.weather[0].icon}.svg" alt="${result.weather[0].description}">`;
        let temp = result.main.temp.toFixed(1);
        document.querySelector('.weather').innerHTML = icon
        document.querySelector('.temp').append(`${temp}`);
    });