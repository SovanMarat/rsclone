import UI from './UI';
import language from './lang';
import app from './app';
import Level from './level';
import Test from './test';
const test = new Test();
const level = new Level();

export default class Exercises extends UI {
  // constructor() {
  //   super();
  // }


  render() {
    const header = document.querySelector('.header');
    const headerContent = UI.renderElement(header, 'div', null, ['class', 'header_content']);
    headerContent.textContent = 'Вызов самому себе на 30 дней';
    const lang = UI.renderElement(header, 'div', null, ['class', 'lang']);
    const langEn = UI.renderElement(lang, 'div', null, ['class', 'lang_en']);
    const langRu = UI.renderElement(lang, 'div', null, ['class', 'lang_ru']);
    langRu.textContent = 'Русский';
    langEn.textContent = 'English';

    const main = document.querySelector('.main');
    const pushups = UI.renderElement(main, 'div', null, ['class', 'test pushups']);
    const sitUps = UI.renderElement(main, 'div', null, ['class', 'test sitUps']);
    const squats = UI.renderElement(main, 'div', null, ['class', 'test squats']);
    const burpee = UI.renderElement(main, 'div', null, ['class', 'test burpee']);

    const pushupsContent = UI.renderElement(pushups, 'div', null, ['class', 'exercises pushups_content']);
    pushupsContent.textContent = language[language.appLang][0]; //отжимания

    const sitUpsContent = UI.renderElement(sitUps, 'div', null, ['class', 'exercises sitUps_content']);
    sitUpsContent.textContent = language[language.appLang][1]; //пресс

    const squatsContent = UI.renderElement(squats, 'div', null, ['class', 'exercises squats_content']);
    squatsContent.textContent = language[language.appLang][2]; //приседания

    const burpeeContent = UI.renderElement(burpee, 'div', null, ['class', 'exercises burpee_content']);
    burpeeContent.textContent = language[language.appLang][3]; //бёрпи

    // const btn = UI.renderElement(pushups, 'div', null, ['class', 'btn']);
    // btn.textContent = "btn";

    //pushups
    const pushupsBox = UI.renderElement(pushups, 'div', null, ['class', 'pushupsBox box']);
    const pushupsBoxImg = UI.renderElement(pushupsBox, 'div', null, ['class', 'pushupsBoxImg boxImg']);
    const pushupsBoxLevel = UI.renderElement(pushupsBox, 'div', null, ['class', 'pushupsBoxLevel boxLevel']);
    const pushupsStatus = UI.renderElement(pushups, 'div', null, ['class', 'pushupsStatus status']);
    pushupsStatus.textContent = "Status: Just do it!";
    if (!app.state_pushups) {
      const blockingBlock = UI.renderElement(pushups, 'div', null, ['class', 'blockingBlock']);
    }
    //sitUps
    const sitUpsBox = UI.renderElement(sitUps, 'div', null, ['class', 'sitUpsBox box']);
    const sitUpsBoxImg = UI.renderElement(sitUpsBox, 'div', null, ['class', 'sitUpsBoxImg boxImg']);
    const sitUpsBoxLevel = UI.renderElement(sitUpsBox, 'div', null, ['class', 'sitUpsBoxLevel boxLevel']);
    const sitUpsStatus = UI.renderElement(sitUps, 'div', null, ['class', 'sitUpsStatus status']);
    sitUpsStatus.textContent = "Status: Access is closed";
    if (!app.state_sitUps) {
      const blockingBlock = UI.renderElement(sitUps, 'div', null, ['class', 'blockingBlock']);
    }

    //

    const date0 = new Date(); // старт челленджа
    let date1 = new Date(); // текущая дата
    let numberOfDays = Math.ceil((date1 - date0) / 8.64e7); //подсчет сколько прошло дней со старта челленджа
    //testDate.textContent = numberOfDays;



    //   const all = UI.renderElement(btnOptions, 'div', null, ['class', 'all']);
    //   const allBtnFist = UI.renderElement(all, 'div', null, ['class', 'all_btn btn']);
    //   UI.renderElement(allBtnFist, 'img', null, ['src', './public/arrow-left.svg']);
    //   this.allContent = UI.renderElement(all, 'div', 'In all', ['class', 'all_content']);
    //   const allBtnSecond = UI.renderElement(all, 'div', null, ['class', 'all_btn btn']);
    //   UI.renderElement(allBtnSecond, 'img', null, ['src', './public/arrow-right.svg']);
  }

  clickExercises(exercise, currentLevel) {
    const clickStart = document.querySelector(`.${exercise}`);
    let tempLevel = `level_${exercise}`;
    let tempState = `state_${exercise}`;
    // console.log(app[tempLevel]);
    // console.log(app[tempState]);

    clickStart.addEventListener('click', () => {
      if (app[tempState]) {
        const startBlock = UI.renderElement(clickStart, 'div', null, ['class', 'blockingBlock2']);
        const startQuestion = UI.renderElement(startBlock, 'div', null, ['class', 'startQuestion']);
        startQuestion.textContent = `Вы готовы пройти 30 дневный челлендж по ${exercise} на уровне ${currentLevel}?`;
        const answerYes = UI.renderElement(startBlock, 'div', null, ['class', 'answerStart answerYes']);
        answerYes.textContent = `Yes`;
        const answerNo = UI.renderElement(startBlock, 'div', null, ['class', 'answerStart answerNo']);
        answerNo.textContent = `No`;
        const answerTest = UI.renderElement(startBlock, 'div', null, ['class', 'answerStart answerTest']);
        answerTest.textContent = `Take the test`;
        // Yes

        // No
        answerNo.addEventListener('click', () => {
          const header = document.querySelector('.header');
          const main = document.querySelector('.main');
          header.innerHTML = '';
          main.innerHTML = '';

          this.render();
          this.init();
          this.clickExercises('pushups', app.level_pushups);//
          this.clickExercises('sitUps', app.level_sitUps);//
          level.renderLevel('pushups', app.level_pushups);
          level.renderLevel('sitUps', app.level_sitUps);
        })
        //test
        answerTest.addEventListener('click', () => {
          test.renderTest();
          test.clickTest();
          test.clickAnswer();
        })
        ///
      }
    })
  }


  init() {
    //   const btn = document.querySelector('.btn');
    // btn.addEventListener('click', ()=>{
    //   localStorage.setItem('date_start', new Date().getTime());
    // })
    localStorage.setItem('date_current', new Date().getTime());
    let dateStart = new Date(parseInt(localStorage.getItem('date_start')));
    let dateCurrent = new Date(parseInt(localStorage.getItem('date_current')));
    let numberOfDays = Math.ceil((dateCurrent - dateStart) / 8.64e7);
    console.log(numberOfDays);
  }
  // localStorage.setItem('baseNum', game.baseNum);
}