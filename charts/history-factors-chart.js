google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'humidity', 'pressure', 'precipation'],
        ['8', 10, 20, 12],
        ['9', 11, 4, 25],
        ['10', 20, 11, 3],
        ['11', 17, 5, 3],
        ['12', 10, 20, 12],
        ['13', 11, 4, 25],
        ['14', 20, 11, 3],
        ['15', 17, 5, 3],
        ['16', 10, 20, 12],
        ['17', 11, 4, 25],
        ['18', 20, 11, 3],
        ['19', 17, 5, 3],
        ['20', 10, 20, 12],
        ['21', 11, 4, 25],
        ['22', 20, 11, 3],
        ['23', 17, 5, 3],
        ['24', 10, 20, 12],
        ['25', 11, 4, 25],
        ['26', 20, 11, 3],
        ['27', 17, 5, 3],
        ['28', 10, 20, 12],
        ['1', 11, 4, 25],
        ['2', 20, 11, 3],
        ['3', 17, 5, 3],
        ['4', 11, 4, 25],
        ['5', 20, 11, 3],
        ['6', 17, 5, 3],
        ['7', 10, 20, 12],
        ['8', 11, 4, 25],
        ['9', 20, 11, 3],
        ['10', 17, 5, 3]
    ]);

    var options = {
        chart: {
            title: 'Monthly history',
            subtitle: 'factors: humidity, pressure, precipation',
        },
        bars: 'vertical',
        vAxis: {format: 'decimal'},
        height: 400,
        width: 1000,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('custom_window_sec'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    /*var btns = document.getElementById('btn-group');

    btns.onclick = function (e) {

        if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }*/
}
