// Responsive Navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const hamBurger = document.getElementById('burger');
const crossButton = document.getElementById('cross');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    hamBurger.classList.toggle('hide')
    crossButton.classList.toggle('show')
})

window.addEventListener('click', (e) => {
    if(e.target.id !== "burger" && e.target.id !== "navbar" && e.target.id !== "navbar-links" && e.target.id !== "toggle-button" && e.target.id !== "cross" && e.target.classList[0] !== 'nav-li' && e.target.classList[0] !== 'fa-solid'){
        navbarLinks.classList.remove('active');
        crossButton.classList.remove('show');
        hamBurger.classList.remove('hide');
    }
})




// var example = ['A', 'B', 'C', 'D'];

// textSequence(0);
// function textSequence(i) {

//     if (example.length > i) {
//         setTimeout(function() {
//             document.getElementById("sequence").innerHTML = example[i];
//             textSequence(++i);
//         }, 2000); // 1 second (in milliseconds)

//     } else if (example.length == i) { // Loop
//         textSequence(0);
//     }
// }


// var opacity = 0;
// var intervalID = 0;
// window.onload = fadeIn;

// function fadeIn() {
//     setInterval(show, 400);
// }

// function show() {
//     var body = document.getElementById("body2");
//     opacity = Number(window.getComputedStyle(body)
//                      .getPropertyValue("opacity"));
//     if (opacity < 1) {
//         opacity = opacity + 0.1;
//         body.style.opacity = opacity
//     } else {
//         clearInterval(intervalID);
//         hide();
//     }
// }

// function fadeOut (){
//     setInterval(hide, 400)
// }

// function hide() {
//     var body = document.getElementById("body2");
//     opacity = Number(window.getComputedStyle(body)
//                      .getPropertyValue("opacity"));
//     if (opacity !== 0) {
//         opacity = opacity - 0.1;
//         body.style.opacity = opacity
//         hide()
//     } else {
//         clearInterval(intervalID);
//     }
// }

