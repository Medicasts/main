google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
// humidity pressure precipation
$.getJSON('info.json', function(data) {
    console.log(data.new, data.A.B);
});
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'humidity', 'pressure', 'precipation'],
        ['1', 10, 20, 12],
        ['2', 11, 4, 25],
        ['3', 20, 11, 3],
        ['4', 17, 5, 3],
        ['5', 10, 20, 12],
        ['6', 11, 4, 25],
        ['7', 20, 11, 3],
        ['8', 17, 5, 3],
        ['9', 10, 20, 12],
        ['10', 11, 4, 25],
        ['11', 20, 11, 3],
        ['12', 17, 5, 3],
        ['13', 10, 20, 12],
        ['14', 11, 4, 25],
        ['15', 20, 11, 3],
        ['16', 17, 5, 3],
        ['17', 10, 20, 12],
        ['18', 11, 4, 25],
        ['19', 20, 11, 3],
        ['20', 17, 5, 3],
        ['21', 10, 20, 12],
        ['22', 11, 4, 25],
        ['23', 20, 11, 3],
        ['24', 17, 5, 3],
        ['25', 11, 4, 25],
        ['26', 20, 11, 3],
        ['27', 17, 5, 3],
        ['28', 10, 20, 12],
        ['29', 11, 4, 25],
        ['30', 20, 11, 3],
        ['31', 17, 5, 3],
    ]);

    var options = {
        chart: {
            title: 'Monthly history',
            subtitle: 'factors: 1, 2, 3',
        },
        bars: 'vertical',
        vAxis: {format: 'decimal'},
        height: 400,
        width: 1000,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));

    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');

    btns.onclick = function (e) {

        if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}
