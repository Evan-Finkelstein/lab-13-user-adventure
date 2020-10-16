export default [
    {
        id: 'covid',
        title: 'The Plague',
        image: 'covid.png',
        description: `
        COVID is sweeping across the country, with an exponentially rising death toll, do you take any precautions?
    `,
        choices: [{
            id: 'no',
            description: 'Fuck No!',
            result: `
            Congratulations, you excercise your first amendment rights and kill your elderly parents, like a patriot! 
            Also take 5 damage you hero.
        `,
            hp: -5,
            fascism: 5,
            class: 'poor',

        }, {
            id: 'essential',
            description: 'I would, but I\'m an essential employee...',
            result: `
            You die of Corona. Capitilism thanks you for your sacrifice by sending your medical bills to your family.
        `,
            hp: -10,
            fascism: 0,
            class: 'poor',

        }, {
            id: 'yes',
            description: 'I mean yeah, obviously, it\'s a deadly pandemic',
            result: `
            Coward. You unpatrioticaly neither die from, nor kill anyone else with, Corona Virus. 
            You probably wear a seat-belt too, loser.
        `,
            hp: 0,
            fascism: 0,
            class: 'poor',

        }]
    },
    {
        id: 'protests',
        title: 'Protest police brutality',
        
        image: 'protest.png',
     
        description: `
        People are protesting in the streets for Black lives! What do you do?
    `,
        choices: [{
            id: 'home',
            description: 'Stay home, maybe send a supportive tweet',
            result: `
            You thought you would be safe at home. But you know where terrorists live? In houses. 
            Your local police force has taken it upon itself to protetct and serve
            your neighborhood by teargassing the shit out of it. You're welcome. Also take 5 damage. Coward.
        `,
            hp: -5,
            fascism: 1,
            class: 'poor',

        }, {
            id: 'join',
            description: 'Join the protest!',
            result: `
            Look at you, with your direct action. I mean sure, technically 
            you're a terrorist now, but you made that decision the second 
            you decided state sanctioned murder was bad. Oh also the police beat the
            shit out of you. Take 5 damage. 
        `,
            hp: -5,
            fascism: 0,
            class: 'poor',

        }, {
            id: 'murder',
            description: 'Go murder random strangers on the street like a patriot!',
            result: `
            Congratulations, you succesfully murder like 6 innocent people! You get  
            deputized by your local police force, become a hero to the Right, and have a 
            real shot at the 2024 presidency!
        `,
            hp: 0,
            fascism: 50,
            class: 'poor',

        }]
    },
    {
        id: 'food',
        title: 'Have a bite to eat',
        image: 'food.png',
        description: `

        You're hungry, what do you eat?
    `,
        choices: [{
            id: 'pizza',
            description: 'Pizzas always safe',
            result: 'Just as you are about to enjoy your \'za, you get gunned down by a Qanon cultist convinced there is a child trafficing ring operating under the pizza shop. You fool, you thought 2020 couldn\'t take pizza, but 2020 will take everything.',
            hp: -10,
            fascism: 0,
            class: 'poor',

        }, {
            id: 'soup',
            description: 'Some soup to feed your family',
            result: 'As you leave the store with your can of soup, an unmarked van swoops you up. You are never heard from again, but years later a FOIA request finds that the FBI linked you to numerous  soup related acts of terror. ',
            hp: -10,
            fascism: 0,
            class: 'poor',

        }, {
            id: 'eat-poor',
            description: 'Eat the poor',
            result: 'They\'re not the most tender, the marbling isn\'t great, and they complain a lot. But I mean if they didn\'t want to be eaten they shouldn\'t have decided to be poor.',
            hp: 0,
            fascism: 10,
            class: 'poor',
        }, {
            id: 'eat-rich',
            description: 'Eat the rich',
            result: 'Mmmmm good for the heart and the soul. Bad for the rich. Gain 10 health. Also you\'re rich now. Congratulations.',
            hp: 10,
            fascism: 0,
            class: 'rich',
            
        }]
    }
];