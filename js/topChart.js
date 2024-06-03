const chartTop = document.getElementById("chartTop");
let chartTopCanvas = null;

// Update pie chart
const updateTopChart = (labels, data, colors) => {
    if (chartTopCanvas) {
        chartTopCanvas.destroy();
    }

    chartTopCanvas = new Chart(chartTop, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Top 5 Pizza'
                }
            }
        }
    });
}

// Render pie chart without filter
const renderTopChart = () => {
    fetch('./json/top5pizza.json')
        .then(response => response.json())
        .then(response => {
            const allData = response.datasets;
            
            let labels = allData.map(dataset => dataset.label);
            let dataValues = allData.map(dataset => dataset.data);
            let colors = allData.map(() => getRandomColor(0.5));

            updateTopChart(labels, dataValues, colors);
        })
        .catch(err => {
            console.log(err);
        });
};

renderTopChart();

// Helper function to generate random colors for datasets
function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
