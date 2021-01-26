/* eslint class-methods-use-this:["error",{"exceptMethods":["level","renderHeader","render"]}] */

import UI from './UI';
import language from './lang';
import app from './app';
import Level from './level';
import Test from './test';
import Challenge from './challenge';

const challenge = new Challenge();
const test = new Test();
const level = new Level();

export default class Exercises extends UI {
  // constructor() {
  //   super();
  // }

  level(exercise) {
    if (!localStorage.getItem(`language`)) {
      localStorage.setItem('language', language.appLang);
    } else {
      language.appLang = localStorage.getItem('language');
    }

    if (!localStorage.getItem(`level_${exercise}`)) {
      localStorage.setItem(`level_${exercise}`, app[`level_${exercise}`]);
    } else {
      app[`level_${exercise}`] = localStorage.getItem(`level_${exercise}`);
    }

    if (!localStorage.getItem(`state_${exercise}`)) {
      localStorage.setItem(`state_${exercise}`, app[`state_${exercise}`]);
    } else {
      app[`state_${exercise}`] = localStorage.getItem(`state_${exercise}`);
    }
    app.sec = 0;
  }

  renderHeader() {
    const header = document.querySelector('.header');
    const headerContent = UI.renderElement(header, 'div', null, ['class', 'header_content']);
    headerContent.textContent = language[language.appLang][21]; // 'Брось себе вызов на 30 дней'
    const lang = UI.renderElement(header, 'div', null, ['class', 'lang']);
    const langEn = UI.renderElement(lang, 'div', null, ['class', 'lang_en']);
    const langRu = UI.renderElement(lang, 'div', null, ['class', 'lang_ru']);
    langRu.textContent = 'Русский';
    langEn.textContent = 'English';
    headerContent.addEventListener('click', () => {
      document.getElementById('0').click();
      app.stateBurgerMenu = !app.stateBurgerMenu;
    });
  }

  render(exercise) {
    const main = document.querySelector('.main');
    const pushups = UI.renderElement(main, 'div', null, ['class', `test ${exercise}`]);

    const pushupsContent = UI.renderElement(pushups, 'div', null, ['class', `exercises ${exercise}_content`]);
    switch (exercise) {
      case 'pushups':
        pushupsContent.textContent = language[language.appLang][0]; // отжимания
        break;
      case 'sitUps':
        pushupsContent.textContent = language[language.appLang][1]; // пресс
        break;
      case 'squats':
        pushupsContent.textContent = language[language.appLang][2]; // присед
        break;
      case 'burpee':
        pushupsContent.textContent = language[language.appLang][3]; // бёрпи
        break;

      default:
        break;
    }

    // pushups
    const pushupsBox = UI.renderElement(pushups, 'div', null, ['class', `${exercise}Box box`]);
    UI.renderElement(pushupsBox, 'div', null, ['class', `${exercise}BoxImg boxImg`]);
    UI.renderElement(pushupsBox, 'div', null, ['class', `${exercise}BoxLevel boxLevel`]);
    const pushupsStatus = UI.renderElement(pushups, 'div', null, ['class', `${exercise}Status status`]);

    if (app[`day_${exercise}`]) {
      const tempDay = app[`day_${exercise}`];
      // ${language[language.appLang][39]};
      pushupsStatus.textContent = `${language[language.appLang][39]} ${tempDay}/30`;
    } else {
      pushupsStatus.textContent = `${language[language.appLang][40]}`;
    }

    if (!JSON.parse(app[`state_${exercise}`])) {
      pushupsStatus.textContent = `${language[language.appLang][41]}`;
      UI.renderElement(pushups, 'div', null, ['class', 'blockingBlock']);
    }
  }

  ///                  lang
  clickLang() {
    const btnRu = document.querySelector('.lang_ru');
    const btnEn = document.querySelector('.lang_en');
    const langTemp = `menu_${language.appLang}`;

    document.getElementById('0').textContent = `${language[langTemp][0]}`;
    document.getElementById('1').textContent = `${language[langTemp][1]}`;
    document.getElementById('2').textContent = `${language[langTemp][2]}`;
    document.getElementById('3').textContent = `${language[langTemp][3]}`;

    btnRu.addEventListener('click', () => {
      language.appLang = 'ru';
      localStorage.setItem('language', language.appLang);
      this.init();
    });
    btnEn.addEventListener('click', () => {
      language.appLang = 'en';
      localStorage.setItem('language', language.appLang);
      this.init();
    });
  }

  ///                     click card

  clickExercises(exercise, currentLevel) {
    const clickStart = document.querySelector(`.${exercise}`);
    const tempState = `state_${exercise}`;
    clickStart.addEventListener('click', () => {
      // app.day_pushups = parseInt(localStorage.getItem('day_pushups'));/// в самое начало

      if (parseInt(localStorage.getItem(`day_${exercise}`), 10) > 0) { // условие что челлендж уже начат
        challenge.renderChallenge(exercise);
        challenge.renderDay(exercise);
      } else if (JSON.parse(app[tempState])) {
        const startBlock = UI.renderElement(clickStart, 'div', null, ['class', 'blockingBlock2']);
        const startQuestion = UI.renderElement(startBlock, 'div', null, ['class', 'startQuestion']);
        startQuestion.textContent = `${language[language.appLang][44]} ${exercise} ${language[language.appLang][45]} ${currentLevel}?`;
        const answerYes = UI.renderElement(startBlock, 'div', null, ['class', 'answerStart answerYes']);
        answerYes.textContent = `${language[language.appLang][46]}`;
        const answerNo = UI.renderElement(startBlock, 'div', null, ['class', 'answerStart answerNo']);
        answerNo.textContent = `${language[language.appLang][47]}`;
        const answerTest = UI.renderElement(startBlock, 'div', null, ['class', 'answerStart answerTest']);
        answerTest.textContent = `${language[language.appLang][48]}`;

        // Yes
        answerYes.addEventListener('click', () => {
          // блокируем другие level
          const array = ['pushups', 'sitUps', 'squats', 'burpee'];
          const index = array.indexOf(exercise);
          array.splice(index, 1);
          array.forEach((e) => {
            app[`state_${e}`] = false;
            localStorage.setItem(`state_${e}`, false);
          });
          //

          localStorage.setItem(`control_${exercise}`, 0);
          const start = new Date();
          const finish = new Date();
          finish.setDate(finish.getDate() + 29);
          const tempStart = `${start.getDate()} ${language[language.appLang][start.getMonth() + 9]} ${start.getFullYear()}`;
          localStorage.setItem(`start_view_${exercise}`, tempStart);
          const tempFinish = `${finish.getDate()} ${language[language.appLang][finish.getMonth() + 9]} ${finish.getFullYear()}`;
          localStorage.setItem(`finish_view_${exercise}`, tempFinish);
          app[`start_${exercise}`] = start.getTime() - (start.getHours() * (3.6e+6) - start.getMinutes() * 60000 - start.getSeconds() * 1000);
          localStorage.setItem(`start_${exercise}`, app[`start_${exercise}`]);
          challenge.renderChallenge(exercise);
          challenge.renderDay(exercise);
        });

        // No
        answerNo.addEventListener('click', () => {
          this.init();
        });
        // test
        answerTest.addEventListener('click', () => {
          test.renderTest();
          test.clickTest();
          test.clickAnswer();
        });
        ///
      }
    });
    // проверка не пропустил ли день тренировки
    const control = parseInt(localStorage.getItem(`control_${exercise}`), 10);
    const day = parseInt(localStorage.getItem(`day_${exercise}`), 10);
    if ((control + 1) < day) {
      app[`state_${exercise}`] = false;
      const spent = UI.renderElement(clickStart, 'div', null, ['class', 'spent']);
      spent.textContent = `${language[language.appLang][42]}`;
      const btnAnew = UI.renderElement(spent, 'div', null, ['class', 'btnAnew']);
      btnAnew.textContent = `${language[language.appLang][43]}`;
      spent.addEventListener('click', () => {
        // перезаписать дату старта
        app[`state_${exercise}`] = true;
        localStorage.setItem(`control_${exercise}`, 0);

        const start = new Date();
        const finish = new Date();
        finish.setDate(finish.getDate() + 29);
        const tempStart = `${start.getDate()} ${language[language.appLang][start.getMonth() + 9]} ${start.getFullYear()}`;
        localStorage.setItem(`start_view_${exercise}`, tempStart);
        const tempFinish = `${finish.getDate()} ${language[language.appLang][finish.getMonth() + 9]} ${finish.getFullYear()}`;
        localStorage.setItem(`finish_view_${exercise}`, tempFinish);
        app[`start_${exercise}`] = start.getTime() - (start.getHours() * (3.6e+6) - start.getMinutes() * 60000 - start.getSeconds() * 1000);
        localStorage.setItem(`start_${exercise}`, app[`start_${exercise}`]);
        challenge.renderChallenge(exercise);
        challenge.renderDay(exercise);
        //
        //  localStorage.setItem(`day_${exercise}`, 1);
        // app[`day_${exercise}`] = 1;
      });
    }

    // проерка выполнил ли сегодня
    if (control === day) {
      const changeStatus = document.querySelector(`.${exercise}Status`);
      changeStatus.style.background = 'rgba(9, 245, 40, 0.9)';
    }
  }

  init() {
    /// --------------------------------------------------------
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    header.innerHTML = '';
    main.innerHTML = '';
    this.renderHeader();
    this.render('pushups');
    this.render('sitUps');
    this.render('squats');
    this.render('burpee');
    this.level('pushups');
    this.level('sitUps');
    this.level('squats');
    this.level('burpee');
    this.clickExercises('pushups', app.level_pushups);
    this.clickExercises('sitUps', app.level_sitUps);
    this.clickExercises('squats', app.level_squats);
    this.clickExercises('burpee', app.level_burpee);
    level.renderLevel('pushups', app.level_pushups);
    level.renderLevel('sitUps', app.level_sitUps);
    level.renderLevel('squats', app.level_squats);
    level.renderLevel('burpee', app.level_burpee);
    this.clickLang();
  }
}
