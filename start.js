
import { saveUser } from './utils.js';
const form = document.querySelector('form');

function makePlayer(data) {
    const user = {
        name: data.get('name'),
        class: data.get('class'),
        hp: 10,
        fascism: 0,
        completed:{},

    };
    return user;

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const player = makePlayer(data);
    saveUser(player);
    if (player.class === 'rich') {
        window.location.href = './results';
    } else {
        window.location.href = './calender';
    }

});
