(function () {
    var app = angular.module('taskManager');

    var Repo = function ($http) {

        return {
            complete: function (task) {
                task.completed = true;
                console.log('Completing task ' + task.name);
            },
            setCompletedDate: function (task) {
                task.completedDate = new Date();
                console.log(task.name + ' completed on ' + task.completedDate);
            },
            notify: function (task, user) {
                console.log('Notifying user \'' + task.user +
                    '\' of completed task ' + task.name);
            },
            save: function (task) {
                console.log('saving task ..' + task.name);
            }
        };
    };

    app.service('TaskRepository', Repo);
}());