// UI Variables
const ticketTitleInput = document.querySelector("#ticketTitle-input");
const selectDepartament = document.querySelector("#select-departament");
const selectPriority = document.querySelector("#select-priority");
const uploadFileBtn = document.querySelector("#uploadFile-btn");
const textAreaInput = document.querySelector("#textArea-input");
const sendTicketBtn = document.querySelector("#sendTicket-btn");
const notificationAlert = document.querySelector(".notification-alert");

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

sendTicketBtn.addEventListener("click", () => {
  if (ticketTitleInput.value === "" || selectDepartament.value === "") {
    displayAlert("You must fill in the title and department fields!");
  } else {
    displayAlert("Ticket created successfully!");
    setTimeout(() => {
      window.location.replace("../tickets.html");
    }, 3000);
  }
});
