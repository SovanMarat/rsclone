import UI from './UI';
import language from './lang';
import app from './app';


//import { exercise } from '..';


export default class Challenge extends UI {
    // constructor() {
    //   super();
    // }

    renderChallenge(exercise) {
        const header = document.querySelector('.header');
        const main = document.querySelector('.main');
        main.innerHTML = '';
        const mainChallenge = UI.renderElement(main, 'div', null, ['class', 'mainChallenge']);
        const todayBox = UI.renderElement(mainChallenge, 'div', null, ['class', 'todayBox']);
        const todayBoxDay = UI.renderElement(todayBox, 'div', null, ['class', 'todayBoxDay']);

        let start_view = localStorage.getItem(`start_view_${exercise}`);
        let finish_view = localStorage.getItem(`finish_view_${exercise}`);

        todayBoxDay.textContent = `Ваш челлендж по ${exercise} начался ${start_view} и закончится ${finish_view}`;

        const todayDay = UI.renderElement(todayBox, 'div', null, ['class', 'todayDay']);
        todayDay.textContent = `Сегодня ${app[`day_${exercise}`]} день, необходимо сделать 5 подходов по 5 раз`;

        const todayText = UI.renderElement(todayBox, 'div', null, ['class', 'todayText']);
        todayText.textContent = `После выполнения нажмите на кнопку`;

        const btnDone = UI.renderElement(todayBox, 'div', null, ['class', 'btnDone']);
        btnDone.textContent = `Done!`;

        const resultText = UI.renderElement(todayBox, 'div', null, ['class', 'resultText']);
        resultText.textContent = `Сделай это!!!`;
//
let control = parseInt(localStorage.getItem(`control_${exercise}`));
let day = parseInt(localStorage.getItem(`day_${exercise}`));
 if(control!==day) {
        btnDone.addEventListener('click', () => {
        let control = parseInt(localStorage.getItem(`control_${exercise}`));
        control ++;
        localStorage.setItem(`control_${exercise}`, control);
        btnDone.style.pointerEvents='none';
        resultText.textContent = `На сегодня ты выполнил задание`;
        console.log('day', day);
        if (control===30){
        resultText.textContent = `Ты выполнил челлендж, теперь повышается твой уровень по этому упражнению!`;
        } 
        document.getElementById("0").click();
      //  exercises.init();
       // btnDone.style.pointerEvents='auto'; //on click
    })
 } else {
    btnDone.style.pointerEvents='none';
    resultText.textContent = `На сегодня ты выполнил задание`;
   // btnDone.classList.remove('btnDoneHover');
 }
//
       


      
        //technique

        //                                date

    }

    renderDay(exercise) {
    
        let currentDate = new Date();
        let dateCurrent = currentDate.getTime() - (currentDate.getHours() * (3.6e+6) - currentDate.getMinutes() * 60000 - currentDate.getSeconds() * 1000);
        localStorage.setItem('date_current', dateCurrent);
        console.log(dateCurrent);
        
        localStorage.setItem('date', dateCurrent);

        app[`start_${exercise}`] = parseInt(localStorage.getItem(`start_${exercise}`));
        console.log(app[`start_${exercise}`]);

        let numberOfDays = Math.ceil((dateCurrent - app[`start_${exercise}`]) / 8.64e7);
        app[`day_${exercise}`] = numberOfDays;
        console.log(numberOfDays);
        localStorage.setItem(`day_${exercise}`, app[`day_${exercise}`]);


    }
}