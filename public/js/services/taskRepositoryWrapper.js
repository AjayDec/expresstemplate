(function () {
    var app = angular.module('taskManager');
    var repo = function (TaskRepository) {
        var completeAndNotify = function (task) {
            TaskRepository.complete(task);

            if (task.completed === true) {
                TaskRepository.setCompletedDate(task);
                TaskRepository.notify(task);
                TaskRepository.save(task);
            }
        };

        return {
            completeAndNotify: completeAndNotify
        };
    };

    app.service('TaskRepositoryWrapper', repo);
}());