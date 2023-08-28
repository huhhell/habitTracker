let addHabitButton = document.querySelector('.app__add');
addHabitButton.addEventListener('click', addHabitField);

let isHabitInputActive = false;
let errorElement = document.querySelector('.app__error');

function addHabitField () {
    if (isHabitInputActive) {
        errorElement.innerHTML = 'error: adding field is already exists';
        return;
    }
    errorElement.innerHTML = '';

    let habit = document.createElement('div');
    habit.classList.add('app__habit');
    habit.innerHTML = '<div class="app__habit-name-add">\n' +
        '                        <label for="app__habit-name-add-input"></label>\n' +
        '                        <input type="text" class="app__habit-name-add-input" id="app__habit-name-add-input" placeholder="Habit">\n' +
        '                    </div>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>\n' +
        '                    <button class="app__habit-done section section-done" onclick="doneHabit.call(this)"></button>';

    let app = document.querySelector('.app');
    app.append(habit);
    isHabitInputActive = true;

    let inputHabitField = document.querySelector('.app__habit-name-add-input');
    inputHabitField.addEventListener('change', submitHabitField);
}

function submitHabitField (e) {
    let habitName = e.target.value;
    if (habitName === '') return;
    errorElement.innerHTML = ''

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

