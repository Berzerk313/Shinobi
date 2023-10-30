// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   let scrollPos = 10;
//   let header = document.querySelector('.main-header_fixed')
//   let header1 = document.querySelector('.main-burger-wrapper')
//   let mainHeaderNumber = document.querySelector('.main-header__number')


//   if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
//     header.classList.add('main-header_background');
//     header1.classList.add('main-header_background');
//     if (document.documentElement.clientWidth <= '1300'){
//       mainHeaderNumber.classList.add('main-header__number-scrollnone');
//     }
//   }
//   else {
//     header.classList.remove('main-header_background');
//     header1.classList.remove('main-header_background');
//     mainHeaderNumber.classList.remove('main-header__number-scrollnone');
// }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   let swiper = new Swiper(".main-swiper", {
//     spaceBetween: 30,
//     effect: "cards",
//     grabCursor: true,
//     centerSlides: 'true',
//     fade: 'true',
//     breakpoints: {
//       1920: {
//         slidesPerView: 1.1,
//         spaceBetween: 10,
//       },
//     },
//     navigation: {
//       nextEl: ".main-content-right__swipe-right",
//       prevEl: ".main-content-right__swipe-left",
//     },
//   });
// });
// // console.log(333);

// const mainBurger = document.querySelector('.main-burger');
// if (mainBurger) {
//   const mainBurgerMenu = document.querySelector('.main-burger-menu');
//   const closeBurgerMenu = document.querySelector('.main-burger-menu__close-img');
//   mainBurger.addEventListener("click", function (e) {
//     document.body.classList.toggle('lock');
//     mainBurger.classList.toggle('active');
//     mainBurgerMenu.classList.toggle('active');
//   });
//   closeBurgerMenu.addEventListener("click", function (e) {
//     mainBurgerMenu.classList.toggle('active');
//     mainBurger.classList.toggle('active');
//     mainBurgerMenu.classList.toggle('remove');
//     mainBurgerMenu.classList.toggle('remove');
//     document.body.classList.toggle('lock');
//   });
// }

// document.addEventListener('DOMContentLoaded', function () {
//   let swiper = new Swiper(".productions-swiper", {
//     spaceBetween: 0,
//     centerSlides: 'true',
//     fade: 'true',
//     loop: true,
//     breakpoints: {
//       1920: {
//         slidesPerView: 4,
//         spaceBetween: 0,
//       },
//       1600: {
//         slidesPerView: 3,
//         spaceBetween: 0,
//       },
//       1440: {
//         slidesPerView: 2.5,
//         spaceBetween: 0,
//       },
//       1140: {
//         slidesPerView: 2.5,
//         spaceBetween: 0,
//       },
//       992:{
//         slidesPerView: 1.56,
//         spaceBetween: 0,
//       },
//       768:{
//         slidesPerView: 1.56,
//         spaceBetween: 0,
//       },
//       650:{
//         slidesPerView: 1.4,
//         spaceBetween: 0,
//       },
//       576:{
//         slidesPerView: 1.155,
//         spaceBetween: 0,
//       },
//       500:{
//         slidesPerView: 1,
//         spaceBetween: 0,
//       },
//     },
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let swiper = new Swiper(".partners-swiper-top", {
//     spaceBetween: 0,
//     centerSlides: 'true',
//     fade: 'true',
//     loop: true,
//     autoplay: {
//       delay: 2500,
//     },
//     breakpoints: {
//       1920: {
//         slidesPerView: 4,
//         spaceBetween: 30,
//       },
//       1450: {
//         slidesPerView: 3.8,
//         spaceBetween: 30,
//       },
//       1300: {
//         slidesPerView: 3.2,
//         spaceBetween: 30,
//       },
//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       992: {
//         slidesPerView: 2.53,
//         spaceBetween: 35,
//       },
//       820: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       768: {
//         slidesPerView: 2.53,
//         spaceBetween: 35,
//       },
//       576: {
//         slidesPerView: 2,
//         spaceBetween: 55,
//       },
//       375: {
//         slidesPerView: 1.2,
//         spaceBetween: 65,
//       },
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//     },
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let swiper = new Swiper(".partners-swiper-bottom", {
//     spaceBetween: 0,
//     centerSlides: 'true',
//     fade: 'true',
//     loop: true,
//     autoplay: {
//       delay: 2500,
//       reverseDirection: 'true',
//     },
//     breakpoints: {
//       1920: {
//         slidesPerView: 4,
//         spaceBetween: 30,
//       },
//       1450: {
//         slidesPerView: 3.8,
//         spaceBetween: 30,
//       },
//       1300: {
//         slidesPerView: 3.2,
//         spaceBetween: 30,
//       },
//       1200: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       992: {
//         slidesPerView: 2.53,
//         spaceBetween: 35,
//       },
//       820: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//       },
//       768: {
//         slidesPerView: 2.53,
//         spaceBetween: 35,
//       },
//       576: {
//         slidesPerView: 2,
//         spaceBetween: 55,
//       },
//       375: {
//         slidesPerView: 1.2,
//         spaceBetween: 65,
//       },
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//     },
//   });
// });

