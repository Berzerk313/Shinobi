const mainBurger = document.querySelector('.burger');
if (mainBurger) {
  const mainBurgerMenu = document.querySelector('.burger-menu');
  const closeBurgerMenu = document.querySelector('.burger-menu__close-img');
  mainBurger.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    mainBurger.classList.toggle('active');
    mainBurgerMenu.classList.toggle('active');
  });
  closeBurgerMenu.addEventListener("click", function (e) {
    mainBurgerMenu.classList.toggle('active');
    mainBurger.classList.toggle('active');
    mainBurgerMenu.classList.toggle('remove');
    mainBurgerMenu.classList.toggle('remove');
    document.body.classList.toggle('lock');
  });
}

// ///////////////////////

const tabsBtn = document.querySelectorAll(".how-content__tabs-nav-btn");
const tabsItems = document.querySelectorAll(".how-content__tabs-content-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.how-content__tabs-nav-btn').click();

// ////////////////////////////////

// let outer = document.querySelector(".shinobi-outer");
// let content = outer.querySelector('.shinobi-loop__content');


// repeatContent(content, outer.offsetWidth);

// let el = outer.querySelector('.shinobi-loop');
// el.innerHTML = el.innerHTML + el.innerHTML;

// function repeatContent(el, till) {
//     let html = el.innerHTML;
//     let counter = 0; 

//     while (el.offsetWidth < till && counter < 100) {
//         el.innerHTML += html;
//         counter += 1;
//     }
// }

// /////////////////////////////////

// let outer2 = document.querySelector(".result-outer");
// let content2 = outer2.querySelector('.result-loop__content');

// repeatContent(content2, outer2.offsetWidth);

// let el2 = outer2.querySelector('.result-loop');
// el2.innerHTML = el2.innerHTML + el2.innerHTML;

// function repeatContent(el2, till) {
//     let html = el2.innerHTML;
//     let counter = 0; 

//     while (el.offsetWidth < till && counter < 100) {
//         el.innerHTML += html;
//         counter += 1;
//     }
// }

/////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".back-test-swiper", {
    loop: true,
    centeredSlides: 'true',
    centerSlides: 'true',
    spaceBetween: 130,
    updateOnWindowResize: true,
    breakpoints: {
      1920: {
        slidesPerView: 2.333,
      },
      1400: {
        slidesPerView: 2.3,
      },
      1200: {
        slidesPerView: 2.2,
      },
      1000: {
        slidesPerView: 2,
      },
      651: {
        slidesPerView: 1.9,
        spaceBetween: 170,
      },
      600: {
        slidesPerView: 2.1,
        spaceBetween: 100,
      },
      500: {
        slidesPerView: 1.8,
        spaceBetween: 60,
      },
      480: {
        slidesPerView: 1.8,
        spaceBetween: 100,
      },
      450: {
        slidesPerView: 1.6,
        spaceBetween: 70,
      },
      420: {
        slidesPerView: 1.55,
        spaceBetween: 60,
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      320: {
        slidesPerView: 1.75,
        spaceBetween: 60,
      },
    },
  });
});

//////////////////////////////////////


/*  obeserver js  */
// const options = {
//   threshold: 0.5,
// };
// const callback = function (entries, observer) {
//   entries.forEach(entry => {
//     if(!entry.isIntersecting) {
//       console.log("bye");
//     } else {
//       console.log("hello");
//     }
//   });
// };
// const observer = new IntersectionObserver(callback);

// const video = document.querySelector(".video");
// observer.observe(video);

/////////////////////////////////////

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener("click", () => {
    accordionItem.classList.toggle("active");
  });
});
