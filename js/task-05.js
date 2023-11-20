const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const updateName = () => {
  const newName = nameInput.value.trim();
  nameOutput.textContent = newName || "Anonymous";
};

nameInput.addEventListener("input", updateName);

window.addEventListener("load", updateName);
