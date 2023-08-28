// let sections = document.querySelectorAll('.section-done');
// for (let section of sections) {
//     section.addEventListener('click', doneHabit);
// }

function doneHabit () {
    this.classList.toggle('section-done-true');
}