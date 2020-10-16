import quests from '../data.js';
import { renderUI, getUser, findById, hasCompletedAllQuests } from '../utils.js';

const ul = document.querySelector('ul');
renderUI();
const user = getUser();
// const quest = findById(quests, user.quests);

if (user.hp === 0 || user.class === 'rich' || hasCompletedAllQuests(quests, user)) {
    window.location.href = '../results';
    console.log(user)
}

quests.forEach(quest => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);
    
    link.textContent = quest.title;
    link.href = `../quest/?id=${quest.id}`;

    ul.append(li);
});

