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
  body.classList.toggle('fixed');
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
  body.classList.toggle('fixed');
  hero.classList.toggle('hero-open');
  // body.classList.toggle('hero-open')
}

const hideAll = () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');
  body.classList.toggle('scroll-hidden');
  body.classList.toggle('fixed');

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
    // body.classList.toggle('fixed');
    btnTop.classList.toggle('topHide');
    // upWrapper.classList.toggle('hide')
  });

  closePopup.addEventListener('click', () => {
    stopVideo();
    popup.classList.toggle('visible');
    body.classList.toggle('scroll-hidden');
    // body.classList.toggle('fixed');
    btnTop.classList.toggle('topHide');

    // upWrapper.classList.toggle('hide')
  });
  
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      popup.classList.remove('visible');
      body.classList.toggle('scroll-hidden');
      // body.classList.toggle('fixed');
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
    // body.classList.toggle('fixed');
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

//Обработка формы
const promoForm = document.querySelector('#promo-form');
const promoSubmit = document.querySelector('.promo-submit');
const loader = document.querySelector('.spinner__wrapper');
const formTitle = document.querySelector('.form__title');

const formSended = document.querySelector('.form_sended');
const idApp = document.querySelector('#idApp')
const closeFormSended = document.querySelector('.close_formSended');

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
  // toggleForm();
  e.preventDefault();
  let error = formValidate(promoForm);

  let formData = new FormData(promoForm);

  if (error) {
    alert('Заполните все обязательные поля')
  }

  else {
    // loader.classList.toggle('hide');
    promoForm.classList.add('_sending');
    // send form
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData,
    });

    if(response.ok) {
      let result = await response.json();
      // alert(result.message);
      promoForm.reset();
      promoForm.classList.remove('_sending');
      hideForm();
      // showSended();
      // loader.classList.toggle('hide');
      console.log(randID());
    }
    else {
      alert('Ошибка отправки, повторите попытку позже');
      promoForm.classList.remove('_sending');
    }
  }
}

const togglePopup = () => {
  // showForm();
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

// const toggleForm = () => {
//   formTitle.classList.toggle('hide');
//   promoForm.classList.toggle('hide');
// }

// const showSended = () => {
//   formSended.classList.remove('hide');
// }

// const hideSended = () => {
//   formSended.classList.add('hide');
// }

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

const videoSlide = document.querySelectorAll('.video-slide');

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

// button top
window.onscroll = () => {
  if(window.scrollY > 700) {
    btnTop.classList.remove('topHide')
  } 
  // || popup.classList.сontains('visible')
  else if (window.scrollY < 700) {
    btnTop.classList.add('topHide')
  }
}

btnTop.addEventListener('click', (e) => {
  // Плавная прокрутка до элемента с id = href у ссылки
  document.querySelector('#top').scrollIntoView();
})
// Обработка загрузки файлов
// const formImage = document.querySelector('#formImage');
// const filePreview = document.querySelector('#filePreview');

// formImage.addEventListener('change', () => {
//   uploadFile(formImage.files[0]);
// });

// function uploadFile(file) {
//   // check type
//   if(!['image/jpeg', 'image/png', 'image/gif', 'image/jpg'].includes(file.type)) {
//     alert('Разрешены только изображения');
//     formImage.value = '';
//     return;
//   }
//   //check size (<2Mb)
//   if(file.size > 2 * 1024 * 1024) {
//     alert('Файл должен быть менее 2 МБ');
//     return;
//   }

//   let reader = new FileReader();
//   reader.onload = function(e) {
//     filePreview.innerHTML = `<img src='${e.target.result}' alt='фото'>`;
//   };
//   reader.onerror = function(e) {
//     alert('Ошибка загрузки');
//   };
//   reader.readAsDataURL(file);

// }


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

