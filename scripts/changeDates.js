let dateFields = document.querySelectorAll('.app__dates-item');

let today = new Date();

dateFields[0].innerHTML = `${today.getDate()}/${today.getMonth()}`;
for (let i = 1; i < 7; i++) {
    today.setDate(today.getDate() + 1);
    dateFields[i].innerHTML = `${today.getDate()}/${today.getMonth()}`;
}