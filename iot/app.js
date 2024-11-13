$(document).ready(function() {
    // Fetch data from the PHP file
    $.ajax({
        url: 'api.php', // Ganti dengan nama file PHP Anda
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            // Check if the response status is success
            if (response.status === "success") {
                displayData(response.data);
            } else {
                $('#data-container').html('<p>Error fetching data.</p>');
            }
        },
        error: function() {
            $('#data-container').html('<p>Error fetching data.</p>');
        }
    });

    function displayData(data) {
        let html = `
            <h3>Max Suhu: ${data.suhumax} °C</h3>
            <h3>Min Suhu: ${data.suhumin} °C</h3>
            <h3>Rata-rata Suhu: ${data.suhurata} °C</h3>
            <h4>Data Suhu dan Kelembapan Maksimum:</h4>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Suhu</th>
                        <th>Kelembapan</th>
                        <th>Kecerahan</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Loop through nilai_suhu_max_humid_max
        data.nilai_suhu_max_humid_max.forEach(item => {
            html += `
                <tr>
                    <td>${item.idx}</td>
                    <td>${item.suhun} °C</td>
                    <td>${item.humid} %</td>
                    <td>${item.kecerahan} Lux</td>
                    <td>${item.timestamp}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
            <h4>Bulan dan Tahun Maksimum:</h4>
            <ul>
        `;

        // Loop through month_year_max
        data.month_year_max.forEach(item => {
            html += `<li>${item.month_year}</li>`;
        });

        html += `</ul>`;

        // Append the generated HTML to the container
        $('#data-container').html(html);
    }
});