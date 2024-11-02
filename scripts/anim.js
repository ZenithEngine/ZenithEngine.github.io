$(function() {
    const $h2 = $('h2');
    const $header = $('.header');

    if ($h2.length === 0 || $header.length === 0) {
        return;
    }

    $(window).on('scroll', function() {
        const scrollPosition = $(this).scrollTop();
        const h2Position = $h2.offset().top;

        if (scrollPosition >= h2Position - $(window).height() / 2 && scrollPosition < h2Position + 100) {
            const translateY = Math.max(20, 20 + scrollPosition - h2Position);
            $h2.css({
                'opacity': 1,
                'transform': `translateY(-${translateY}px)`
            });
        } else if (scrollPosition >= h2Position + 100) {
            const opacityValue = 1 - (scrollPosition - h2Position - 100) / 200;
            $h2.css('opacity', Math.max(opacityValue, 0));
        } else {
            $h2.css({
                'opacity': 0,
                'transform': 'translateY(20px)'
            });
        }

        const opacity = Math.max(1 - scrollPosition / 15, 0);
        const scale = 1 + (scrollPosition / 15);
        
        $header.css({
            'opacity': opacity,
            'transform': `scale(${scale})`,
            'transform-origin': 'center'
        });
    });

    $(window).scrollTop(0);
});
