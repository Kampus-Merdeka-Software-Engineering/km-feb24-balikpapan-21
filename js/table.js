$(document).ready(function () {
    let tableBody = document.querySelector('tbody');

    // Fetch data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let templateData = "";
            
            data.forEach(item => {
                templateData += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.score}</td>
                        <td>$${item.price}</td>
                    </tr>
                `;
            });

            tableBody.innerHTML = templateData;
            
            // Inisialisasi DataTables setelah data dimasukkan ke dalam tabel
            $('#myTable').DataTable();
        })
        .catch(error => console.error('Error fetching data:', error));
});
