import { renderUI, getUser, hasCompletedAllQuests } from '../utils.js';
import { results } from './result-data.js';

renderUI();



const section = document.querySelector('section');
const p = document.createElement('p');
const user = getUser();

if (user.hp <= 0) {
    p.textContent = results.dead;
} else if (user.class === 'rich') {

    p.textContent = results.startRich;

} else if (user.fascism >= 1 && user.fascism < 10) {
    p.textContent = results.lowFascist;
} else if (user.fascism >= 10) {
    p.textContent = results.highFascist;
} else if (user.fascism === 0) {
    p.textContent = results.noFascist;
};

section.appendChild(p);

const button = document.createElement('button');
button.textContent = 'Try again';
section.appendChild(button);

button.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = '../index.html';
})