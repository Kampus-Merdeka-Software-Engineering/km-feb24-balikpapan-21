const chartCategory = document.getElementById("chartCategory");
const filterCategory = document.getElementById("filter_category");
let chartCategoryCanvas = null;

// Update chart
const updateChartCategory = (labels, datasets, monthly_filter = null) => {
    const filteredDatasets = datasets.map(dataset => ({
        ...dataset,
        data: getFilteredData(dataset.data, monthly_filter)
    }));

    if (chartCategoryCanvas) {
        chartCategoryCanvas.destroy();
    }

    chartCategoryCanvas = new Chart(chartCategory, {
        type: "bar",
        data: {
            labels: labels,
            datasets: filteredDatasets
        },
    });
}

// Render chart with optional monthly filter
const renderChartCategory = (monthly_filter = null) => {
    fetch('./json/salesPizzabyCategory.json')
        .then(response => response.json())
        .then(response => {
            const allData = response.datasets;
            const selectedCategory = filterCategory.value;
            
            let datasetsToRender;
            if (selectedCategory === "0") {
                // Display all categories
                datasetsToRender = allData.map(dataset => ({
                    label: dataset.labels,
                    data: dataset.data,
                    borderWidth: 2,
                    borderColor: getRandomColor(),
                    backgroundColor: getRandomColor(0.5),
                    fill: true,
                }));
            } else {
                datasetsToRender = [
                    {
                        label: allData[parseInt(selectedCategory) - 1].labels,
                        data: allData[parseInt(selectedCategory) - 1].data,
                        borderWidth: 2,
                        borderColor: "rgb(255, 224, 47)",
                        backgroundColor: "rgba(255, 224, 47, 0.5)",
                        fill: true,
                    }
                ];
            }

            updateChartCategory(monthLabels, datasetsToRender, monthly_filter);
        })
        .catch(err => {
            console.log(err);
        });
};

renderChartCategory();

// Update chart based on monthly filter
filterMonthly.addEventListener("input", function () {
    let month = filterMonthly.value ? filterMonthly.value : null;
    renderChartCategory(month);
});

// Update chart based on category filter
filterCategory.addEventListener("input", function () {
    let month = filterMonthly.value ? filterMonthly.value : null;
    renderChartCategory(month);
});

// Helper function to generate random colors for datasets
function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
