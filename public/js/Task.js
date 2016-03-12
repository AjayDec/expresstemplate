//Immediately Invoked Function Expression (IIFI)
(function () {
    var app = angular.module('taskManager');

    app.factory('Task', function (TaskRepository) {
        var Task = function (data) {
            this.name = data.name;
            this.completed = data.completed;
        };

        Task.prototype.complete = function () {
            console.log('Task completed: ' + this.name);
            this.completed = true;
            this.save();
        };
        Task.prototype.save = function () {
            console.log('Saving task: ' + this.name);
            TaskRepository.set(this);
        };
        return Task;
    });
}());