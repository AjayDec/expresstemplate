$(function () {
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

    if (navigator.onLine) {
        showOnline();
    } else {
        showOffline();
    }

    $window.on('offline', showOffline);
    $window.on('online', showOnline);

});