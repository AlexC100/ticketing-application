// UI Variables
 


// Utility variables
let ticketsDb = [];



// Populate table with tickets
axios
  .get("tickets.json")
  .then((res) => {
    ticketsDb = res.data;

    // Nu cred ca mai e nevoie? Stergi tu daca e
    //==================================================================================
    // let output = "";
    // res.data.forEach((ticket) => {
    //   output += `
    //       <tr>
    //         <td><p class="right-border">${ticket.id}</p></td>
    //         <td><p class="right-border">${ticket.title}</p></td>
    //         <td><p class="right-border">${ticket.user}</p></td>
    //         <td><p class="right-border">${ticket.department}</p></td>
    //         <td>${ticket.status}</td>
    //       </tr>
    //     `;
    // });
    // ticketsList.innerHTML = output;
    //==================================================================================
  })
  .catch((err) => console.log(err));

// Ag Grid //
// Specify columns
const columnDefs = [
  { field: "id", lockPosition: true,  filter: true }, //eu zic ca e mai bine ca id-ul sa ramane pe pozitie, si oricum bagam filter dupa criteriu pe care il vrea
  { field: "title",  filter: true },
  { field: "user",  filter: true },
  { field: "department", filter: true },
  { field: "status", filter: true },
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
  gridOptions.api.setQuickFilter(document.getElementById('filter-text-box').value); //asta nu cred ca o sa ramana asa, trebuie facut altfel
}

