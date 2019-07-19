
$(function () {
    //header size
    $(".header").height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
    });

    //nav active
    $('.header .navbar .navbar-nav .nav-link').click(function () {
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    });

    //bx slider
        $('.slider').bxSlider({
            pager: false
        });

        $('.bx-wrapper').each(function(){
            $(this).css('marginTop',($(window).height() - $(this).height()) / 2 );

        });

    //scroll to
        $('.nav-link').click(function(){
            $('html, body').animate({
                scrollTop: $('#' + $(this).data('value')).offset().top
            }, 1000);
        });

    // auto slider code
        (function autoSlider(){
            $('.slideer .activee').each(function(){
                if (!$(this).is(':last-child')){
                    $(this).delay(3000).fadeOut(1000,function(){
                        $(this).removeClass('activee').next().addClass('activee').fadeIn();
                        autoSlider();
                    });
                }else {
                    $(this).delay(3000).fadeOut(1000, function() {
                        $(this).removeClass('activee');
                        $('.slideer div').eq(0).addClass('activee').fadeIn();
                        autoSlider();
                    });
                }
            });
        }());

        // filter mixItUp
        $('.All_Images').mixItUp();
        $('.shuffle li').click(function(){
            $(this).addClass('select').siblings().removeClass('select');
        });



        //------
});