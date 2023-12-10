/* fetch('data/pricing.json')
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('rentalTable');
                data.forEach(item => {
                    const row = table.insertRow();
                    Object.values(item).forEach(val => {
                        const cell = row.insertCell();
                        cell.textContent = val;
                    });
                });
            });
*/
            fetch('data/pricing.json')
            .then(response => response.json())
            .then(data => {
                let vehicles = data.web.vehicles;
                let output = '';

                for (let vehicle in vehicles) {
                    output += `
                        <h2>${vehicles[vehicle].title}</h2>
                        <p>Maximum Passengers: ${vehicles[vehicle].max_persons}</p>
                        <p>Rental Types:</p>
                        <ul>
                    `;

                    for (let rental_type in vehicles[vehicle].rental_types) {
                        output += `
                            <li>${rental_type} - $${vehicles[vehicle].rental_types[rental_type].price}</li>
                        `;
                    }

                    output += '</ul>';
                }

                document.getElementById('rentalTable').innerHTML = output;
            })
            .catch(error => console.error('Error:', error));

    