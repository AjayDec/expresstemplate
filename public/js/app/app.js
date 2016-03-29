window.indexedDB = window.indexedDB ||
    window.mozIndexedDB ||
    window.wekitIndexedDB ||
    window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
    window.webkitIDBTransaction ||
    window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange ||
    window.webkitIDBKeyRange ||
    window.msIDBKeyRange;

angular.module('app', ['ngResource']).config(['$provide', function ($provide) {

    $provide.constant('indexedDB', window.indexedDB);
    $provide.constant('_', window._);
    $provide.constant('localStorage', window.localStorage);
    $provide.constant('Offline', window.Offline);

}]);