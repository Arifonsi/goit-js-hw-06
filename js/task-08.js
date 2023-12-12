// function handleSubmit(event) {
//   event.preventDefault();

//   const form = event.target;
//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();

//   if (email === "" || password === "") {
//     alert("Por favor, rellena todos los campos.");
//   } else {
//     const formData = {
//       email,
//       password,
//     };

//     console.log("Datos del formulario:", formData);
//     form.reset();
//   }
// // }

const loginForm = document.querySelector("loginForm");
document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.element.password;

    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      alert("!completar todos los campos, por faavor¡");
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      console.log(formData);
      this.reset();
    }
  });
