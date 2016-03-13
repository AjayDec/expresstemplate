// A decorator extending Task object
(function () {
    var app = angular.module('taskManager');

    app.factory('UrgentTask', function (Task) {
        var UrgentTask = function (data) {
            Task.call(this, data);
            this.priority = data.priority;
        };

        UrgentTask.prototype = Object.create(Task.prototype);
        UrgentTask.prototype.notify = function () { //decorate prototype with additional method
            console.log('notifying important people');

        };
        UrgentTask.prototype.save = function () { //decorate prototype via modifing existing method
            this.notify(); //new method
            console.log('Do something extra special');
            Task.prototype.save.call(this); //call existing method
        };
        return UrgentTask;
    });
}());