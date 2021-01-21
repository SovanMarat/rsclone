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
  constructor() {
    super();
  }

  level(exercise) {
    if (!localStorage.getItem(`level_${exercise}`)) {
      localStorage.setItem(`level_${exercise}`, app[`level_${exercise}`]);
    } else {
      app[`level_${exercise}`] = localStorage.getItem(`level_${exercise}`);
    }
  }

  renderHeader(){
    const header = document.querySelector('.header');
    const headerContent = UI.renderElement(header, 'div', null, ['class', 'header_content']);
    headerContent.textContent = language[language.appLang][21]; //'Брось себе вызов на 30 дней'
    const lang = UI.renderElement(header, 'div', null, ['class', 'lang']);
    const langEn = UI.renderElement(lang, 'div', null, ['class', 'lang_en']);
    const langRu = UI.renderElement(lang, 'div', null, ['class', 'lang_ru']);
    langRu.textContent = 'Русский';
    langEn.textContent = 'English';
  }

  render(exercise) {

  

    const main = document.querySelector('.main');
    const pushups = UI.renderElement(main, 'div', null, ['class', `test ${exercise}`]);

    const pushupsContent = UI.renderElement(pushups, 'div', null, ['class', `exercises ${exercise}_content`]);
console.log(exercise);
    switch (exercise) {

      case 'pushups':
        pushupsContent.textContent = language[language.appLang][0]; //отжимания 
        break;
      case 'sitUps':
        pushupsContent.textContent = language[language.appLang][1]; //пресс
        break;
      case 'squats':
        pushupsContent.textContent = language[language.appLang][2]; //присед 
        break;
      case 'burpee':
        pushupsContent.textContent = language[language.appLang][3]; //бёрпи 
        break;

      default:
        break;
    }

    //pushups
    const pushupsBox = UI.renderElement(pushups, 'div', null, ['class', `${exercise}Box box`]);
    const pushupsBoxImg = UI.renderElement(pushupsBox, 'div', null, ['class', `${exercise}BoxImg boxImg`]);
    const pushupsBoxLevel = UI.renderElement(pushupsBox, 'div', null, ['class', `${exercise}BoxLevel boxLevel`]);
    const pushupsStatus = UI.renderElement(pushups, 'div', null, ['class', `${exercise}Status status`]);


    if (app[`day_${exercise}`]) {
      let tempDay = app[`day_${exercise}`];
      pushupsStatus.textContent = `Status: day ${tempDay}/30`;
    } else {
      pushupsStatus.textContent = "Status: Just do it!";
    }
    if (!app[`state_${exercise}`]) {
      pushupsStatus.textContent = "Status: Access is closed";
      const blockingBlock = UI.renderElement(pushups, 'div', null, ['class', 'blockingBlock']);
    }
     }


  ///                  lang
  clickLang() {
    const btnRu = document.querySelector('.lang_ru');
    const btnEn = document.querySelector('.lang_en');

    btnRu.addEventListener('click', () => {
      language.appLang = 'ru';
      this.init();
    });
    btnEn.addEventListener('click', () => {
      language.appLang = 'en';
      this.init();
    });
  }

  ///                     click card

  clickExercises(exercise, currentLevel) {
    const clickStart = document.querySelector(`.${exercise}`);
    let tempLevel = `level_${exercise}`; ///-----------------------???
    let tempState = `state_${exercise}`;
    clickStart.addEventListener('click', () => {
      //app.day_pushups = parseInt(localStorage.getItem('day_pushups'));/// в самое начало

      if (parseInt(localStorage.getItem(`day_${exercise}`)) > 0) { //условие что челлендж уже начат
        challenge.renderChallenge(exercise);
        challenge.renderDay(exercise);
      } else {
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
            answerYes.addEventListener('click', () => {
            localStorage.setItem(`control_${exercise}`, 0);

            const start = new Date();
            const finish_pushups = new Date();
            finish_pushups.setDate(finish_pushups.getDate() + 29);
            let tempStart = `${start.getDate()} ${language[language.appLang][start.getMonth() + 9]} ${start.getFullYear()}`;
            localStorage.setItem(`start_view_${exercise}`, tempStart);
            let tempFinish = `${finish_pushups.getDate()} ${language[language.appLang][finish_pushups.getMonth() + 9]} ${finish_pushups.getFullYear()}`;
            localStorage.setItem(`finish_view_${exercise}`, tempFinish);

            app[`start_${exercise}`] = start.getTime() - (start.getHours() * (3.6e+6) - start.getMinutes() * 60000 - start.getSeconds() * 1000);
            localStorage.setItem(`start_${exercise}`, app[`start_${exercise}`]);

            ///localStorage.setItem('date_current', new Date().getTime()); старт челленджа
            // чтобы дни обновлялись на главной странице

            challenge.renderChallenge(exercise);
            challenge.renderDay(exercise);

            //this.init();
          })

          // No
          answerNo.addEventListener('click', () => {
            this.init();
          })
          //test
          answerTest.addEventListener('click', () => {
            test.renderTest();
            test.clickTest();
            test.clickAnswer();
          })
          ///
        }
      }
    })
    // проверка не пропустил ли день тренировки
    let control = parseInt(localStorage.getItem(`control_${exercise}`));
    let day = parseInt(localStorage.getItem(`day_${exercise}`));
    console.log('control', control);
    console.log('day', day);
    if (control && (control + 1) < day) {
      console.log('prosrochkaaaaaa');
      app[`state_${exercise}`] = false;
      const spent = UI.renderElement(clickStart, 'div', null, ['class', 'spent']);
      spent.textContent = `Spent!!!`;
      const btnAnew = UI.renderElement(spent, 'div', null, ['class', 'btnAnew']);
      btnAnew.textContent = `Start over`;
      spent.addEventListener('click', () => {
        localStorage.setItem(`day_${exercise}`, 1);
        localStorage.setItem(`control_${exercise}`, 0);
        app[`state_${exercise}`] = true;
        app[`day_${exercise}`] = 1;
    console.log('day1111111111');

      })
    }

    // проерка выполнил ли сегодня
    if (control === day) {
      console.log('33333', day);
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
    this.clickExercises('pushups', app.level_pushups);//
    this.clickExercises('sitUps', app.level_sitUps);//
    this.clickExercises('squats', app.level_squats);//
    this.clickExercises('burpee', app.level_burpee);//

    level.renderLevel('pushups', app.level_pushups);
    level.renderLevel('sitUps', app.level_sitUps);
    level.renderLevel('squats', app.level_squats);
    level.renderLevel('burpee', app.level_burpee);
    /// =================
    this.clickLang();
  }
  // localStorage.setItem('baseNum', game.baseNum);
}