/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const refs = {
  inputEl: document.querySelector('#validation-input'),  
};
const validRule = Number(refs.inputEl.dataset.length);
console.log(validRule);


refs.inputEl.addEventListener('blur', onInputBlur);

function onInputFocus() {
  console.log('Focus');    
}

function onInputBlur(event) {
  console.log('Blur');
  if (event.currentTarget.value.length === validRule) {
      // console.log(`valid`);
      refs.inputEl.classList.add(`valid`);
      refs.inputEl.classList.remove(`invalid`);
  } else {
    // console.log(`not valid`);
      refs.inputEl.classList.remove(`valid`);
      refs.inputEl.classList.add(`invalid`);
    
    }
    
}
