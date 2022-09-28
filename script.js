const submitButton = document.querySelector('#submit_button');

submitButton.addEventListener('click', (e) => {
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm_password').value;

  if (!password || !confirmPassword) {
    return;
  }

  if (password !== confirmPassword) {
    alert('Password and confirmation do not match.');
    e.preventDefault();
  }
});