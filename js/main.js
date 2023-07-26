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
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 60,
    },
    1100: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 60,
    },
  },
});
