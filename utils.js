




export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === id) {
            return item;
        }
    }
}

const USER = 'USER';

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}
const head = document.querySelector('header')
export function renderUI() {
    const user = getUser();
    const healthSpan = document.createElement('p');
    const nameSpan = document.createElement('p');
    const fascismSpan = document.createElement('p');
    const classSpan = document.createElement('p');
    healthSpan.textContent = `hp: ${user.hp}`;
    nameSpan.textContent = `Name: ${user.name}`;
    fascismSpan.textContent = `Fascism: ${user.fascism}`;
    classSpan.textContent = `Class: ${user.class}`;
    head.appendChild(nameSpan);
    head.appendChild(healthSpan);
    head.appendChild(classSpan);
    head.appendChild(fascismSpan);


}


export function scoreUpdate(choice, questId, user) {
    user.hp += choice.hp;
    user.fascism += choice.fascism;
    user.completed[questId] = true;
}


