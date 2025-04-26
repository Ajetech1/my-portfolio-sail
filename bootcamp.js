const scriptURL =
  "https://script.google.com/macros/s/AKfycbw3Elro1lvmJqIaxahca_O3YBO5iaHf4mdY4daKQzlsAeBkDfkFqUjbvtAvcSDJjhgx/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const spinner = document.getElementById("spinner");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Disable submit button and show spinner
  submitButton.disabled = true;
  spinner.style.display = "inline-block";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML =
        "Thank you! Your application was submitted. We'll contact you within 2 weeks.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();

      // Re-enable button and hide spinner
      submitButton.disabled = false;
      spinner.style.display = "none";
    })
    .catch((error) => {
      console.error("Error!", error.message);

      // Re-enable button and hide spinner on error
      submitButton.disabled = false;
      spinner.style.display = "none";
    });
});
