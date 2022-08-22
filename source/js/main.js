menu = document.querySelector('.page-header__nav');
menuToggler = document.querySelector('.page-header__menu-toggler');

menu.classList.add('page-header__nav--hidden');

menuToggler.addEventListener('click', () => {
  if (menu.classList.contains('page-header__nav--hidden')) {
    menu.classList.remove('page-header__nav--hidden');
    menuToggler.classList.remove('page-header__menu-toggler--to-open');
    menuToggler.classList.add('page-header__menu-toggler--to-close');
  } else {
    menu.classList.add('page-header__nav--hidden');
    menuToggler.classList.add('page-header__menu-toggler--to-open');
    menuToggler.classList.remove('page-header__menu-toggler--to-close');
  }
});
