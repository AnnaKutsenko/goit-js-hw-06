// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', changeInput);

function changeInput(evt) {
    span.style.fontSize = `${evt.target.value}px`;
    console.log(span.style.fontSize );
}