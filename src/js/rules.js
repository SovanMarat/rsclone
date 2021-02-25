/* eslint class-methods-use-this: ["error", { "exceptMethods": ["renderRules"] }] */

import UI from './UI';
import language from './lang';
import app from './app';

export default class Rules extends UI {
  renderRules() {
    const header = document.querySelector('.header');
    header.textContent = '';
    const rulesTitle = UI.renderElement(header, 'div', null, ['class', 'rulesTitle']);

    const main = document.querySelector('.main');
    main.innerHTML = '';
    const mainRules = UI.renderElement(main, 'div', null, ['class', 'mainRules']);

    const rulesBox = UI.renderElement(mainRules, 'div', null, ['class', 'rulesBox']);
    const tempLanguageTitle = `rules_${language.appLang}_title`;
    rulesTitle.textContent = `${language[tempLanguageTitle]}`;

    for (let i = 0; i < 8; i += 1) {
      const rulesContent = UI.renderElement(rulesBox, 'div', null, ['class', 'rulesContent']);
      const tempLanguage = `rules_${language.appLang}`;
      rulesContent.textContent = `- ${language[tempLanguage][i]}`;
    }
    app.sec = 0;
  }

  clickRules() {
    const btnRules = document.getElementById('2'); //
    btnRules.addEventListener('click', () => {
      this.renderRules();
    });
  }
}
