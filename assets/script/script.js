let slide1 = document.querySelector(".course-cards");

let x = 0;


function position() {
    slide1.style.transform = `translateX(${x}px)`
}
function slide() {
    x = x - 750
    position()
}
function slide2() {
    x = x + 750
    position()
}
