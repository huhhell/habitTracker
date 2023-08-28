let addHabitButton = document.querySelector('.app__add');
addHabitButton.addEventListener('click', addHabitField);

let isHabitInputActive = false;

function addHabitField () {
    if (!isHabitInputActive) {
        // change error field
        return;
    }
    let habit = document.createElement('div');
    habit.classList.add('app__habit');
    habit.innerHTML = '<div class="app__habit-name-add">\n' +
        '                        <label for="app__habit-name-add-input"></label>\n' +
        '                        <input type="text" class="app__habit-name-add-input" id="app__habit-name-add-input" placeholder="Habit">\n' +
        '                    </div>\n' +
        '                    <div class="app__habit-done section section-done"></div>\n' +
        '                    <div class="app__habit-done section section-done"></div>\n' +
        '                    <div class="app__habit-done section section-done"></div>\n' +
        '                    <div class="app__habit-done section section-done"></div>\n' +
        '                    <div class="app__habit-done section section-done"></div>\n' +
        '                    <div class="app__habit-done section section-done"></div>\n' +
        '                    <div class="app__habit-done section section-done"></div>';

    let app = document.querySelector('.app');
    app.append(habit);
    isHabitInputActive = true;

    let inputHabitField = document.querySelector('.app__habit-name-add-input');
    inputHabitField.addEventListener('change', submitHabitField);
}

function submitHabitField (e) {
    let habitName = e.target.value;
    if (habitName === '') {} // add error field

    let habit = e.target.parentNode.parentNode;

    let habitTitleElement = document.createElement('div');
    habitTitleElement.classList.add('app__habit-name');
    habitTitleElement.innerHTML = e.target.value;

    let habitInput = document.querySelector('.app__habit-name-add');
    habitInput.remove();
    habit.prepend(habitTitleElement);
    isHabitInputActive = false;

    e.target.removeEventListener('change', submitHabitField);
}

