document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('chart');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Quantity Growth',
            data: [-6.40 , 7.57 , -2.58 , 4.26 , -5.11 , 6.94 , -5.10 , -6.67 , -0.18 , 9.86 , 7.76 ],
            borderColor: 'rgb(255, 224, 47)',
            borderWidth: 2
          },
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  });
