import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

const key = 'feedback-form-state';
fillForm();
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const storageValue = localStorage.getItem(key);
  const usersData = storageValue ? JSON.parse(storageValue) : {};
  usersData[e.target.name] = e.target.value;
  localStorage.setItem(key, JSON.stringify(usersData));
}
function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;
  console.log({
    email: email.value,
    message: message.value,
  });
  localStorage.removeItem(key);
  e.currentTarget.reset();
}
function fillForm() {
  const storageValue = localStorage.getItem(key);
  if (!storageValue) return;
  const formObject = JSON.parse(localStorage.getItem(key));
  const { email, message } = formObject;
  form.email.value = email;
  form.message.value = message;
}
