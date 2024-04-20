document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');

    var initialData = [100, 200, 150, 300];

    var customColors = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'];

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rio de Janeiro', 'São paulo', 'Aracaju', 'Iguaçu'],
            datasets: [{
                label: 'Nº Clientes',
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

    var RJ = document.getElementById('RJ');
    var SP = document.getElementById('SP');
    var AR = document.getElementById('AR');
    var IG = document.getElementById('IG');

    myChart.data.datasets.forEach(function(dataset) {
        dataset.data.forEach(function(value, index) {
            if (index === 0) {
                RJ.innerText = value;
            } else if (index === 1) {
                SP.innerText = value;
            } else if (index === 2) {
                AR.innerHTML = value;
            } else if (index === 3) {
                IG.innerHTML = value;
            }
        });
    });
});
