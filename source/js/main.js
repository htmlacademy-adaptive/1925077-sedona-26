menu = document.querySelector('.header__nav');
menuToggler = document.querySelector('.header__menu-toggler');

menu.classList.add('header__nav--hidden');

menuToggler.addEventListener('click', () => {
  if (menu.classList.contains('header__nav--hidden')) {
    menu.classList.remove('header__nav--hidden');
    menuToggler.classList.remove('header__menu-toggler--to-open');
    menuToggler.classList.add('header__menu-toggler--to-close');
  } else {
    menu.classList.add('header__nav--hidden');
    menuToggler.classList.add('header__menu-toggler--to-open');
    menuToggler.classList.remove('header__menu-toggler--to-close');
  }
});
