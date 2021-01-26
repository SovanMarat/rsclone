/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderGame"] }] */
import UI from './UI';
import language from './lang';
import playSound from './utils/sounds';
import start from '../sounds/start.mp3';
import finish from '../sounds/finish.mp3';
import tenSec from '../sounds/tenSec.mp3';
import app from './app';

export default class Game extends UI {
  renderGame() {
    const header = document.querySelector('.header');
    header.textContent = '';
    const gameTitle = UI.renderElement(header, 'div', null, ['class', 'gameTitle']);
    const gameRulesTitleTemp = `random_${language.appLang}_rules_title`;
    gameTitle.textContent = `${language[gameRulesTitleTemp]}`;

    const main = document.querySelector('.main');
    main.innerHTML = '';
    const mainGame = UI.renderElement(main, 'div', null, ['class', 'mainGame']);

    const gameBox = UI.renderElement(mainGame, 'div', null, ['class', 'gameBox']);

    const gameRules = UI.renderElement(gameBox, 'div', null, ['class', 'gameRules']);
    const gameRulesTemp = `random_${language.appLang}_rules`;
    gameRules.textContent = `${language[gameRulesTemp]}`;

    const gameBtnStart = UI.renderElement(gameBox, 'div', null, ['class', 'gameBtnStart']);
    gameBtnStart.textContent = language[language.appLang][22]; // GO

    const gameExercise = UI.renderElement(gameBox, 'div', null, ['class', 'gameExercise']);
    gameExercise.textContent = language[language.appLang][23]; // Тут появится упражнение

    const time = UI.renderElement(gameBox, 'div', null, ['class', 'time']);
    time.textContent = '60';

    // timer
    let t;
    app.sec = 60;
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    function showTime() {
      app.sec -= 1;
      if (app.sec === 10) {
        playSound(tenSec);
        time.style.color = 'red';
      }
      if (app.sec === 1) {
        playSound(finish);
      }
      if (app.sec < 0) {
        app.sec = 60;
        clearTimeout(t);
        time.innerHTML = '60';
        time.style.color = 'white';
        gameBtnStart.style.pointerEvents = 'auto';
      } else {
        time.innerHTML = `${addZero(app.sec)}`;
        t = setTimeout(showTime, 1000);
      }
    }
    //

    gameBtnStart.addEventListener('click', () => {
      playSound(start);
      gameBtnStart.style.pointerEvents = 'none';
      const langTemp = `random_${language.appLang}`;
      gameExercise.textContent = `${language[langTemp][Math.floor(Math.random() * 16)]}`;
      showTime();
    });
  }

  clickGame() {
    const btnGame = document.getElementById('3'); //
    btnGame.addEventListener('click', () => {
      this.renderGame();
    });
  }
}
