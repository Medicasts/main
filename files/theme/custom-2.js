function main() {
    var data = 'A';
    $('#custom_window_sec').hide();
    $('#custom_window').css('text-size', 50);
    //$('#custom_window').hide();
    $('#show_graph').bind('click', function () {
        var elmntSec = document.getElementById("custom_window_sec");
        $('#custom_window_sec').slideToggle(500);
        elmntSec.scrollIntoView();
    })
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
    }
   $.getJSON('example.json', function(data) {
    console.log(data.new, data.A.B);
});};
$(document).ready(main);
