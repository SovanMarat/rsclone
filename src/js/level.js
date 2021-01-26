/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderLevel"] }] */

import UI from './UI';
import language from './lang';

export default class Level extends UI {
  renderLevel(exercise, currentLevel) {
    //
    const boxLevel = document.querySelector(`.${exercise}BoxLevel`);

    const levelImpossible = UI.renderElement(boxLevel, 'div', null, ['class', `level levelImpossible Impossible_${exercise}`]);
    levelImpossible.textContent = language[language.appLang][4]; // Impossible

    const levelHard = UI.renderElement(boxLevel, 'div', null, ['class', `level levelHard Hard_${exercise}`]);
    levelHard.textContent = language[language.appLang][5]; // Hard

    const levelAverage = UI.renderElement(boxLevel, 'div', null, ['class', `level levelAverage Average_${exercise}`]);
    levelAverage.textContent = language[language.appLang][6]; // Average

    const levelSimply = UI.renderElement(boxLevel, 'div', null, ['class', `level levelSimply Simply_${exercise}`]);
    levelSimply.textContent = language[language.appLang][7]; // Simply

    const levelEasy = UI.renderElement(boxLevel, 'div', null, ['class', `level levelEasy Easy_${exercise}`]);
    levelEasy.textContent = language[language.appLang][8]; // Easy
    //
    const activeLevel = document.querySelector(`.${currentLevel}_${exercise}`);
    activeLevel.classList.add('activeLevel');
  }
}
