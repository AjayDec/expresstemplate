(function () {
    var app = angular.module('app');

    app.controller('homesListController', ['$scope', '_', 'persistenceService', 'Offline', function ($scope, _, persistenceService, Offline) {
        $scope.showList = false;
        var getData = function () {
            persistenceService.action.getAll().then(
                function (homes) {
                    $scope.homes = homes;
                    $scope.showList = true;
                    $scope.showEmptyMessage = (homes.length === 0);
                },
                function (error) {
                    $scope.error = error;
                });
        };
        var lazyGetData = _.debounce(getData, 50);

        Offline.on('confirmed-up', lazyGetData);
        Offline.on('confirmed-down', lazyGetData);
        lazyGetData();

        $scope.delete = function (index) {
            var id = $scope.homes[index].id;
            persistenceService.action.delete(id).then(
                function (result) {
                    $scope.homes.splice(index, 1);
                },
                function (error) {
                    $scope.error = error;
                });
        };

    }]);
}());