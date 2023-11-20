document
  .getElementById("font-size-control")
  .addEventListener("input", function () {
    let fontSize = this.value;

    document.getElementById("text").style.fontSize = fontSize + "px";
  });
