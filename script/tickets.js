// UI Variables
const createTicketBtn = document.querySelector("#create-ticket");
// Utility variables
let ticketsDb = [];

// Populate table with tickets
axios
  .get("tickets.json")
  .then((res) => {
    ticketsDb = res.data;
  })
  .catch((err) => console.log(err));

// Ag Grid //
// Specify columns
const columnDefs = [
  { field: "id", lockPosition: true }, //eu zic ca e mai bine ca id-ul sa ramana pe pozitie, si oricum bagam filter dupa criteriu pe care il vrea
  { field: "title" },
  { field: "user" },
  { field: "department" },
  { field: "status" },
];

const rowData = [];

agGrid.simpleHttpRequest({ url: "tickets.json" }).then((data) => {
  gridOptions.api.setRowData(data);
  gridOptions.api.sizeColumnsToFit(); //am adaugat asta sa nu mai arate bara orizontala jos, in tabel (vedem noi cum ramane mai incolo dar parca da mai bine asa)
});

// let the grid know which columns and what data to use
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
};

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector("#myGrid");

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);

function openTicket(event) {
  ticketsDb.forEach((ticket) => {
    if (
      event.target.innerHTML === ticket.id ||
      ticket.title ||
      ticket.user ||
      ticket.department ||
      ticket.status
    ) {
      console.log(event.target.innerHTML);
    }
  });
}

eGridDiv.addEventListener("click", (e) => {
  openTicket(e);
});

function onFilterTextBoxChanged() {
  gridOptions.api.setQuickFilter(
    document.getElementById("filter-text-box").value
  ); //asta nu cred ca o sa ramana asa, trebuie facut altfel
}

// Listen for click event on create ticket button
createTicketBtn.addEventListener("click", () => {
  window.location.replace("../newticket.html");
});
