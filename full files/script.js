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
const promoBtn = document.querySelector('.promo-btn');
const btnBanner = document.querySelector('#btn-banner');
const promoPopup = document.querySelector('.promo-popup');
const closePopup = document.querySelector('.close_popup');
const promoWrapper = document.querySelector('.promo__wrapper');
const closePromo = document.querySelector('.close_promo');
//form-controls:
const promoForm = document.querySelector('#promo-form');
const promoSubmit = document.querySelector('.promo-submit');
const loader = document.querySelector('.spinner__wrapper');
const formTitle = document.querySelector('.form__title');
const formSended = document.querySelector('.form_sended');
const idApp = document.querySelector('#idApp')
const closeFormSended = document.querySelector('.close_formSended');
//end form-controls
const videoSlide = document.querySelectorAll('.video-slide');


window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    promoPopup.classList.remove('visible');
    body.classList.toggle('scroll-hidden');
    btnTop.classList.toggle('topHide');
  }
});

const toggleMobile = () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('scroll-hidden');
  body.classList.toggle('fixed');
  hero.classList.toggle('hero-open');
  myBlur.classList.toggle('hide');
}

const toggleMain = () => {
  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('.nav-link');

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
  body.classList.toggle('fixed');
  hero.classList.toggle('hero-open');
}

const hideAll = () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('scroll-hidden');
  body.classList.toggle('fixed');
};

if (window.innerWidth <= 745) {
  burgerBtn.addEventListener('click', () => hideAll())

  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('.nav-link');
  
    nav.addEventListener('click', () => hideAll());
  });
}

if (window.innerWidth > 745 && window.innerWidth <= 995 ) {
  burgerBtn.addEventListener('click', () => toggleTablet())

  document.querySelectorAll('.nav').forEach(function (headerLinks) {
    const nav = headerLinks.querySelector('.nav-link');
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
    const nav = headerLinks.querySelector('.nav-link');
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
  });

  closePopup.addEventListener('click', () => {
    stopVideo();
    popup.classList.toggle('visible');
    body.classList.toggle('scroll-hidden');
    btnTop.classList.toggle('topHide');
  });
  
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      popup.classList.remove('visible');
      body.classList.toggle('scroll-hidden');
      btnTop.classList.toggle('topHide');
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
  })

  const swiper = new Swiper('.swiperFormats', {
    // Optional parameters
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

//Обработка формы
//promoPopup open
btnBanner.addEventListener('click', () => {
  togglePopup();
  showForm();
});

//promoPopup open
promoBtn.addEventListener('click', () => {
  togglePopup();
  showForm();
});

//promoPopup close
closePopup.addEventListener('click', () => {
  togglePopup();
});

promoForm.addEventListener('submit', promoSend)

async function promoSend(e) {
  e.preventDefault();
  let error = formValidate(promoForm);

  let formData = new FormData(promoForm);

  if (error) {
    alert('Заполните все обязательные поля')
  }

  else {
    promoForm.classList.add('_sending');
    // send form
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });

    if(response.ok) {
      let result = await response.json();
      promoForm.reset();
      promoForm.classList.remove('_sending');
      hideForm();
      console.log(randID());
    }
    else {
      alert('Ошибка отправки, повторите попытку позже');
      promoForm.classList.remove('_sending');
    }
  }
}

const togglePopup = () => {
  promoPopup.classList.toggle('visible');
  body.classList.toggle('scroll-hidden');
  btnTop.classList.toggle('topHide');
}

const showForm = () => {
  formTitle.classList.remove('hide');
  promoForm.classList.remove('hide');
  formSended.classList.add('hide');
}

const hideForm = () => {
  formTitle.classList.add('hide');
  promoForm.classList.add('hide');
  formSended.classList.remove('hide');
}

function formValidate(promoForm) {
  let error = 0;
  let formReq = document.querySelectorAll('._req')

  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i];

    if(input.classList.contains('_email')){
      if(emailTest(input)) {
        formAddError(input);
        error++;
      }
      else {
        formRemoveError(input);
        error = 0;
      }
    }
    else {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
      else {
        formRemoveError(input);
        error = 0;
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add('_error')
  input.classList.add('_error')
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error')
  input.classList.remove('_error')
}

//валидация почты
function emailTest(input){
  return  !/ˆ\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function playVideo() {
  videoSlide.forEach(slide => {
    if (slide.classList.contains('swiper-slide-active')) {
      slide.children[0].play();
    }
    else if (!slide.classList.contains('swiper-slide-active')){
      slide.children[0].pause();
      slide.children[0].currentTime = 0;
    }
  });
}

function stopVideo() {
  videoSlide.forEach(slide => {
    slide.children[0].pause();
    slide.children[0].currentTime = 0;
  })
}

// swiperVideo
const video_swiper = new Swiper('.swiperVideo', {
  effect: 'slide',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewhell: true,

  on: {
    transitionEnd: () => playVideo(),
  }
});

// Appearing promo banner
const promoAppear = () => {
  let scrollTop = window.scrollY;
  let promoVisible = hero.offsetHeight;
  if(scrollTop >= promoVisible) {
    promoWrapper.classList.add('visible')
  } else {
    promoWrapper.classList.remove('visible');
  }
}

closePromo.addEventListener('click', () => {
  promoWrapper.classList.add('closed');
  promoWrapper.classList.remove('visible');
})

promoAppear();

// button top
window.onscroll = () => {
  if(!promoWrapper.classList.contains('closed')){
    promoAppear();
  }
  
  if(window.scrollY > 700) {
    btnTop.classList.remove('topHide')
  } 
  else if (window.scrollY < 700) {
    btnTop.classList.add('topHide')
  }
}

btnTop.addEventListener('click', () => {
  // Плавная прокрутка до элемента с id = href у ссылки
  document.querySelector('#top').scrollIntoView();
})