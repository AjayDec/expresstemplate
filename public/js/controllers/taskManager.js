(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (Task, TaskRepository) {
        var ctrl = this;

        ctrl.tasks = [];
        angular.forEach(TaskRepository.getTasks(), function (value) {
            ctrl.tasks.push(new Task(value));
        });
    };

    app.controller('taskCtrl', taskController);
}());