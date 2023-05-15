const burgerBtn = document.querySelector('.burger_btn');
const headerBlock = document.querySelector('.header__block');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const formats = document.querySelector('.formats__block');
const containers = document.querySelectorAll('.container');

const body = document.querySelector('.body');

// if (document.documentElement.clientWidth < 480) {
//   headerBlock.classList.add('hide')
// };

burgerBtn.addEventListener('click', () => hideAll())

const hideAll = () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');

  containers.forEach((item) => {
    item.classList.toggle('hide');
  })
};

document.querySelectorAll('#faq-elem').forEach(function (faqWrapper) {
  const faq = faqWrapper.querySelector('.faq-title');
  const answer = faqWrapper.querySelector('.faq-answer');
  const plus = faqWrapper.querySelector('.plus');
  const minus = faqWrapper.querySelector('.minus');

  faq.addEventListener('click', () => {
    answer.classList.toggle('hide');
    plus.classList.toggle('hide');
    minus.classList.toggle('hide');
  });
});

document.querySelectorAll('.nav').forEach(function (headerLinks) {
  const nav = headerLinks.querySelector('#nav-link');

  nav.addEventListener('click', () => hideAll());
});

document.querySelectorAll('.format').forEach(function(formats) {
  const formatsBtn = formats.querySelector('.format-btn');
  const popup = formats.querySelector('.popup');
  const popupInside = formats.querySelector('.popup .popup__block');
  const closePopup = formats.querySelector('.close_popup');
  // тут вставить получение конкретного попапа для каждого формата

  formatsBtn.addEventListener('click', () => {
    popup.classList.toggle('visible')
    body.classList.toggle('scroll-hidden');
  });

  closePopup.addEventListener('click', () => {
    popup.classList.toggle('visible');
    body.classList.toggle('scroll-hidden');
  });
  
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      popup.classList.remove('visible');
      body.classList.toggle('scroll-hidden');
    }
  });

  // Закрыть модальное окно при клике по наружней области:
  //1 Проверка, что клик был снаружи
  popupInside.addEventListener('click', e => {
    e.isClickOutOfPopup = true;
  });

  //2 Скрываем, если клик снаружи
  popup.addEventListener('click', e => {
    if (e.isClickOutOfPopup) return;
    e.currentTarget.classList.remove('visible');
    body.classList.toggle('scroll-hidden');
  })

  const swiper = new Swiper('.swiperFormats', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    mousewhell: true,
  });

});

// document.querySelectorAll('.format-btn').forEach(elem => {
//   elem.addEventListener('click', () => {
//     popup.classList.toggle('visible')
//     console.log('popup!')
//   });
// })


// document.addEventListener('click', e => console.log(e.target));

const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewhell: true,
});

const models_swiper = new Swiper('.modelsSwiper', {
  // Optional parameters
  // direction: 'horizontal',
  effect: 'slide',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewhell: true,
});