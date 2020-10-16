import quests from '../data.js';
import { findById } from '../utils.js';
import { getUser, saveUser } from '../utils.js';


const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const quest = findById(quests, id);

const h2 = document.createElement('h2');

h2.textContent = quest.title;

section.appendChild(h2);
const image = document.createElement('img');
image.src = `../assets/${quest.image}`;
const p = document.createElement('p');
p.textContent = quest.description;

section.appendChild(image);
section.appendChild(p);
const form = document.createElement('form');
const resultSpan = document.createElement('p')
section.appendChild(resultSpan);
section.appendChild(form);

quest.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');
    span.textContent = choice.description;
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);
    form.appendChild(label);


});

const nextButton = document.createElement('button')
nextButton.textContent = 'Next';
nextButton.classList.add('hidden')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const choiceId = formData.get('choices');
    const choice = findById(quest.choices, choiceId);

    const user = getUser();
    // generate a score and manipulate user state
    // scoreQuest(choice, quest.id, user);
    // save user
    saveUser(user);

    // update UI

    form.classList.add('hidden');
    nextButton.classList.remove('hidden');
    resultSpan.textContent = choice.result;
    // reload profile for new stats
    // loadProfile();

});



const button = document.createElement('button');

button.textContent = 'Submit';
form.appendChild(button);
section.appendChild(nextButton)

nextButton.addEventListener('click', () => {
    window.location.href = '../calender';
});