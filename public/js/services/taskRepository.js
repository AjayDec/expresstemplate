(function () {
    var app = angular.module('taskManager');

    var Repo = function ($http) {

        var called = 0;

        var get = function (id) {
            called++;
            console.log('Getting for db.. taskId: ' + id + '.Called count: ' + called);
            return {
                name: 'A task ' + id + ' from db'
            };
        };
        var getTasks = function () {
            called++;
            console.log('Geting sample tasks from db. Called count: ' + called);
            return [{
                    name: 'task 1'
                },
                {
                    name: 'task 2',
                    completed: true
                }];
        };
        var set = function (task) {
            called++;
            console.log('Saving task in db.. ' + task.name + '.Called count: ' + called);
        };
        return {
            get: get,
            getTasks: getTasks,
            set: set
        };
    };

    app.service('TaskRepository', Repo);
}());