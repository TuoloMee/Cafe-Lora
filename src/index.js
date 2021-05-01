import './style.css';

console.log('funguju!');

const navButtonElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');

navButtonElm.addEventListener('click', () => {
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const navElmAll = document.querySelectorAll('nav a');

for (let i = 0; i < navElmAll.length; i += 1) {
navElmAll[i].addEventListener('click', () => {
  navElm.classList.add('nav-closed');
});
}

// navElmAll.forEach((item) => {
//   item.addEventListener('click', () => {
//     navElm.classList.add('nav-closed');
//   });
// });