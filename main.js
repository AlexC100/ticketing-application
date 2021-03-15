// UI Variables
const ticketsList = document.querySelector("#tickets-list");

let ticketsDb = [];
// Populate table with tickets
axios
  .get("tickets.json")
  .then((res) => {
    ticketsDb = res.data;
    let output = "";
    res.data.forEach((ticket) => {
      output += `
          <tr>
            <td><p class="right-border">${ticket.id}</p></td>
            <td><p class="right-border">${ticket.title}</p></td>
            <td><p class="right-border">${ticket.user}</p></td>
            <td><p class="right-border">${ticket.department}</p></td>
            <td>${ticket.status}</td>
          </tr>
        `;
    });
    ticketsList.innerHTML = output;
  })
  .catch((err) => console.log(err));

// Ag Grid //
// Specify columns
const columnDefs = [
  { field: "id", sortable: true, filter: true },
  { field: "title", sortable: true, filter: true },
  { field: "user", sortable: true, filter: true },
  { field: "department", sortable: true, filter: true },
  { field: "status", sortable: true, filter: true },
];

const rowData = [];

agGrid.simpleHttpRequest({ url: "tickets.json" }).then((data) => {
  gridOptions.api.setRowData(data);
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
