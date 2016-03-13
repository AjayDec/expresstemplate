(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (Task, TaskRepository, TaskRepositoryWrapper) {
        var ctrl = this;

        ctrl.tasks = [];
        var myTask = new Task({
            name: 'My Task',
            priority: 1,
            project: 'My Project',
            user: 'Jay',
            completed: false
        });
        ctrl.tasks.push(myTask);

        ctrl.complete = function (i) {
            TaskRepositoryWrapper.completeAndNotify(ctrl.tasks[i]);
        };
    };

    app.controller('taskCtrl', taskController);
}());