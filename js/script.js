const form = document.querySelector("form");
const errors = document.querySelectorAll(".error-msg");
const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');
const email = document.querySelector('input[type="email"]');
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener('submit', event => {
    inputs.forEach((input, i) => {
      if(input.value.trim() === '') {
        event.preventDefault();
        errors[i].style.display = "block";
        input.classList.add('error');
        email.classList.add('placeholderred');
        email.placeholder = "email@example.com";
      } else {
        errors[i].style.display = "none";
        input.classList.remove('error');
      }
    })
});

