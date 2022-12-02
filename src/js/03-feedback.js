import throttle from 'lodash.throttle';
const Form = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
fillForm();
const key = 'feedback-form-state';
let formData = {};
Form.form.addEventListener('input', onFormInput);
Form.form.addEventListener('submit', throttle(onFormSubmit, 500));

function onFormInput(e) {
  if (localStorage.getItem(key) === '') {
    formData = JSON.parse(localStorage.getItem(key));
  }
  formData[e.target.name] = e.target.value;
  const JSONformData = JSON.stringify(formData);
  localStorage.setItem(key, JSONformData);
}
function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(key);
  e.currentTarget.reset();
  formData = {};
  console.log(formData);
}
function fillForm() {
  const formObject = JSON.parse(localStorage.getItem(key));
  if (formObject === '') {
    const { email, message } = formObject;
    Form.email.value = email;
    Form.textarea.value = message;
  }
}
