'use strict';

// click active state on aside-bar items
let sideBarItems = document.querySelectorAll('.side-bar__item');
let activeItem = sideBarItems.forEach(item => {
  item.addEventListener('click', () => {
    // removing the class from past active element
    document
      .querySelector('.side-bar__item--active')
      .classList.remove('side-bar__item--active');

    // adding active class to the clicked element
    item.classList.add('side-bar__item--active');
  });
});
