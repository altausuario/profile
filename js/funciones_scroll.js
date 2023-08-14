function cambiarColorIcono(btn) {
    $(".btn_scroll i").css("color", "#fff");
    $(btn).find("i").css("color", "red");
}

$(function () {
    cambiarColorIcono($('#scrollInicio'))
    var clicking = false;
    $('#scrollInicio').click(function () {
        clicking = true
        cambiarColorIcono(this);
        $('html, body').animate({
            scrollTop: $('#inicio').offset().top
        }, 1000, function () {
            clicking = false
        });
    });

    $('#scrollSobreMi').click(function () {
        clicking = true
        cambiarColorIcono(this);
        $('html, body').animate({
            scrollTop: $('#sobreMi').offset().top
        }, 1000, function () {
            clicking = false
        });
    });

    $('#scrollConocimientos').click(function () {
        clicking = true
        cambiarColorIcono(this);
        $('html, body').animate({
            scrollTop: $('#conocimientos').offset().top
        }, 1000, function () {
            clicking = false
        });
    });

    $('#scrollProyectos').click(function () {
        clicking = true
        cambiarColorIcono(this);
        $('html, body').animate({
            scrollTop: $('#proyectos').offset().top
        }, 1000, function () {
            clicking = false
        });
    });

    $('#scrollContato').click(function () {
        clicking = true
        cambiarColorIcono(this);
        $('html, body').animate({
            scrollTop: $('#contato').offset().top
        }, 1000, function () {
            clicking = false
        });
    });


    // SCROLL AUTOMATO DE WINDOW Y REALIZAR FUNCIONES

    $(window).on('scroll', function () {
        var windowTop = $(window).scrollTop();

        // Obtén la posición superior de cada div
        var divInicio = $('#inicio').offset().top;
        var divSobreMi = $('#sobreMi').offset().top;
        var divConocimientos = $('#conocimientos').offset().top;
        var divProyectos = $('#proyectos').offset().top;
        var divContato = $('#contato').offset().top;

        // Ajusta un margen de sensibilidad para determinar cuándo ejecutar la función
        var margin = 600;
        var buton;
        if (!clicking) {
            if (windowTop >= divInicio - margin && windowTop < divSobreMi - margin) {
                buton = $('#scrollInicio')
                cambiarColorIcono(buton)
            } else if (windowTop >= divSobreMi - margin && windowTop < divConocimientos - margin) {
                buton = $('#scrollSobreMi')
                cambiarColorIcono(buton)
            } else if (windowTop >= divConocimientos - margin && windowTop < divProyectos - margin) {
                buton = $('#scrollConocimientos')
                cambiarColorIcono(buton)
            } else if (windowTop >= divProyectos - margin && windowTop < divContato - margin) {
                buton = $('#scrollProyectos')
                cambiarColorIcono(buton)
            } else if (windowTop >= divContato - margin) {
                buton = $('#scrollContato')
                cambiarColorIcono(buton)
            }
        }
    });
})