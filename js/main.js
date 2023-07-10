var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  // freemode: true,
  loop: true,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".sec02 .swiper-button-next",
    prevEl: ".sec02 .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 60,
    },
  },
});
var swiper2 = new Swiper(".location", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,
  navigation: {
    nextEl: ".sec03 .swiper-button-next",
    prevEl: ".sec03 .swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 10,
    },
  },
});