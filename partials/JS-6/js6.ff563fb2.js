document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,password:r}}=e.currentTarget;if(0===t.value.length||0===r.value.length)return alert("Попередженням про те, що всі поля повинні бути заповнені!");console.log({email:t.value,password:r.value}),e.currentTarget.reset()}));
//# sourceMappingURL=js6.ff563fb2.js.map
