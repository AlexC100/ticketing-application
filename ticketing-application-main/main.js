// UI Variables
const ticketsList = document.querySelector("#tickets-list");

// Populate table with tickets
axios
  .get("tickets.json")
  .then((res) => {
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
