function animation_home() {
    $('.animation-image-home').css('display', 'flex')
    $('.animation-image-home').addClass('animation-image-home-active')
    $('.animation-greet-home').css('display', 'none')
    $('.animation-image-home-active').on('animationend', function () {
        $('.animation-greet-home').css('display', 'block')
        $('.animation-greet-home').addClass('animation-greet-home-active')
        $('.animation-image-home').removeClass('animation-image-home-active')

        $('.animation-greet-home-active').on('animationend', function () {
            $('.animation-greet-home').removeClass('animation-greet-home-active')
        })
    });
}

$(document).ready(function() {
    var $slimeImgs = $(".slime-imgs ul");
    var $imgs = $slimeImgs.children();
    var totalImgs = $imgs.length;

    // Clonar imágenes si hay más de 4
    if (totalImgs > 4) {
        $imgs.each(function() {
            var $clone = $(this).clone();
            $slimeImgs.append($clone);
        });
    }

    // Ajustar el ancho del contenedor del slider según la cantidad de imágenes
    var updatedTotalImgs = $slimeImgs.children().length;
    $slimeImgs.css("width", updatedTotalImgs * 100 + "%");

    // Ajustar la duración de la animación según la cantidad de imágenes
    var animationDuration = updatedTotalImgs * 4; // 4s por imagen
    $(".slime-imgs ul").css("animation-duration", animationDuration + "s");
});