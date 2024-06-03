const chartSizes = document.getElementById("chartSizes");
const filterSize = document.getElementById("filter_size");
let chartSizesCanvas = null;

// Update chart
const updateChartSizes = (labels, datasets, monthly_filter = null) => {
    const filteredDatasets = datasets.map(dataset => ({
        ...dataset,
        data: getFilteredData(dataset.data, monthly_filter)
    }));

    if (chartSizesCanvas) {
        chartSizesCanvas.destroy();
    }

    chartSizesCanvas = new Chart(chartSizes, {
        type: "bar",
        data: {
            labels: labels,
            datasets: filteredDatasets
        },
    });
}

// Render chart with optional monthly filter
const renderChartSizes = (monthly_filter = null) => {
    fetch('./json/salesPizzabySize.json')
        .then(response => response.json())
        .then(response => {
            const allData = response.datasets;
            const selectedSize = filterSize.value;
            
            let datasetsToRender;
            if (selectedSize === "0") {
                // Display all sizes
                datasetsToRender = allData.map(dataset => ({
                    label: dataset.label,
                    data: dataset.data,
                    borderWidth: 2,
                    borderColor: getRandomColor(),
                    backgroundColor: getRandomColor(0.5),
                    fill: true,
                }));
            } else {
                datasetsToRender = [
                    {
                        label: allData[parseInt(selectedSize) - 1].label,
                        data: allData[parseInt(selectedSize) - 1].data,
                        borderWidth: 2,
                        borderColor: "rgb(255, 1, 1)",
                        backgroundColor: "rgba(255, 1, 1, 0.5)",
                        fill: true,
                    }
                ];
            }

            updateChartSizes(monthLabels, datasetsToRender, monthly_filter);
        })
        .catch(err => {
            console.log(err);
        });
};

renderChartSizes();

// Update chart based on monthly filter
filterMonthly.addEventListener("input", function () {
    let month = filterMonthly.value ? filterMonthly.value : null;
    renderChartSizes(month);
});

// Update chart based on size filter
filterSize.addEventListener("input", function () {
    let month = filterMonthly.value ? filterMonthly.value : null;
    renderChartSizes(month);
});

// Helper function to generate random colors for datasets
function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
