$(document).ready(function () {
    $.getJSON('json/datos.json', function (data) {
        var dp = data.DATOS_PERSONALES;
        var full_name = data.FIRST_NAME + ' ' + data.LAST_NAME
        $('#nombre').text(full_name);
        $('#sobre_mi').text(data.ABOUT_ME);
    }).fail(function (jqxhr, textStatus, error) {
        console.error('Error cargando el archivo JSON:', textStatus, error);
    });
});