var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop:true,
  centeredSlides : true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    400:{
      slidesPerView: 1.3,
      spaceBetween: 10,
      loop:true,
      centeredSlides : true,
    },
    768:{
      slidesPerView: 1.2,
      spaceBetween: 15,
      loop:true,
      centeredSlides : true,
    },
    1024:{
      slidesPerView: 1.5,
      spaceBetween: 15,
      loop:true,
      centeredSlides : true,
    },
  }
});