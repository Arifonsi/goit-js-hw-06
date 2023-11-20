document
  .getElementById("validation-input")
  .addEventListener("blur", function () {
    const input = this;
    const length = parseInt(input.getAttribute("data-length"));
    const value = input.value.trim().length;

    if (value === length) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
