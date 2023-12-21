document.addEventListener("DOMContentLoaded", function () {
  const validationInput = document.getElementById("validation-input");

  validationInput.addEventListener("blur", function () {
    const expectedLength = parseInt(
      validationInput.getAttribute("data-length"),
      10
    );
    const enteredLength = validationInput.value.trim().length;

    validationInput.classList.toggle("valid", enteredLength === expectedLength);
    validationInput.classList.toggle(
      "invalid",
      enteredLength !== expectedLength
    );
  });
});
