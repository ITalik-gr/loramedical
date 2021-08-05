
const elems = document.querySelectorAll('.doctor-card__image');

[...elems].forEach(elem => elem.addEventListener('click', changeClass))


function changeClass(e) {
	this.querySelector('.doctor-card-info').classList.toggle('doctor-card-info__active');
};






let sidebarActiveOne = document.querySelectorAll('.sidebar-list__item-1')[0];
let sidebarActiveTwo = document.querySelectorAll('.sidebar-list__item-2')[0];
let sidebarActiveThree = document.querySelectorAll('.sidebar-list__item-3')[0];

let sidebarCloseOne = document.querySelectorAll('.sidebar-close')[0];
let sidebarCloseTwo = document.querySelectorAll('.sidebar-close')[1];
let sidebarCloseThree = document.querySelectorAll('.sidebar-close')[2];

let sidebarBodyOne = document.querySelectorAll('.sidebar-active-1')[0];
let sidebarBodyTwo = document.querySelectorAll('.sidebar-active-2')[0];
let sidebarBodyThree = document.querySelectorAll('.sidebar-active-3')[0];

let sidebarBlock = document.querySelectorAll('.sidebar-list')[0];
let sidebarBlock1 = document.querySelectorAll('.sidebar-list')[1];

sidebarActiveOne.addEventListener('click', function() {
  sidebarBodyOne.classList.add('sidebar-active__open')
  sidebarBlock.classList.add('sidebar-list__close')
});
sidebarCloseOne.addEventListener('click', function() {
  sidebarBodyOne.classList.remove('sidebar-active__open')
  sidebarBlock.classList.remove('sidebar-list__close')
});

sidebarActiveTwo.addEventListener('click', function() {
  sidebarBodyTwo.classList.add('sidebar-active__open')
  sidebarBlock.classList.add('sidebar-list__close')
});
sidebarCloseTwo.addEventListener('click', function() {
  sidebarBodyTwo.classList.remove('sidebar-active__open')
  sidebarBlock.classList.remove('sidebar-list__close')
});

sidebarActiveThree.addEventListener('click', function() {
  sidebarBodyThree.classList.add('sidebar-active__open')
  sidebarBlock.classList.add('sidebar-list__close')
});
sidebarCloseThree.addEventListener('click', function() {
  sidebarBodyThree.classList.remove('sidebar-active__open')
  sidebarBlock.classList.remove('sidebar-list__close')
});

let navBtn = document.querySelectorAll('.nav-toggle')[0];
let sidebarMobile = document.querySelectorAll('.sidebar')[0];

navBtn.addEventListener('click', function() {
  navBtn.classList.toggle('nav-toggle-active'),
  sidebarMobile.classList.toggle('sidebar-mob')
});

new Swiper('.why-we-slider', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.why-we-next',
    prevEl: '.why-we-prev',
    disabledClass: 'why-we-sl',
  },
  breakpoints: {
    // when window width is >= 320px
    1715: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    140: {
      slidesPerView: 1,
    }
  }
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  // centerSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
    breakpoints: {
    // when window width is >= 320px
    1715: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

var modal = document.getElementById('pop-up');

var myBtn = document.getElementsByClassName('pop-up__open');
var close = document.getElementsByClassName('pop-up__close')[0];

console.log(myBtn);
/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "flex";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}