const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = formEl.elements;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }

  const formValues = {
    email: email.value,
    password: password.value,
  };

  console.log(formValues);
  formEl.reset();
});
