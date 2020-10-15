

const form = document.querySelector('form');

function makePlayer(data) {
    const user = {
        name: data.get('name'),
        class: data.get('class'),
        health: 10,
    };
    return user;

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form)
    const player = makePlayer(data);
    if (player.class === 'rich'){
        window.location.href = './results';
    } else {
        window.location.href = './calender';
    }


    console.log(player);
});
