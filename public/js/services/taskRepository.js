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

        var set = function (task) {
            console.log('Saving task in db.. ' + task.name);
        }
        return {
            get: get,
            set: set
        }
    };

    app.service('TaskRepository', Repo);
}());