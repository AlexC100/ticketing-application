// UI Variables
const fullNameInput = document.querySelector("#fullName-input");
const selectDepartament = document.querySelector("#select-departament");
const emailInput = document.querySelector("#email-input");
const phoneNumberInput = document.querySelector("#phoneNumber-input");
const typePasswordInput = document.querySelector("#typePassword-input");
const retypePasswordInput = document.querySelector("#retypePassword-input");
const registerBtn = document.querySelector("#register-btn");
const notificationAlert = document.querySelector(".notification-alert");

// Display alert
function displayAlert(message) {
  notificationAlert.innerText = message;
  notificationAlert.classList.add("alert-secondary");
  notificationAlert.classList.remove("d-none");
  setTimeout(function () {
    notificationAlert.innerText =
      "You must enter the correct username and password!";
    notificationAlert.classList.add("d-none");
    notificationAlert.classList.remove("alert-secondary");
  }, 3000);
}

//Validation
registerBtn.addEventListener("click", () => {
  if (
    fullNameInput.value === "" ||
    selectDepartament.value === "" ||
    emailInput.value === "" ||
    phoneNumberInput.value === "" ||
    typePasswordInput.value === "" ||
    retypePasswordInput.value === ""
  ) {
    displayAlert("You must fill in all fields!");
  } else {
    displayAlert("Account created successfully!");
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }
});
