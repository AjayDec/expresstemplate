(function () {
    var app = angular.module('taskManager', []);

    var taskController = function (Task, TaskRepository) {
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
            TaskRepository.complete(ctrl.tasks[i]);

            if (myTask.completed == true) {
                TaskRepository.setCompletedDate(ctrl.tasks[i]);
                TaskRepository.notify(ctrl.tasks[i]);
                TaskRepository.save(ctrl.tasks[i]);
            }
        };
    };

    app.controller('taskCtrl', taskController);
}());