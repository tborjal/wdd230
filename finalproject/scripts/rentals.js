fetch('data/pricing.json')
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