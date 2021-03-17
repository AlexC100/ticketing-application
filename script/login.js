// UI Variables
const userNameInput = document.querySelector("#username-input");
const passwordInput = document.querySelector("#password-input");
const notificationAlert = document.querySelector(".notification-alert");
const loginBtn = document.querySelector("#login-btn");

// Display alert
function displayAlert() {
  notificationAlert.innerText =
    "You must enter the correct username and password!";
  notificationAlert.classList.add("alert-secondary");
  notificationAlert.classList.remove("d-none");
  setTimeout(function () {
    notificationAlert.innerText =
      "You must enter the correct username and password!";
    notificationAlert.classList.add("d-none");
    notificationAlert.classList.remove("alert-secondary");
  }, 3000);
}

// Validation
// Listen for click event on login button
loginBtn.addEventListener("click", () => {
  if (userNameInput.value === "" || passwordInput.value === "") {
    displayAlert();
  } else {
    console.log(window.location.replace("../tickets.html"));
  }
});
