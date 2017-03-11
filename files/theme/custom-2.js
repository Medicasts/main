function calculate_date(zm) {
        var today = new Date();
var dd = today.getDate() + zm;
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

//console.log(yyyy+ '-' + mm + '-' + dd);
return yyyy+ '-' + mm + '-' + dd;
    }
 $.getJSON('info.json', function (data) {
        var a = 505;
        for (var i=0; i<=6; i++){
            //console.log(changing);
            a = '2017-03-0' + (i + 1);
            //console.log(a);
            //console.log(data.changing);
            //console.log('div#Photo' + (i + 1) + ' > a > img');
            //console.log(a, 'LOL=)');
            $('div#Photo' + (i + 1) + ' > a > img').attr('src', './levels/' + data[a][1] + '.png');
        }
    });
function main() {
    var changingNew;
    $('#custom_window_sec').hide();
    $('#custom_window').css('text-size', 50);
    //$('#custom_window').hide();
    $('#show_graph').bind('click', function () {
        var elmntSec = document.getElementById("custom_window_sec");
        $('#custom_window_sec').slideToggle(500);
        elmntSec.scrollIntoView();
    });
    for (var i = 1; i <= 7; i++) {
        $('#Photo' + i).bind('click', function () {
            $('#custom_window').hide();
            $('#custom_window_sec').hide();
            var elmnt = document.getElementById("custom_window");

            //$('#custom_window').scrollIntoView()
            $('#custom_window').slideToggle(500);
            elmnt.scrollIntoView();
        });
        $('#Photo' + i).css("cursor", "pointer");
    };
   };
$(document).ready(main);
