// Fetch the JSON file
fetch('revenue&quantitygrowth.json')
    .then(response => response.json())
    .then(data => {
        // Get the context of the canvas element we want to select
        const Growth = document.getElementById('chartGrowth').getContext('2d');

        // Create a new Chart instance
        new Chart(Growth, {
            type: 'line',  
            data: {
                labels: data.labels,
                datasets: data.datasets
            },
            options: {
                responsive: true,
        
            }
        });
    })
    .catch(error => console.error('Error fetching the JSON data:', error));
