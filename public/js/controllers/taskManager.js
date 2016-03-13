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
            var myTask = ctrl.tasks[i];
            TaskRepository.complete(myTask);

            if (myTask.completed == true) {
                TaskRepository.setCompletedDate(myTask);
                TaskRepository.notify(myTask);
                TaskRepository.save(myTask);
            }
        };
    };

    app.controller('taskCtrl', taskController);
}());