const chartx = document.getElementById('animation');
const labelx = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
new Chart(chartx, {
    type: 'bar',
    data: {
        labels: labelx,
        datasets: [{
            label: '# of Votes',
            data: labelx,
            borderWidth: 1,
            backgroundColor: 'rgb(166, 95, 253)',
            barThickness: 10,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
                display: false
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        layout: {
            margin: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 100
            }
        },
        barPercentage: 0.8,
        categoryPercentage: 0.6,
    }
});