// script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signUpForm");

  form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Check if form is valid
      if (form.checkValidity() === false) {
          form.classList.add("was-validated");
      } else {
          // Custom validation
          const password = document.getElementById("password").value;
          const confirmPassword = document.getElementById("confirmPassword").value;

          if (password !== confirmPassword) {
              document.getElementById("confirmPassword").setCustomValidity("Passwords do not match");
              form.classList.add("was-validated");
          } else {
              document.getElementById("confirmPassword").setCustomValidity("");
              form.classList.add("was-validated");

              // Form is valid and ready to be submitted
              alert("Form submitted successfully!");
              form.submit();
          }
      }
  });

  // Remove custom validation message on input change
  document.getElementById("confirmPassword").addEventListener("input", function () {
      this.setCustomValidity("");
  });
});
