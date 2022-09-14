/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
де ім'я поля буде ім'ям властивості,
а значення поля - значенням властивості.
Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);


// console.dir(form);

function onFormSubmit(event) {
  // забирає оновлення після натискання кнопки
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;

  if (email.value.length === 0 || password.value.length === 0) {
    return alert(`Попередженням про те, що всі поля повинні бути заповнені!`)
  }
  console.log({
    email: email.value,
    password: password.value,
  });
 
  event.currentTarget.reset();
};
// ============================================================================================
  // const formData = {
  //   email,
  //   password,
  // }

  // const formData = new FormData(event.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(name);
  //   console.log(value);
  // });

