let sections = document.querySelectorAll('.section-done');
for (let section of sections) {
    section.addEventListener('click', doneHabit);
}

function doneHabit (e) {
    e.target.classList.toggle('section-done-true');
}