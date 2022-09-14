document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,t=r.email,l=r.password;if(0===t.value.length||0===l.value.length)return alert("Попередженням про те, що всі поля повинні бути заповнені!");console.log({email:t.value,password:l.value}),e.currentTarget.reset()}));
//# sourceMappingURL=js6.a427dbc2.js.map
