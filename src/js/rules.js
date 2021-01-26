import UI from './UI';
import language from './lang';


export default class Rules extends UI {
  // constructor() {
  //   super();
  // }

  renderRules() {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const mainRules = UI.renderElement(main, 'div', null, ['class', 'mainRules']);

    const rulesBox = UI.renderElement(mainRules, 'div', null, ['class', 'rulesBox']);
    const rulesTitle = UI.renderElement(rulesBox, 'div', null, ['class', 'rulesTitle']);
    let tempLanguageTitle = `rules_${language.appLang}_title`;
    rulesTitle.textContent = `${language[tempLanguageTitle]}`;

    
    for (let i=0; i<8; i+=1){
        const rulesContent = UI.renderElement(rulesBox, 'div', null, ['class', 'rulesContent']);
        let tempLanguage = `rules_${language.appLang}`;
        rulesContent.textContent = `- ${language[tempLanguage][i]}`;
    }
    
    


  }
  clickRules() {
    const btnRules = document.getElementById('2'); //
    btnRules.addEventListener('click', () => {
    this.renderRules();
    });
}

}