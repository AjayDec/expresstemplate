/*globals WOW*/

$(function () {
    $(window).on('load resize',
        function () {
            $('.fill-screen').css('height', window.innerHeight);
        }
    );

    //scrollSpy to highlight nav based on anchor position
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    //smooth scrolling via jquery ease
    $('nav a, .down-button a').bind('click',
        function () {
            $('html body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - 100
                },
                1500, 'easeInOutExpo'
            );
            event.preventDefault();
        });

    // parallax scrolling with stellar.js
    $(window).stellar();

    //Init WOW
    new WOW().init();
});