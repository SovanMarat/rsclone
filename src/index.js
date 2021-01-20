import './styles/index.scss';
import language from './js/lang';
import app from './js/app';

import Exercises from './js/exercises';
import Test from './js/test';
import Level from './js/level';


export const exercises = new Exercises();
exercises.render();
exercises.clickExercises('pushups', app.level_pushups);//
exercises.clickExercises('sitUps', app.level_sitUps);//
exercises.init();

export const level = new Level();
level.renderLevel('pushups', app.level_pushups);
level.renderLevel('sitUps', app.level_sitUps);

export const test = new Test();
test.clickTest();

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
  let target = event.target; // где был клик?
  console.log(target);
  console.log(target.id);
  if (target.tagName != 'A') return; // не на TD? тогда не интересует

  removeMenuActive();  // подсветить TD
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

const btnHome = document.getElementById('0'); //
btnHome.addEventListener('click', () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  header.innerHTML = '';
  main.innerHTML = '';
  exercises.render();
  exercises.init();
  level.renderLevel('pushups', app.level_pushups);
  level.renderLevel('sitUps', app.level_sitUps);
  exercises.clickExercises('pushups', app.level_pushups);//
  exercises.clickExercises('sitUps', app.level_sitUps);//
});

const click = () => {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const btnRu = document.querySelector('.lang_ru');
  const btnEn = document.querySelector('.lang_en');


  //

  btnRu.addEventListener('click', () => {
    language.appLang = 'ru';
    console.log(language.appLang);
    header.innerHTML = '';
    main.innerHTML = '';
    //qqq.textContent = "Статус"; ///////////////////////////////////
    exercises.render();
    level.renderLevel('pushups', app.level_pushups);
    level.renderLevel('sitUps', app.level_sitUps);
    click();
  });
  btnEn.addEventListener('click', () => {
    language.appLang = 'en';
    console.log(language.appLang);
    header.innerHTML = '';
    main.innerHTML = '';
    //qqq.textContent = "Status"; //

    exercises.render();
    level.renderLevel('pushups', app.level_pushups);
    level.renderLevel('sitUps', app.level_sitUps);
    click();
  });
}
click();

const st = document.querySelector('.status');
st.addEventListener('click', ()=> {
app.level_pushups='Hard';
const lv = document.querySelector('.pushupsBoxLevel');
lv.innerHTML = '';
level.renderLevel('pushups', app.level_pushups);
});