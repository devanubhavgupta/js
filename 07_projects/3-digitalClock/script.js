const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1);
