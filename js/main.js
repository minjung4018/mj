var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 60,
  // freemode: true,
  loop: true,
  slidesPerGroup: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".location", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
  navigation: {
    nextEl: ".sec03 .swiper-button-next",
    prevEl: ".sec03 .swiper-button-prev",
  },
});