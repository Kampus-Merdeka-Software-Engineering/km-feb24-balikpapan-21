const chartDay = document.getElementById("chartDay");
const filterDay = document.getElementById("filter_Day");
let chartDayCanvas = null;

// Update chart
const updateChartDay = (labels, datasets, monthly_filter = null) => {
    const filteredDatasets = datasets.map(dataset => ({
        ...dataset,
        data: getFilteredData(dataset.data, monthly_filter)
    }));

    if (chartDayCanvas) {
        chartDayCanvas.destroy();
    }

    chartDayCanvas = new Chart(chartDay, {
        type: "bar",
        data: {
            labels: labels,
            datasets: filteredDatasets
        },
    });
}

// Render chart berdasarkan monthly filter
const renderChartDay = (monthly_filter = null) => {
    fetch('./json/salesPizzabyDay.json')
        .then(response => response.json())
        .then(response => {
            const allData = response.datasets;
            const selectedDay = filterDay.value;
            
            let datasetsToRender;
            if (selectedDay === "0") {
                // menampilkan all categories
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
                        label: allData[parseInt(selectedDay) - 1].labels,
                        data: allData[parseInt(selectedDay) - 1].data,
                        borderWidth: 2,
                        borderColor: "rgb(255, 224, 47)",
                        backgroundColor: "rgba(255, 224, 47, 0.5)",
                        fill: true,
                    }
                ];
            }

            updateChartDay(monthLabels, datasetsToRender, monthly_filter);
        })
        .catch(err => {
            console.log(err);
        });
};

renderChartDay();

// Update chart berdasarkan monthly filter
filterMonthly.addEventListener("input", function () {
    let month = filterMonthly.value ? filterMonthly.value : null;
    renderChartDay(month);
});

// Update chart berdasarkan Day filter
filterDay.addEventListener("input", function () {
    let month = filterMonthly.value ? filterMonthly.value : null;
    renderChartDay(month);
});

// fungsi untuk warna chart
function getRandomColor(alpha = 1) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
