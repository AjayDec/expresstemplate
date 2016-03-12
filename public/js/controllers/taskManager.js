(function () {
    var app = angular.module('taskManager', []);

    var taskController = function () {
        var ctrl = this;

        ctrl.tasks = [{
                name: 'task 1'
            },
            {
                name: 'task 2',
                completed: true
            }];
        this.complete = function (itemNumber) {
            console.log('completing task ' + ctrl.tasks[itemNumber].name);
            ctrl.tasks[itemNumber].completed = true;
        }

    };

    app.controller('taskCtrl', taskController)
}());