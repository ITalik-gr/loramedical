
const elems = document.querySelectorAll('.doctor-card__image');

[...elems].forEach(elem => elem.addEventListener('click', changeClass))


function changeClass(e) {
	this.querySelector('.doctor-card-info').classList.toggle('doctor-card-info__active');
};


let navBtn = document.querySelectorAll('.nav-toggle')[0];
let sidebarMobile = document.querySelectorAll('.sidebar-mob')[0];

navBtn.addEventListener('click', function() {
  navBtn.classList.toggle('nav-toggle-active'),
  sidebarMobile.classList.toggle('sidebar-mob-active')
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

