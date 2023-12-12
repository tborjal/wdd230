const baseURL = "https://tborjal.github.io/wdd230/"; // Replace with your actual GitHub Pages URL
const linksURL = `${baseURL}finalproject/data/pricing.json`;

fetch(linksURL)
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('tableBody');

  data.rentalType.forEach(item => {
    const row = `
      <tr>
        <td>${item["type"]}</td>
        <td>${item["maxPersons"]}</td>
        <td>${item["halfDayReservationPrice"]}</td>
        <td>${item["fullDayReservationPrice"]}</td>
        <td>${item["halfDayWalkInPrice"]}</td>
        <td>${item["fullDayWalkInPrice"]}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
});