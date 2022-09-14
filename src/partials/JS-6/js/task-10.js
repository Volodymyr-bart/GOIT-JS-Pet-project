/*
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX.
 Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const inputCountDiv = document.querySelector('#controls [type="number"]');
const blockDiv = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
// console.log(createBtn);
// console.log(destroyBtn);
// console.dir(inputCountDiv);
let inputValue = 0;
inputCountDiv.addEventListener(`input`, (event) => {
  return (inputValue = event.currentTarget.value);
});


function createBoxes(amount) {
  amount = inputValue;
  // console.log(amount);
  const elements = [];
  const size = 30;
  for (let i = 0; i < amount; i += 1) {
    const elementDiv = document.createElement('div');
    elementDiv.style.backgroundColor = `${getRandomHexColor()}`;
    elementDiv.style.width = `${size + i*10}px`;
    console.log(elementDiv.style.width);
    elementDiv.style.height = `${size + i*10}px`;
    elements.push(elementDiv);
    // console.log(elements);  
  }
  blockDiv.append(...elements);  
  // console.log(blockDiv);
}

function destroyBoxes() {
  boxes.innerHTML = ``;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);