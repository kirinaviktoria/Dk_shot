const burgerBtn = document.querySelector('.burger_btn');
const headerBlock = document.querySelector('.header__block');
const header = document.querySelector('.header');
const navLogo = document.querySelector('.navLogo');
const hero = document.querySelector('.hero');
const formats = document.querySelector('.formats__block');
const containers = document.querySelectorAll('.container');
const myBlur = document.querySelector('.blur');
const body = document.querySelector('.body');
const btnTop = document.querySelector('.button-up');
// const upWrapper = document.querySelector('.up_wrapper');
const promoBtn = document.querySelector('.promo-btn');
const promoPopup = document.querySelector('.promo-popup');
const closePopup = document.querySelector('.close_popup');


//promoPopup
promoBtn.addEventListener('click', function() {
  promoPopup.classList.toggle('visible');
  body.classList.toggle('scroll-hidden');
  btnTop.classList.toggle('topHide');
})

closePopup.addEventListener('click', () => {
  promoPopup.classList.toggle('visible');
  body.classList.toggle('scroll-hidden');
  btnTop.classList.toggle('topHide');
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    promoPopup.classList.remove('visible');
    body.classList.toggle('scroll-hidden');
    btnTop.classList.toggle('topHide');
  }
});

//clear anchor
function deleteAnchor() {
  let str = document.location.toString();
  document.location = str.substring(0, str.lenght - str.indexOf('#'));
}

const toggleMobile = () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('scroll-hidden');
  hero.classList.toggle('hero-open');
  // body.classList.toggle('hero-open')
  myBlur.classList.toggle('hide');
}

const toggleMain = () => {
  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('#nav-link');

    nav.addEventListener("click", function(e) {
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = nav.getAttribute('href')
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView()
    })
  });
}

const toggleTablet = () => {
  header.classList.toggle('open');
  headerBlock.classList.toggle('open');
  myBlur.classList.toggle('hide')
  body.classList.toggle('scroll-hidden');
  hero.classList.toggle('hero-open');
  // body.classList.toggle('hero-open')
}

const hideAll = () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('scroll-hidden');

  // containers.forEach((item) => {
  //   item.classList.toggle('hide');
  // })
};

if (window.innerWidth <= 745) {
  burgerBtn.addEventListener('click', () => hideAll())

  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('#nav-link');
  
    nav.addEventListener('click', () => hideAll());
  });
}

if (window.innerWidth > 745 && window.innerWidth <= 995 ) {
  burgerBtn.addEventListener('click', () => toggleTablet())

  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('#nav-link');
    nav.addEventListener('click', (e) => {
      toggleTablet();
      e.preventDefault() // Предотвратить стандартное поведение ссылок
      // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
      const goto = nav.getAttribute('href')
      // Плавная прокрутка до элемента с id = href у ссылки
      document.querySelector(goto).scrollIntoView()
    })
  });
}

if (window.innerWidth > 995 ) {
  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('#nav-link');
    nav.addEventListener('click', () => toggleMain())
  });
}

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

document.querySelectorAll('.format').forEach(function(formats) {
  const formatsBtn = formats.querySelector('.format-btn');
  const popup = formats.querySelector('.popup');
  const popupInside = formats.querySelector('.popup .popup__block');
  const closePopup = formats.querySelector('.close_popup');

  formatsBtn.addEventListener('click', () => {
    popup.classList.toggle('visible');
    body.classList.toggle('scroll-hidden');
    btnTop.classList.toggle('topHide');
    // upWrapper.classList.toggle('hide')
  });

  closePopup.addEventListener('click', () => {
    popup.classList.toggle('visible');
    body.classList.toggle('scroll-hidden');
    btnTop.classList.toggle('topHide');
    // upWrapper.classList.toggle('hide')
  });
  
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      popup.classList.remove('visible');
      body.classList.toggle('scroll-hidden');
      btnTop.classList.toggle('topHide');
      // upWrapper.classList.toggle('hide')
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
    btnTop.classList.toggle('topHide');
    // upWrapper.classList.toggle('hide')
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

// button top
window.onscroll = () => {
  if(window.scrollY > 700) {
    btnTop.classList.remove('topHide')
  } 
  else if (window.scrollY < 700 || popup.classList.сontains('visible')) {
    btnTop.classList.add('topHide')
  }
}

btnTop.addEventListener('click', (e) => {
  // Плавная прокрутка до элемента с id = href у ссылки
  document.querySelector('#top').scrollIntoView();
})

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   if (window.innerWidth <= 668) {
//     burgerBtn.addEventListener('touched', () => hideAll())
  
//     document.querySelectorAll('.nav').forEach(function (headerLinks) {
//       const nav = headerLinks.querySelector('#nav-link');
    
//       nav.addEventListener('touched', () => hideAll());
//     });
//   }

//   if (window.innerWidth > 668 && window.innerWidth <= 995 ) {
//     burgerBtn.addEventListener('touched', () => {
//       headerBlock.classList.toggle('open');
//       header.classList.toggle('open');
//       body.classList.toggle('scroll-hidden');
//       hero.classList.toggle('hero-open')
//       myBlur.classList.toggle('hide')
//     })
//   }
// }

// burgerBtn.addEventListener('click', () => hideAll())

// document.querySelectorAll('.nav').forEach(function (headerLinks) {
//   const nav = headerLinks.querySelector('#nav-link');

//   nav.addEventListener('click', () => hideAll());
// });

// document.querySelectorAll('.format-btn').forEach(elem => {
//   elem.addEventListener('click', () => {
//     popup.classList.toggle('visible')
//     console.log('popup!')
//   });
// })


// document.addEventListener('click', e => console.log(e.target));

// const swiper = new Swiper('.mySwiper', {
//   // Optional parameters
//   // direction: 'horizontal',
//   effect: 'slide',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   mousewhell: true,
// });
