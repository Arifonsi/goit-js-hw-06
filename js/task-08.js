function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("Por favor, rellena todos los campos.");
  } else {
    const formData = {
      email,
      password,
    };

    console.log("Datos del formulario:", formData);
    form.reset();
  }
}
