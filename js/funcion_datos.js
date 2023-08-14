$(document).ready(function () {
    $.getJSON('../json/datos.json', function (data) {
        var dp = data.DATOS_PERSONALES;
        $('#nombre').text(dp.cel);
    }).fail(function (jqxhr, textStatus, error) {
        console.error('Error cargando el archivo JSON:', textStatus, error);
    });
});