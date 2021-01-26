import './styles/index.scss';
// import language from './js/lang';
import app from './js/app';

import Exercises from './js/exercises';
import Test from './js/test';
import Level from './js/level';
import Challenge from './js/challenge';
import Rules from './js/rules';



export const challenge = new Challenge();
challenge.renderDay('pushups');
challenge.renderDay('sitUps');
challenge.renderDay('squats');
challenge.renderDay('burpee');

export const exercises = new Exercises();
exercises.level('pushups');
exercises.level('sitUps');
exercises.level('squats');
exercises.level('burpee');
exercises.renderHeader();
exercises.render('pushups');
exercises.render('sitUps');
exercises.render('squats');
exercises.render('burpee');

exercises.clickExercises('pushups', app.level_pushups);//
exercises.clickExercises('sitUps', app.level_sitUps);//
exercises.clickExercises('squats', app.level_squats);//
exercises.clickExercises('burpee', app.level_burpee);//
exercises.clickLang();

export const level = new Level();
level.renderLevel('pushups', app.level_pushups);
level.renderLevel('sitUps', app.level_sitUps);
level.renderLevel('squats', app.level_squats);
level.renderLevel('burpee', app.level_burpee);

export const test = new Test();
test.clickTest();

export const rules = new Rules();
rules.clickRules();

const btnMenu = document.querySelector('.burger-menu__button');
const menu = document.querySelector('.burger-menu');
const menuOverlay = document.querySelector('.burger-menu__overlay');
const menuLink = document.querySelector('.burger-menu__nav');

const removeMenuActive = () => {
  menu.classList.remove('burger-menu-active');
};
const addMenuActive = () => {
  menu.classList.add('burger-menu-active');
};

// menuLink.addEventListener('click', () => {
//     removeMenuActive();
//   });
//
menuLink.onclick = function (event) {
  const { target } = event; // где был клик?
  if (target.tagName !== 'A') return; // не на TD? тогда не интересует

  removeMenuActive(); // подсветить TD
  app.stateBurgerMenu = !app.stateBurgerMenu;
};
//

btnMenu.addEventListener('click', () => {
  if (app.stateBurgerMenu) {
    removeMenuActive();
  } else {
    addMenuActive();
  }
  app.stateBurgerMenu = !app.stateBurgerMenu;
});

menuOverlay.addEventListener('click', () => {
  removeMenuActive();
  app.stateBurgerMenu = !app.stateBurgerMenu;
});

const btnHome = document.getElementById('0'); // home page
btnHome.addEventListener('click', () => {
exercises.init();
});
