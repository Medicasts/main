function main() {
    google.charts.load("43", {packages: ["corechart", "gauge", "table", "timeline", "bar"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Date');
        data.addColumn('number', 'вологість');
        data.addColumn('number', 'атмосферний тиск');
        data.addColumn('number', 'опади');
        for (var i = 8; i <= 30; i++){
            data.addRow([i.toString(), Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10))]);
        }
        var options = {
            chart: {
                title: 'Статистика за минулий місяць',
                subtitle: 'фактори: вологість, атмосферний тиск, опади'
            },
            bars: 'vertical',
            vAxis: {format: 'decimal'},
            height: '100%',
            width: '100%',
            colors: ['#1b9e77', '#d95f02', '#7570b3'],
            allowHtml: true
        };
        var container = document.getElementById('custom_window_sec');
        container.style.display = 'block';
        var chart = new google.charts.Bar(document.getElementById('custom_window_three'));
        google.visualization.events.addListener(chart, 'ready', function () {
            container.style.display = 'none';
        });
        chart.draw(data, options);
        // $("#custom_window_sec").style.display = 'block';
        // var chart = new google.charts.Bar(document.getElementById('custom_window_three'));
        // google.visualization.events.addListener(chart, 'ready', function () {
        //     $("#custom_window_sec").style.display = 'none';
        //     });
        // chart.draw(data, options);
    }
    function calculate_date(zm) {
        var today = new Date();
        var dd = today.getDate() + zm;
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        return yyyy + '-' + mm + '-' + dd;
    }

    $('div#Photo' + (1 + 1) + ' > a > img').attr('src', './levels/' + 1.5 + '.png');
    $.getJSON('info.json', function (data) {
        console.log(500);
        var a = 505;
        $('#text1').text("Група максимального впливу: " + data['2017-03-01'][3][0]);
        $('#text2').text("Основні фактори: " + data['2017-03-01'][3][1]);
        $('#day_text').text(data['2017-03-01'][1] + ' тип небезпеки');
        for (var i = 0; i <= 6; i++) {
            a = '2017-03-0' + (i + 1);
            $('div#Photo' + (i + 1) + ' > a > img').attr('src', './levels/' + data[a][1] + '.png');
        }
    });
    var elmntSec = document.getElementById("custom_window_sec");
    // var elmnt = document.getElementById("custom_window");
    $('#show_graph').bind('click', function () {
        $('#custom_window_sec').slideToggle(500);
        elmntSec.scrollIntoView();
    });
    for (var i = 1; i <= 7; i++) {
        $('#Photo' + i).bind('click', function () {
            $('#custom_window').hide();
            $.getJSON('info.json', function (data) {
                $('#text3').text("Група максимального впливу: " + data['2017-03-0' + i][3][0]);
                $('#text4').text("Основні фактори: " + data['2017-03-0' + i][3][1]);
            });
            $('#custom_window').slideToggle(500);
            });
        $('#Photo' + i).css("cursor", "pointer");
    };
};
$(document).ready(main);