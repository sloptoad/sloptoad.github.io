var positionSmall = 0;
    $(document).scroll(function () {
        positionSmall = $(this).scrollTop();
        console.log({positionSmall})
        if (positionSmall > 300) {
            $(".linkitem").css('color', 'transparent');
            $(".linkitem.schedule").css('border', 'none');
        }
         else {
            $(".linkitem").css('color', 'white');
            $(".linkitem.schedule").css('border', '1px solid white');
        }

        if (positionSmall >800) {
            $("#logo").css('opacity', '0');
        }
         else {
            $("#logo").css('opacity', '1');

        }
        $('.menu__item').hover(function () {
            $('.menu__item').not(this).removeClass('active');
            $(this).addClass('active');
        });
    });