/**
 * Created by gupta_000 on 7/19/2016.
 */
'use strict';
var myApp = angular.module('myApp',[
    'Controllers','ngRoute'
]);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/main', {
            templateUrl: 'Login.html',
            controller: 'LoginCtrl'
        }).
        when('/home/student', {
            templateUrl: 'diction.html',
            controller: 'DictionaryController'
        }).
        otherwise({
            redirectTo: '/main'
        });
    }]);
