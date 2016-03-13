//Immediately Invoked Function Expression (IIFI)
(function () {
    var app = angular.module('taskManager');

    app.factory('Task', function (TaskRepository) {
        var Task = function (data) {
            this.name = data.name;
            this.priority = data.priority;
            this.project = data.project;
            this.user = data.user;
            this.completed = data.completed;
        };

        return Task;
    });
}());