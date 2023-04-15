const burgerBtn = document.querySelector('.burger_btn')
const headerBlock = document.querySelector('.header__block')
const header = document.querySelector('.header')
const hero = document.querySelector('.hero')
const formats = document.querySelector('.formats__block')
const containers = document.querySelectorAll('.container')

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
}

// const faq = document.querySelector('#faq-elem');
//   const answer = document.querySelector('.faq-answer');
//   const plus = document.querySelector('.plus');
//   const minus = document.querySelector('.minus');
// // Продумать слушатель на каждый элемент
// faq.addEventListener('click', () => {
//   answer.classList.toggle('hide');
//   plus.classList.toggle('hide');
//   minus.classList.toggle('hide');
// })

// faqElem.forEach((item) => {
//   item.addEventListener('click', () => {
//     answer.classList.toggle('hide');
//     plus.classList.toggle('hide');
//     minus.classList.toggle('hide');
//   })
// })

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

document.addEventListener('click', e => console.log(e.target));

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

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  mousewhell: true,
});
