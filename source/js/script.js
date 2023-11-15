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

///////////////////////

const tabsBtn = document.querySelectorAll(".how-content__tabs-nav-btn");
const tabsItems = document.querySelectorAll(".how-content__tabs-content-item");

tabsBtn.forEach(onTabClick); 

function onTabClick(item) {
  item.addEventListener("click", function() {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if( ! currentBtn.classList.contains('active') ) {
      tabsBtn.forEach(function(item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function(item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.how-content__tabs-nav-btn').click();

////////////////////////////////

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

/////////////////////////////////

// let outer2 = document.querySelector(".result-outer");
// let content2 = outer2.querySelector('.result-loop__content');

// repeatContent(content2, outer2.offsetWidth);

// let el = outer2.querySelector('.result-loop');
// el.innerHTML = el.innerHTML + el.innerHTML;

// function repeatContent(el, till) {
//     let html = el.innerHTML;
//     let counter = 0; 
    
//     while (el.offsetWidth < till && counter < 100) {
//         el.innerHTML += html;
//         counter += 1;
//     }
// }