/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderTest", "clickAnswer"] }] */
import UI from './UI';
import language from './lang';
import app from './app';

export default class Test extends UI {
  renderTest() {
    const header = document.querySelector('.header');
    header.textContent = '';

    const testContent = UI.renderElement(header, 'div', null, ['class', 'testTitle']);
    const tempLanguageTitle = `test_${language.appLang}_title`;
    testContent.textContent = `${language[tempLanguageTitle]}`;

    const main = document.querySelector('.main');
    main.innerHTML = '';

    const mainTest = UI.renderElement(main, 'div', null, ['class', 'mainTest']);

    const question1 = UI.renderElement(mainTest, 'div', null, ['class', 'question question1']);
    question1.textContent = language[language.appLang][24];

    const answer1 = UI.renderElement(question1, 'div', null, ['class', 'answer answer1']);
    answer1.textContent = language[language.appLang][25];
    answer1.setAttribute('id', 'answer1');

    const answer2 = UI.renderElement(question1, 'div', null, ['class', 'answer answer2']);
    answer2.textContent = language[language.appLang][26];
    answer2.setAttribute('id', 'answer2');

    const question2 = UI.renderElement(mainTest, 'div', null, ['class', 'question question2']);
    question2.textContent = language[language.appLang][27];

    const answer3 = UI.renderElement(question2, 'div', null, ['class', 'answer answer3']);
    answer3.textContent = '< 16';
    answer3.setAttribute('id', 'answer3');

    const answer4 = UI.renderElement(question2, 'div', null, ['class', 'answer answer4']);
    answer4.textContent = '16-30';
    answer4.setAttribute('id', 'answer4');

    const answer5 = UI.renderElement(question2, 'div', null, ['class', 'answer answer5']);
    answer5.textContent = '31-40';
    answer5.setAttribute('id', 'answer5');

    const answer6 = UI.renderElement(question2, 'div', null, ['class', 'answer answer6']);
    answer6.textContent = '41-50';
    answer6.setAttribute('id', 'answer6');

    const answer7 = UI.renderElement(question2, 'div', null, ['class', 'answer answer7']);
    answer7.textContent = '> 51';
    answer7.setAttribute('id', 'answer7');

    const question3 = UI.renderElement(mainTest, 'div', null, ['class', 'question question3']);
    question3.textContent = language[language.appLang][28];

    const answer8 = UI.renderElement(question3, 'div', null, ['class', 'answer answer8']);
    answer8.textContent = language[language.appLang][29];
    answer8.setAttribute('id', 'answer8');

    const answer9 = UI.renderElement(question3, 'div', null, ['class', 'answer answer9']);
    answer9.textContent = language[language.appLang][30];
    answer9.setAttribute('id', 'answer9');

    const answer10 = UI.renderElement(question3, 'div', null, ['class', 'answer answer10']);
    answer10.textContent = language[language.appLang][31];
    answer10.setAttribute('id', 'answer10');

    const answer11 = UI.renderElement(question3, 'div', null, ['class', 'answer answer11']);
    answer11.textContent = language[language.appLang][32];
    answer11.setAttribute('id', 'answer11');

    const answer12 = UI.renderElement(question3, 'div', null, ['class', 'answer answer12']);
    answer12.textContent = language[language.appLang][33];
    answer12.setAttribute('id', 'answer12');

    const question4 = UI.renderElement(mainTest, 'div', null, ['class', 'question question4']);
    question4.textContent = language[language.appLang][34];

    const answer13 = UI.renderElement(question4, 'div', null, ['class', 'answer answer13']);
    answer13.textContent = '< 10';
    answer13.setAttribute('id', 'answer13');

    const answer14 = UI.renderElement(question4, 'div', null, ['class', 'answer answer13']);
    answer14.textContent = '11>20';
    answer14.setAttribute('id', 'answer14');

    const answer15 = UI.renderElement(question4, 'div', null, ['class', 'answer answer13']);
    answer15.textContent = '21>30';
    answer15.setAttribute('id', 'answer15');

    const answer16 = UI.renderElement(question4, 'div', null, ['class', 'answer answer13']);
    answer16.textContent = '31>40';
    answer16.setAttribute('id', 'answer16');

    const answer17 = UI.renderElement(question4, 'div', null, ['class', 'answer answer13']);
    answer17.textContent = '> 40';
    answer17.setAttribute('id', 'answer17');

    const question5 = UI.renderElement(mainTest, 'div', null, ['class', 'question question5']);
    question5.textContent = language[language.appLang][35];

    const answer18 = UI.renderElement(question5, 'div', null, ['class', 'answer answer18']);
    answer18.textContent = '< 10';
    answer18.setAttribute('id', 'answer18');

    const answer19 = UI.renderElement(question5, 'div', null, ['class', 'answer answer19']);
    answer19.textContent = '11>20';
    answer19.setAttribute('id', 'answer19');

    const answer20 = UI.renderElement(question5, 'div', null, ['class', 'answer answer20']);
    answer20.textContent = '21>30';
    answer20.setAttribute('id', 'answer20');

    const answer21 = UI.renderElement(question5, 'div', null, ['class', 'answer answer21']);
    answer21.textContent = '31>40';
    answer21.setAttribute('id', 'answer21');

    const answer22 = UI.renderElement(question5, 'div', null, ['class', 'answer answer22']);
    answer22.textContent = '> 40';
    answer22.setAttribute('id', 'answer22');

    const question6 = UI.renderElement(mainTest, 'div', null, ['class', 'question question6']);
    question6.textContent = language[language.appLang][36];

    const answer23 = UI.renderElement(question6, 'div', null, ['class', 'answer answer23']);
    answer23.textContent = '< 10';
    answer23.setAttribute('id', 'answer23');

    const answer24 = UI.renderElement(question6, 'div', null, ['class', 'answer answer24']);
    answer24.textContent = '11>20';
    answer24.setAttribute('id', 'answer24');

    const answer25 = UI.renderElement(question6, 'div', null, ['class', 'answer answer25']);
    answer25.textContent = '21>30';
    answer25.setAttribute('id', 'answer25');

    const answer26 = UI.renderElement(question6, 'div', null, ['class', 'answer answer26']);
    answer26.textContent = '31>40';
    answer26.setAttribute('id', 'answer26');

    const answer27 = UI.renderElement(question6, 'div', null, ['class', 'answer answer27']);
    answer27.textContent = '> 40';
    answer27.setAttribute('id', 'answer27');

    const question7 = UI.renderElement(mainTest, 'div', null, ['class', 'question question7']);
    question7.textContent = language[language.appLang][37];

    const answer28 = UI.renderElement(question7, 'div', null, ['class', 'answer answer28']);
    answer28.textContent = language[language.appLang][38];
    answer28.setAttribute('id', 'answer28');
    app.sec = 0;
  }

  clickTest() {
    const btnTest = document.getElementById('1'); //
    btnTest.addEventListener('click', () => {
      this.renderTest();
      this.clickAnswer();
    });
  }

  clickAnswer() {
    const question1 = document.querySelector('.question1');
    const question2 = document.querySelector('.question2');
    const question3 = document.querySelector('.question3');
    const question4 = document.querySelector('.question4');
    const question5 = document.querySelector('.question5');
    const question6 = document.querySelector('.question6');
    const question7 = document.querySelector('.question7');

    const questions = document.querySelectorAll('.question');
    let coefficient = 1;
    let coefficientPushups = 1;
    let coefficientSitUps = 1;
    let coefficientSquats = 1;
    let coefficientBurpee = 1;

    questions.forEach((el) => {
      const clickElement = el;
      clickElement.onclick = (event) => {
        const { target } = event;

        switch (target.id) {
          case 'answer1':
            coefficient = 10;
            question1.style.display = 'none';
            question2.style.display = 'flex';
            break;

          case 'answer2':
            coefficient = 8;
            question1.style.display = 'none';
            question2.style.display = 'flex';
            break;

          case 'answer3':
            coefficient += 1;
            question2.style.display = 'none';
            question3.style.display = 'flex';
            break;

          case 'answer4':
            coefficient += 2;
            question2.style.display = 'none';
            question3.style.display = 'flex';
            break;

          case 'answer5':
            coefficient += 1;
            question2.style.display = 'none';
            question3.style.display = 'flex';
            break;

          case 'answer6':
            coefficient += 2;
            question2.style.display = 'none';
            question3.style.display = 'flex';
            break;

          case 'answer7':
            coefficient += 1;
            question2.style.display = 'none';
            question3.style.display = 'flex';
            break;

          case 'answer8':
            coefficient += 1;
            question3.style.display = 'none';
            question4.style.display = 'flex';
            break;

          case 'answer9':
            coefficient += 2;
            question3.style.display = 'none';
            question4.style.display = 'flex';
            break;

          case 'answer10':
            coefficient += 3;
            question3.style.display = 'none';
            question4.style.display = 'flex';
            break;

          case 'answer11':
            coefficient += 4;
            question3.style.display = 'none';
            question4.style.display = 'flex';
            break;

          case 'answer12':
            coefficient += 5;
            question3.style.display = 'none';
            question4.style.display = 'flex';
            break;

          case 'answer13':
            coefficientPushups = coefficient * 5;
            question4.style.display = 'none';
            question5.style.display = 'flex';
            break;

          case 'answer14':
            coefficientPushups = coefficient * 6;
            question4.style.display = 'none';
            question5.style.display = 'flex';
            break;

          case 'answer15':
            coefficientPushups = coefficient * 7;
            question4.style.display = 'none';
            question5.style.display = 'flex';
            break;

          case 'answer16':
            coefficientPushups = coefficient * 8;
            question4.style.display = 'none';
            question5.style.display = 'flex';
            break;

          case 'answer17':
            coefficientPushups = coefficient * 9;
            question4.style.display = 'none';
            question5.style.display = 'flex';
            break;

          case 'answer18':
            coefficientSitUps = coefficient * 5;

            question5.style.display = 'none';
            question6.style.display = 'flex';
            break;

          case 'answer19':
            coefficientSitUps = coefficient * 6;
            question5.style.display = 'none';
            question6.style.display = 'flex';
            break;

          case 'answer20':
            coefficientSitUps = coefficient * 7;
            question5.style.display = 'none';
            question6.style.display = 'flex';
            break;

          case 'answer21':
            coefficientSitUps = coefficient * 8;
            question5.style.display = 'none';
            question6.style.display = 'flex';
            break;

          case 'answer22':
            coefficientSitUps = coefficient * 9;
            question5.style.display = 'none';
            question6.style.display = 'flex';
            break;

          case 'answer23':
            coefficientSquats = coefficient * 5;

            question6.style.display = 'none';
            question7.style.display = 'flex';
            break;

          case 'answer24':
            coefficientSquats = coefficient * 6;
            question6.style.display = 'none';
            question7.style.display = 'flex';
            break;

          case 'answer25':
            coefficientSquats = coefficient * 7;
            question6.style.display = 'none';
            question7.style.display = 'flex';
            break;

          case 'answer26':
            coefficientSquats = coefficient * 8;
            question6.style.display = 'none';
            question7.style.display = 'flex';
            break;

          case 'answer27':
            coefficientSquats = coefficient * 9;
            question6.style.display = 'none';
            question7.style.display = 'flex';
            break;
          //
          case 'answer28':
            coefficientBurpee = (coefficientSitUps + coefficientPushups + coefficientSquats) / 3;
            question7.style.display = 'none';
            localStorage.setItem('coefficientPushups', coefficientPushups);
            localStorage.setItem('coefficientSitUps', coefficientSitUps);
            localStorage.setItem('coefficientSquats', coefficientSquats);
            localStorage.setItem('coefficientBurpee', coefficientBurpee);
            // level_pushups
            if (!app.day_pushups) {
              if (coefficientPushups > 130) {
                localStorage.setItem('level_pushups', 'Impossible');
              }
              if (coefficientPushups < 130) {
                localStorage.setItem('level_pushups', 'Hard');
              }
              if (coefficientPushups < 110) {
                localStorage.setItem('level_pushups', 'Average');
              }
              if (coefficientPushups < 90) {
                localStorage.setItem('level_pushups', 'Simply');
              }
              if (coefficientPushups < 70) {
                localStorage.setItem('level_pushups', 'Easy');
              }
            }

            // level_sitUps
            if (!app.day_sitUps) {
              if (coefficientSitUps > 130) {
                localStorage.setItem('level_sitUps', 'Impossible');
              }
              if (coefficientSitUps < 130) {
                localStorage.setItem('level_sitUps', 'Hard');
              }
              if (coefficientSitUps < 110) {
                localStorage.setItem('level_sitUps', 'Average');
              }
              if (coefficientSitUps < 90) {
                localStorage.setItem('level_sitUps', 'Simply');
              }
              if (coefficientSitUps < 70) {
                localStorage.setItem('level_sitUps', 'Easy');
              }
            }
            //
            // level_squats
            if (!app.day_squats) {
              if (coefficientSquats > 130) {
                localStorage.setItem('level_squats', 'Impossible');
              }
              if (coefficientSquats < 130) {
                localStorage.setItem('level_squats', 'Hard');
              }
              if (coefficientSquats < 110) {
                localStorage.setItem('level_squats', 'Average');
              }
              if (coefficientSquats < 90) {
                localStorage.setItem('level_squats', 'Simply');
              }
              if (coefficientSquats < 70) {
                localStorage.setItem('level_squats', 'Easy');
              }
            }
            //
            // level_burpee
            if (!app.day_burpee) {
              if (coefficientBurpee > 130) {
                localStorage.setItem('level_burpee', 'Impossible');
              }
              if (coefficientBurpee < 130) {
                localStorage.setItem('level_burpee', 'Hard');
              }
              if (coefficientBurpee < 110) {
                localStorage.setItem('level_burpee', 'Average');
              }
              if (coefficientBurpee < 90) {
                localStorage.setItem('level_burpee', 'Simply');
              }
              if (coefficientBurpee < 70) {
                localStorage.setItem('level_burpee', 'Easy');
              }
            }
            document.getElementById('0').click();
            app.stateBurgerMenu = !app.stateBurgerMenu;
            break;

          default:
            break;
        }
      };
    });
  }
}
