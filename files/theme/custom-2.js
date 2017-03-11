function main() {
    //$('#custom_window').hide();
    for (var i = 1; i <= 6; i++){
    $('#Photo' + i).bind('click', function () {
        $('#custom_window').slideToggle(400);
    })}
}
$(document).ready(main);