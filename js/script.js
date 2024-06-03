      const chartGrowth = document.getElementById("chartGrowth");
      const filterMonthly = document.getElementById("filter_monthly");
      let chartGrowthCanvas = null;

      //melakukan update chart
      const updateChartGrowth = (labels, data, monthly_filter = null) => {
        let filter_labels = labels;
        let filter_data = data;

        if(monthly_filter !== null){
          let index = monthly_filter - 1;

          filter_labels = [];
          filter_labels.push(lables[index]);

          filter_data = [];
          filter_data.push(data[index]);

        } else{
          filter_labels = labels
          filter_data = data
        }
      

      //cek canvas
      if(chartGrowthCanvas){
        chartGrowthCanvas.destroy();
      }

      chartGrowthCanvas = new Chart(chartGrowth, {
        type : "line",
        data : {
            labels : filter_labels,
            datasets : [
              {
                label : 'Quantity and Revenue Growth',
                data : filter_data,
                borderWidth : 1
              }
            ],
        },
      });
    }
    
      //menampilkan data chart
      const renderChartGrowth = (monthly_filter = null) => {
        fetch('./json/revenue&quantitygrowth.json')
        .then((response) => response.json())
        .then((response) => {
          let datasets = response.datasets[0]
          updateChartGrowth(datasets.labels, datasets.data, monthly_filter)
        })
        .catch((err) => {
            console.log(err);
        });
      };

      renderChartGrowth();

      //update chart
      filterMonthly.addEventListener("input", function() {
        let month = null;

        if (filterMonthly.value !== ""){
        month = filterMonthly.value;
        }
          
        renderChartGrowth(month);
      });
      