/**
 * Created by gupta_000 on 7/19/2016.
 */

var Controllers = angular.module('Controllers', ['ngRoute']);

Controllers.controller('LoginCtrl', ['$scope','$http','$location',
    function ($scope,$http,$location) {

        $scope.validate=function()
        {
            $http.get('data/credentials.json').success(function(data) {
                $scope.users = data;
                var count=0;
                for (var i = 0, len = $scope.users.length; i < len; i++) {
                    if ($scope.username === $scope.users[i].username && $scope.password === $scope.users[i].password) {
                        alert("login successful");
                        count = count + 1;
                        if ($scope.users[i].role === "student") {
                            $location.path('/home/student');
                            break;
                        }
                    }
                }
                if(count!=1)
                {
                    alert("Please provide valid login credentials");
                    $location.path( "/main" )
                }
            });
        }

    }]);

Controllers.controller('DictionaryController', ['$scope','$rootScope','$http',
    function($scope, $rootScope, $http){
    $scope.$watch('search', function() {
        fetch();
    });

    $scope.search = "Cat";

    function fetch(){
        $http.get("http://api.pearson.com/v2/dictionaries/wordwise/entries?headword=" + $scope.search)
            .then(function(response){ $rootScope.details = response.data;
            });

    }
}]);
