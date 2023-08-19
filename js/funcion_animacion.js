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
