document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');

    var initialData = [100, 200, 150, 300, 250];

    var customColors = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'];

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Vendas',
                data: initialData,
                backgroundColor: customColors,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var dataJaneiro = document.getElementById('janeiro');
    var dataFevereiro = document.getElementById('fevereiro');
    var dataMarco = document.getElementById('março');
    var dataAbril = document.getElementById('abril');
    var dataMaio = document.getElementById('maio');

    myChart.data.datasets.forEach(function(dataset) {
        dataset.data.forEach(function(value, index) {
            if (index === 0) {
                dataJaneiro.innerText = value;
            } else if (index === 1) {
                dataFevereiro.innerText = value;
            } else if (index === 2) {
                dataMarco.innerHTML = value;
            } else if (index === 3) {
                dataAbril.innerHTML = value;
            } else if (index === 4) {
                dataMaio.innerHTML = value;
            }
        });
    });
});
