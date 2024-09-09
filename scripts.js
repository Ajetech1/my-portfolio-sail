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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show the spinner
  spinner.style.display = "inline-block";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
      // Hide the spinner after response
      spinner.style.display = "none";
    })
    .catch((error) => {
      console.error("Error!", error.message);
      // Hide the spinner in case of error
      spinner.style.display = "none";
    });
});
