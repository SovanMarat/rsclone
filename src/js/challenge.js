/* eslint class-methods-use-this: ["error", {"exceptMethods": ["renderChallenge","renderDay"]}] */

import html2canvas from 'html2canvas';
import UI from './UI';
import language from './lang';
import app from './app';

export default class Challenge extends UI {
  renderChallenge(exercise) {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const mainChallenge = UI.renderElement(main, 'div', null, ['class', 'mainChallenge']);
    const todayBox = UI.renderElement(mainChallenge, 'div', null, ['class', 'todayBox']);
    const todayBoxDay = UI.renderElement(todayBox, 'div', null, ['class', 'todayBoxDay']);

    const startView = localStorage.getItem(`start_view_${exercise}`);
    const finishView = localStorage.getItem(`finish_view_${exercise}`);
    const сhallengeText = `сhallenge_${language.appLang}`;

    todayBoxDay.textContent = `${language[сhallengeText][0]} ${exercise} ${language[сhallengeText][1]} ${startView} ${language[сhallengeText][2]} ${finishView}`;

    const todayDay = UI.renderElement(todayBox, 'div', null, ['class', 'todayDay']);

    const tempLevel = app[`level_${exercise}`];
    const coeff = app[tempLevel];
    const tDay = app[`day_${exercise}`];
    const count = coeff + tDay;
    todayDay.textContent = `${language[сhallengeText][3]} ${tDay} ${language[сhallengeText][4]} ${language[сhallengeText][5]} 5 ${language[сhallengeText][6]} ${count} ${language[сhallengeText][7]} `;

    const todayText = UI.renderElement(todayBox, 'div', null, ['class', 'todayText']);
    const btnText = UI.renderElement(todayText, 'div', null, ['class', 'btnText']);
    btnText.textContent = `${language[сhallengeText][8]}`;
    const btnDone = UI.renderElement(todayText, 'div', null, ['class', 'btnDone']);
    btnDone.textContent = `${language[сhallengeText][9]}`;

    const resultText = UI.renderElement(todayBox, 'div', null, ['class', 'resultText']);
    resultText.textContent = `${language[сhallengeText][10]}`;
    //
    let control = parseInt(localStorage.getItem(`control_${exercise}`), 10);
    const day = parseInt(localStorage.getItem(`day_${exercise}`), 10);
    if (control !== day) {
      btnDone.addEventListener('click', () => {
        control++;
        localStorage.setItem(`control_${exercise}`, control);
        btnDone.style.pointerEvents = 'none';
        resultText.textContent = `${language[сhallengeText][11]}`;
        const dayDone = document.querySelector(`.day${control}`);
        dayDone.style.background = 'rgba(51, 235, 76, 0.644)';

        if (control === 30) {
          resultText.textContent = `${language[сhallengeText][13]}`;
          //
          ['pushups', 'sitUps', 'squats', 'burpee'].forEach((e) => {
            app[`state_${e}`] = true;
            localStorage.setItem(`state_${e}`, true);
          });

          if (localStorage.getItem(`level_${exercise}`) === 'Hard') {
            localStorage.setItem(`level_${exercise}`, 'Impossible');
          }
          if (localStorage.getItem(`level_${exercise}`) === 'Average') {
            localStorage.setItem(`level_${exercise}`, 'Hard');
          }
          if (localStorage.getItem(`level_${exercise}`) === 'Simply') {
            localStorage.setItem(`level_${exercise}`, 'Average');
          }
          if (localStorage.getItem(`level_${exercise}`) === 'Easy') {
            localStorage.setItem(`level_${exercise}`, 'Simply');
          }
          app[`day_${exercise}`] = 0;
          localStorage.setItem(`start_${exercise}`, null);
          localStorage.setItem(`day_${exercise}`, null);
          localStorage.setItem(`control_${exercise}`, null);
        }
      });
    } else {
      btnDone.style.pointerEvents = 'none';
      resultText.textContent = `${language[сhallengeText][11]}`;
    }
    const boxCalendar = UI.renderElement(todayBox, 'div', null, ['class', 'boxCalendar']);
    for (let i = 1; i < 31; i++) {
      const dayCalendar = UI.renderElement(boxCalendar, 'div', null, ['class', `dayCalendar day${i}`]);
      if (control >= i) {
        dayCalendar.style.background = 'rgba(51, 235, 76, 0.644)';
      }
      if (control < i) {
        dayCalendar.style.background = 'rgba(245, 81, 76, 0.915)';
      }
      if (control < i && day === i) {
        dayCalendar.style.background = ' rgba(216, 236, 30, 0.815)';
      }
      dayCalendar.textContent = i;
    }

    const technique = UI.renderElement(mainChallenge, 'div', null, ['class', 'technique']);
    technique.textContent = `${language[сhallengeText][12]}`;

    const techniqueText = UI.renderElement(mainChallenge, 'div', null, ['class', 'techniqueText']);
    const btnSave = UI.renderElement(mainChallenge, 'div', null, ['class', 'btnSave']);

    technique.addEventListener('click', () => {
      btnSave.style.opacity = '0';
      techniqueText.style.opacity = '1';
      techniqueText.style.width = '100%';
      techniqueText.style.height = '100%';
    });

    const technoTextTitle = UI.renderElement(techniqueText, 'div', null, ['class', 'technoTextTitle']);
    const tempTitle = `technique_${language.appLang}_${exercise}_title`;
    technoTextTitle.textContent = language[tempTitle];

    const technoText = UI.renderElement(techniqueText, 'div', null, ['class', 'technoText']);
    const temp = `technique_${language.appLang}_${exercise}`;
    technoText.textContent = language[temp];

    const closeTechnique = UI.renderElement(techniqueText, 'div', null, ['class', 'closeTechnique']);
    closeTechnique.textContent = 'x';
    closeTechnique.addEventListener('click', () => {
      btnSave.style.opacity = '1';
      techniqueText.style.opacity = '0';
      techniqueText.style.width = '0';
      techniqueText.style.height = '0';
    });

    // 1
    btnSave.addEventListener('click', () => {
      html2canvas(document.querySelector('.mainChallenge')).then((canvas) => {
        mainChallenge.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(125, 46, 138, 0.5)';
        ctx.fillRect(25, 25, 100, 100);
        ctx.fillStyle = 'rgba( 0, 146, 38, 0.5)';
        ctx.fillRect(58, 74, 125, 100);
        canvas.setAttribute('id', 'aLink');
        const testLink = document.getElementById('aLink');
        const image = testLink.toDataURL();
        const aLink = document.createElement('a');
        const evt = document.createEvent('HTMLEvents');
        evt.initEvent('click');
        aLink.download = 'image.png';
        aLink.href = image;
        aLink.dispatchEvent(evt);
        setTimeout(aLink.click(), 0);
      });
    });
    //
  }

  renderDay(exercise) {
    const currentDate = new Date();
    // eslint-disable-next-line
    const dateCurrent = currentDate.getTime() - (currentDate.getHours() * (3.6e+6) - currentDate.getMinutes() * 60000 - currentDate.getSeconds() * 1000);
    localStorage.setItem('date_current', dateCurrent);

    localStorage.setItem('date', dateCurrent);

    app[`start_${exercise}`] = parseInt(localStorage.getItem(`start_${exercise}`), 10);

    const numberOfDays = Math.ceil((dateCurrent - app[`start_${exercise}`]) / 8.64e7);
    app[`day_${exercise}`] = numberOfDays;
    localStorage.setItem(`day_${exercise}`, app[`day_${exercise}`]);
  }
}
