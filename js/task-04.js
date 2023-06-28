// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);
const valueBtn = document.querySelector('#value');

decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);

function decrementBtnClick() {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
}

function incrementBtnClick() {
    counterValue += 1;
    valueBtn.textContent = counterValue;
}

