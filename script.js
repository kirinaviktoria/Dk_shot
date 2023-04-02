const burgerBtn = document.querySelector('.burger_btn')
const headerBlock = document.querySelector('.header__block')
const header = document.querySelector('.header')
const hero = document.querySelector('.hero')
const formats = document.querySelector('.formats__block')

// if (document.documentElement.clientWidth < 480) {
//   headerBlock.classList.add('hide')
// };

burgerBtn.addEventListener('click', () => {
  headerBlock.classList.toggle('open');
  header.classList.toggle('open');
  hero.classList.toggle('hide');
  formats.classList.toggle('hide');
})