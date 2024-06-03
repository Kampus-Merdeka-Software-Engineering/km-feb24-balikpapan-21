$(document).ready( function () {
    let tableBody = document.querySelector('tbody')
    let templateData = ""
    
    for(let i=0; i<100; i++){
      templateData += `
        <tr>
          <td>${1+i}</td>
          <td>Paperoni ${1+i}</td>
          <td>${Math.round(Math.random() * 100)}</td>
          <td>$${Math.round(Math.random(1000) * 100)}</td>
        </tr>
      `
    }

    tableBody.innerHTML = templateData;
    
    // inisialisasi data tables
    $('#myTable').DataTable();
  });