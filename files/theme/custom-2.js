function main() {
    var data = 'A';
    $('#custom_window').css('text-size', 50);
    //$('#custom_window').hide();
    for (var i = 1; i <= 7; i++){
    $('#Photo' + i).bind('click', function () {
        $('#custom_window').hide(700);
        $('#custom_window').slideToggle(500);
    });
    $('#Photo' + i).css("cursor", "pointer");
    }
}
$(document).ready(main);
