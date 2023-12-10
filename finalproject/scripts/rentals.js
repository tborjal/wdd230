fetch('..data/pricing.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tableBody');

        data.forEach(item => {
            const row = `<tr>
                                <td>${item["Rental Type"]}</td>
                                <td>${item["Half Day (3 hrs)"]}</td>
                                <td>${item["Full Day"]}</td>
                           </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error:', error));
    