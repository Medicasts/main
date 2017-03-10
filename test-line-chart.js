google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Date', 'Factor'],
        ['1', 10],
        ['2', 15],
        ['3', 4],
        ['4', 23],
        ['5', 10],
        ['6', 4],
        ['7', 11],
        ['8', 5],
        ['9', 5],
        ['10', 5],
        ['11', 11],
        ['12', 13],
        ['13', 17],
        ['14', 20],
        ['15', 21],
        ['16', 20],
        ['17', 23],
        ['18', 25],
        ['19', 24],
        ['20', 12],
        ['21', 12],
        ['22', 10],
        ['23', 13],
        ['24', 16],
        ['25', 17],
        ['26', 8],
        ['27', 5],
        ['28', 7],
        ['29', 15],
        ['30', 20],
        ['31', 17]
    ]);


    var options = {
        hAxis: {
            title: 'Stats',
            textStyle: {
                color: '#01579b',
                fontSize: 20,
                fontName: 'Arial',
                bold: true,
                italic: true
            },
            titleTextStyle: {
                color: 'blue',
                fontSize: 16,
                fontName: 'Arial',
                bold: false,
                italic: true
            }
        },
        /*/vAxis: {
            title: 'Popularity',
            textStyle: {
                color: '#1a237e',
                fontSize: 24,
                bold: true
            },
            titleTextStyle: {
                color: '#1a237e',
                fontSize: 24,
                bold: true
            }
        },/*/
        curveType: 'function',
        colors: ['#a52714']

    };
    var chart = new google.visualization.LineChart(document.getElementById('line_div'));
    chart.draw(data, options);
}