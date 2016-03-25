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

    Offline.on('confirmed-down', showOffline);
    Offline.on('confirmed-up', showOnline);

    Offline.check();

});