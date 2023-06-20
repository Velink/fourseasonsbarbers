let left = document.getElementById('left-dance');
let right = document.getElementById('right-dance');

let navDance = document.getElementById('navbar');
let introDance = document.getElementById('intro');

window.addEventListener('load', () => {
    left.classList.toggle('move');
    right.classList.toggle('move');
    navDance.classList.toggle('move');
})