// Navbar side menu open & close toggler begins here
var sideMenu = document.getElementById("sidemenu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}

// contact form submitting to google sheet begin here

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbyhyGAxGn0ptcdxpi1ubUWqsA6Bda5MRIhVDJfE5Wci1trCo14MZj8FoImAajjVhDj1Sg/exec";
// const form = document.forms["submit-to-google-sheet"];

// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message sent successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyhyGAxGn0ptcdxpi1ubUWqsA6Bda5MRIhVDJfE5Wci1trCo14MZj8FoImAajjVhDj1Sg/exec";
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
        "Message sent successfully, Thank you for celebrating my birthday🎁🎂🎀💗";
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
