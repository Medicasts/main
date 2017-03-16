function main() {
    // var changingNew;
    // start
    google.charts.load("43", {packages: ["corechart", "gauge", "table", "timeline", "bar"]});
    //google.charts.load('current', {'packages':['bar']});
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
                subtitle: 'factors: humidity, pressure, precipation'
            },
            bars: 'vertical',
            vAxis: {format: 'decimal'},
            height: '100%',
            width: '100%',
            colors: ['#1b9e77', '#d95f02', '#7570b3'],
            allowHtml: true
        };

        var chart = new google.charts.Bar(document.getElementById('custom_window_three'));

        chart.draw(data, options);

        /*var btns = document.getElementById('btn-group');

         btns.onclick = function (e) {

         if (e.target.tagName === 'BUTTON') {
         options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
         chart.draw(data, google.charts.Bar.convertOptions(options));
         }
         }*/
    }

    // $('div#custom_window_three > div').css('margin-left', 'auto');
    // $('div#custom_window_three > div').css('margin-right', 'auto');

    // end
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

        //console.log(yyyy+ '-' + mm + '-' + dd);
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
            //console.log(changing);
            a = '2017-03-0' + (i + 1);
            //console.log(a);
            //console.log(data.changing);
            //console.log('div#Photo' + (i + 1) + ' > a > img');
            //console.log(a, 'LOL=)');
            //console.log(data[a][1], "ASDASDASD");
            $('div#Photo' + (i + 1) + ' > a > img').attr('src', './levels/' + data[a][1] + '.png');
        }
    });
    var elmntSec = document.getElementById("custom_window_sec");
    var elmnt = document.getElementById("custom_window");
    //$('#custom_window_sec').hide();
    $('#custom_window').css('text-size', 50);
    //$('#custom_window').hide();
    $('#show_graph').bind('click', function () {


        $('#custom_window_sec').slideToggle(500);
        elmntSec.scrollIntoView();
    });
    for (var i = 1; i <= 7; i++) {
        $('#Photo' + i).bind('click', function () {
            $.getJSON('info.json', function (data) {
                $('#text3').text("Група максимального впливу: " + data['2017-03-0' + i][3][0]);
                $('#text4').text("Основні фактори: " + data['2017-03-0' + i][3][1]);
            });
            $('#custom_window').hide();
            //$('#custom_window_sec').hide();


            //$('#custom_window').scrollIntoView();
            $('#custom_window').slideToggle(500);
            //elmnt.scrollIntoView({block: "end", behavior: "smooth"});
        });
        $('#Photo' + i).css("cursor", "pointer");
    }
    ;
    // $('div#custom_window_three > div').css('margin-left', 'auto');
    // $('div#custom_window_three > div').css('margin-right', 'auto');

};
$(document).ready(main);
// $('#custom_window_sec').css('display', 'none');
