/* need add parcel and cube dependencies first */

import Chart from "chart.js/auto";

const ctx1 = document.getElementById("myChart-1");
const ctx2 = document.getElementById("myChart-2");

new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["Januari", "Febuari", "Maret", "April", "Mei", "Juni"],
    datasets: [
      {
        label: "Penjualan Pizza",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
