document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const { email, password } = loginForm.elements;

    if (!email.value || !password.value) {
      alert("All fields must be filled in.");
      return;
    }

    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    loginForm.reset();
  });
});
