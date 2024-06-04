$(document).ready(function() {
  let tableBody = document.querySelector('tbody');

  fetch('./json/dataTable.json')
      .then(response => response.json())
      .then(dataTabel => {
          let templateData = "";

          dataTabel.forEach(item => {
              templateData += `
                  <tr>
                      <td>${item.No}</td>
                      <td>${item.Name}</td>
                      <td>${item.Size}</td>
                      <td>$${item.Price}</td>
                      <td>${item["Total Sales"]}</td>
                      <td>$${item["Total Revenue"]}</td>
                  </tr>
              `;
          });

          tableBody.innerHTML = templateData;

          // Initialize DataTables
          $('#pizzaTable').dataTable({
              "pageLength": 10, // Number of entries per page
              "searching": true, // Enable search functionality
              "paging": true, // Enable pagination
              "info": true, // Enable information display about table
              "dom": '<"top"lf>rt<"bottom"ip><"clear">',
                "initComplete": function() {
                    let searchBox = $('#pizzaTable_filter input');
                    searchBox.attr('placeholder', 'Search');
                }
          });
      })
      .catch(error => console.error('Error fetching the data:', error));
});
