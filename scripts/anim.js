$(document).ready(function() {
    const $h2 = $('h2');

    $(window).on('scroll', function() {
        const scrollPosition = $(this).scrollTop();

        if ($h2.length === 0) {
            return;
        }

        const h2Position = $h2.offset().top;

        if (scrollPosition >= h2Position - $(window).height() / 2 && scrollPosition < h2Position + 100) {
            const translateY = Math.max(20, 20 + scrollPosition - h2Position);
            $h2.css({
                'opacity': 1,
                'transform': `translateY(-${translateY}px)`
            });

        } else if (scrollPosition >= h2Position + 100) {
            $h2.css('opacity', 1 - (scrollPosition - h2Position - 100) / 200);

            if (scrollPosition > h2Position + 200) {
                $h2.css('opacity', 0);
            }
        } else {
            $h2.css({
                'opacity': 0,
                'transform': 'translateY(20px)'
            });
        }

        let opacity = 1 - scrollPosition / 15;
        let scale = Math.max(1 + (scrollPosition / 15), 1);
        
        $('.header').css({
            'opacity': opacity,
            'transform': `scale(${scale})`,
            'transform-origin': 'center'
        });
    });

    $(window).scrollTop(0);
});
