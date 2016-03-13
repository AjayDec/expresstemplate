(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (Task, UrgentTask, TaskRepository) {
        var ctrl = this;

        ctrl.tasks = [];
        angular.forEach(TaskRepository.getTasks(), function (value) {
            ctrl.tasks.push(new Task(value));
        });
        ctrl.tasks.push(new UrgentTask(TaskRepository.get(3)));
        ctrl.tasks.push(new UrgentTask(TaskRepository.get(4)));
    };

    app.controller('taskCtrl', taskController);
}());