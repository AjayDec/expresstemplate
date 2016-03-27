$(function () {
    $('#infoMsg').append(' (jQuery loaded)');

    $('button').click(function () {
        $.get('api/time').then(
            function (time) {
                $('#time').html(time);
            }
        );
    });

    if (Modernizr.ApplicationCache) {
        window.applicationCache.addEventListener('updateready',
            function () {
                window.location.reload(true);
            });
    }

    var
        $offline = $('.offline'),
        $online = $('.online'),
        $window = $(window);

    var showOnline = function () {
        $offline.fadeOut(function () {
            $online.fadeIn();
        });
    };
    var showOffline = function () {
        $online.fadeOut(function () {
            $offline.fadeIn();
        });
    };

    Offline.on('confirmed-down', showOffline);
    Offline.on('confirmed-up', showOnline);

    Offline.check();

});