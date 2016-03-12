(function () {
    var app = angular.module('taskManager');

    var Repo = function ($http) {
        var db = {};

        var get = function (id) {
            console.log('Getting for db.. taskId: ' + id);
            return {
                name: 'A task ' + id + ' from db'
            };
        };
        var getTasks = function () {
            console.log('Geting sample tasks from db..');
            return [{
                    name: 'task 1'
                },
                {
                    name: 'task 2',
                    completed: true
                }];
        };
        var set = function (task) {
            console.log('Saving task in db.. ' + task.name);
        };
        return {
            get: get,
            getTasks: getTasks,
            set: set
        };
    };

    app.service('TaskRepository', Repo);
}());