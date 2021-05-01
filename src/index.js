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
// Na tlačíko se třídou order-btn pověste posluchač, při kliknutí změní nápis na tlačítku na Zrušit. Zároveň přidá na prvek se třídou drink__cup třídu drink__cup--selected.
// Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a změny na prvku .drink__cup i na tlačítku .order-btn se vrátily (odebrala se třída drink__cup--selected a vrátil se text tlačítka na Objednat). Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let ordered = true;

orderBtn.addEventListener('click', () => {
  if (ordered === true) {
  orderBtn.textContent = 'Zrušit';
  drinkCup.classList.add('drink__cup--selected');
  ordered = false;
} else {
  orderBtn.textContent = 'Objednat';
  drinkCup.classList.remove('drink__cup--selected');
  ordered = true
}
});