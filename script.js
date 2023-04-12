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
