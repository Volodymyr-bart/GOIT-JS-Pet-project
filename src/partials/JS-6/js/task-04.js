/*
Лічильник складається зі спану і кнопок, 
які по кліку повинні збільшувати і зменшувати його значення на одиницю.
1) Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
3) Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;
const btnDec = document.querySelector(`button[data-action="decrement"]`);
const btnInc = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);


btnInc.addEventListener("click",  () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
} );

btnDec.addEventListener("click",  () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

// ======================================================================================================
// const CounterPlugin = function ({rootSelector, counterValue = 0, step = 1 } = {}) {
    
//     this._value = counterValue;
//     this._step = step;
//     this._getRefs(rootSelector);
//     this._bindEvents();
// }
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.decrementBtn = refs.container.querySelector('button[data-action="decrement"]');
//     refs.icrementBtn = refs.container.querySelector('button[data-action="increment"]');
//     refs.value = refs.container.querySelector('#value')
//     return refs    
// }

// CounterPlugin.prototype._bindEvents = function () {
//     this._refs.decrementBtn.addEventListenre('click', () => {
//         this.decrement();
//         this.updateValueUI();
//     });
//     this._refs.icrementBtn.addEventListenre('click', () => {
//         this.icrement();
//         this.updateValueUI();
//     });    
// }
// CounterPlugin.prototype.updateValueUI = function () {
//     this._refs.value.textContent = this._value;
    
// }

// CounterPlugin.prototype.icrement = function () {
//     this._value += this._step;    
// }

// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;    
// }

// new CounterPlugin({ rootSelector: '#counter' });
