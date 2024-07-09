function initializeCarousel() {
    const $carousels = $('.carousel');
    $carousels.each(function() {
        const $images = $(this).find('img');
        let currentIndex = 0;
        const totalImages = $images.length;
        const displayDuration = 3000; // 3 segundos

        function showNextImage() {
            $images.eq(currentIndex).removeClass('active');
            currentIndex = (currentIndex + 1) % totalImages;
            $images.eq(currentIndex).addClass('active');
        }

        $images.eq(currentIndex).addClass('active');
        setInterval(showNextImage, displayDuration);
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addDynamicStyle(index, color1, color2) {
    const style = document.createElement('style');
    style.textContent = `
        .cart__conocimientos[data-index="${index}"]::before {
            background: linear-gradient(45deg, ${color1}, ${color2});
        }
    `;
    document.head.append(style);
}