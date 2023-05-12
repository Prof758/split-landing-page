'use strict';

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', function () {
  container.classList.add('hover-left');
  leftOverlay.style.width = 0;
  leftOverlay.style.height = 0;
  leftOverlay.style.backgroundColor = 'transparent';
});

left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
