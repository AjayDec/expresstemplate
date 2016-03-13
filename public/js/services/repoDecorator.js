//decorating a service
(function () {
    var app = angular.module('taskManager');

    app.decorator('TaskRepository', function ($delegate) {

        var oldSave = $delegate.set;

        $delegate.set = function (tsk) {
            console.log('Special logging for task...' + tsk.name);
            oldSave(tsk);
        };

        return $delegate;
    });

}());