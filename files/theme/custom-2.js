function main() {

    google.charts.load("43", {packages: ["corechart", "gauge", "table", "timeline", "bar"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable;
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
    function bindImages(data_spec){
        return function () {
               $(window).hide();
                // console.log(a);
                // console.log(data[a][3][0]);
                // console.log(data[a][3][1]);
                $('#text3').text("Основні фактори: " + data_spec[0]);
                $('#text4').text("Група максимального впливу: " + data_spec[1]);
                $(window).slideToggle(500);
        }
    }
    var weekday = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    function getDayName(Date_a) {
        var splitted_date = Date_a.split('-');
        var d = new Date(parseInt(splitted_date[0]), parseInt(splitted_date[1]) - 1, parseInt(splitted_date[2]));
        return weekday[d.getDay()];
    }
    var startPoint = 23;
    var window = document.getElementById('custom_window');
    $.getJSON('info.json', {}, function (data) {
    // $.getJSON('https://medicasts.herokuapp.com/data.json', {}, function (data) {

        if (startPoint <= 9){$('#text1').text("Основні фактори: " + data['2017-03-0' + startPoint][3][0]);
        $('#text2').text("Група максимального впливу: " + data['2017-03-0' + startPoint][3][1]);
        }
        else{
        $('#text1').text("Основні фактори: " + data['2017-03-' + startPoint][3][0]);
        $('#text2').text("Група максимального впливу: " + data['2017-03-' + startPoint][3][1]);
            }
 /*       var table_text ='<tr><td rowspan="'+ data['2017-03-' + startPoint][3][0].length+  '">Онсновні фактори: </td>';

        for (var i = 0, i < data['2017-03-' + startPoint][3][1].length, i++){
            if (i == 0) {
                table_text += '<td>' + data['2017-03-' + startPoint][3][0][i] + '</td></tr>'
            }
            else {
                table_text += '<tr><td>' + data['2017-03-' + startPoint][0][i] + '</td></tr>'
            }
        }
        table_text +='<tr><td rowspan="'+ data['2017-03-' + startPoint][3][1].length + '">Групи ризику: </td>';

        for (var i = 0, i < data['2017-03-' + startPoint][3][1].length, i++){
            if (i == 0) {
                table_text += '<td>' + data['2017-03-' + startPoint][3][1][i] + '</td></tr>'
            }
            else {
                table_text += '<tr><td>' + data['2017-03-' + startPoint][3][1][i] + '</td></tr>'
            }
        }
        $('#day_block tbody').append(table_text);
*/

        $('#day_text').text(data['2017-03-' + startPoint][1].toString() + ' тип небезпеки');
        for (var i = 0; i <= 6; i++) {
            if (startPoint + i <= 9) {a = '2017-03-0' + (startPoint + i).toString()}
            else{
            a = '2017-03-' + (startPoint + i).toString();
            // console.log(a);
            }
            console.log(getDayName(a));
            if (i > 0) {
                $('#Table_Days tr td:nth-child(' + i.toString() + ')').text(getDayName(a));
            }
            $('div#Photo' + (i + 1) + ' > a > img').attr('src', './levels/' + data[a][1].toString() + '.png');
            $('div#Photo' + (i + 1).toString()).bind('click', bindImages(data[a][3]));
        }
        });
    var elmntSec = document.getElementById("custom_window_sec");
    $('#show_graph').bind('click', function () {
        $('#custom_window_sec').slideToggle(500);
        elmntSec.scrollIntoView();
        });
}
$(document).ready(main);
