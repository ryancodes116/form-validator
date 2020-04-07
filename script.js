const form = document.querySelector('.form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitButton = document.getElementById('btn');

form.addEventListener('submit', validateForm);

function validateForm(e) {
  checkForEmptyInputs();
  checkPasswordsMatch(password, password2);
  e.preventDefault();
}

function checkPasswordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, 'Passwords do not match');
  }
}

function checkForEmptyInputs() {
  const inputs = document.querySelectorAll('.form-control');
  inputs.forEach(function (input) {
    if (input.value === '') {
      showError(input, 'required field');
    } else {
      input.style.borderColor = 'green';
    }
  });
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const div = document.createElement('div');
  div.className = 'text-danger';
  div.innerText = message;
  formGroup.appendChild(div);
  input.style.borderColor = 'red';
  setTimeout(function () {
    div.remove();
  }, 2000);
}
