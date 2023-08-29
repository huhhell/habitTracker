let habitsNames = document.querySelectorAll('.app__habit-name');
for (let habit of habitsNames) {
    habit.addEventListener('click', changeHabit);
}

function changeHabit(e) {
    if (isHabitInputActive) return;
    isHabitInputActive = true;
    let changeFieldElement = document.createElement('div');
    changeFieldElement.classList.add('app__habit-name-add');
    changeFieldElement.innerHTML = '  <label for="app__habit-name-add-input"></label>\n' +
        '                       <input type="text" class="app__habit-name-add-input" id="app__habit-name-add-input" placeholder="Habit">';


    let habit = e.target.parentNode;
    habit.prepend(changeFieldElement);

    let changeInputElement = document.querySelector('.app__habit-name-add-input');
    changeInputElement.value = e.target.innerHTML;

    e.target.remove();

    changeInputElement.addEventListener('blur', changeHabitField);
}

function changeHabitField(e) {
    if (e.target.value === '') return;
    errorElement.innerHTML = '';

    let habit = e.target.parentNode.parentNode;

    let habitTitleElement = document.createElement('div');
    habitTitleElement.classList.add('app__habit-name');
    habitTitleElement.innerHTML = e.target.value;

    let habitInput = document.querySelector('.app__habit-name-add');
    habitInput.remove();
    habit.prepend(habitTitleElement);
    isHabitInputActive = false;
    habitTitleElement.addEventListener('click', changeHabit);
}