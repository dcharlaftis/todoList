(function() {
    'use strict';

    app.controller('taskController', ['$scope', '$route', '$location', '$http', '$rootScope', '$state',
        function($scope, $route, $location, $http, $rootScope, $state) {

            $scope.tasks = [];
            $scope.showTable = false;

            $http({
                method: 'GET',
                url: 'http://localhost:9000/api/tasks/'
            }).then(function successCallback(response) {
                console.log("ok", response);
                $scope.tasks = response.data;
                $scope.showTable = true;

                $(document).ready(function() {
                    $('#taskTable').DataTable();
                });


            }, function errorCallback(error) {
                console.log("error", error);
            });

            $scope.postData = {
                    title: "",
                    description: ""
                };

            $scope.addTask = function() {
                console.log("adding..2");
                //$location.path('/add');
                //$state.go('lala.add');
                
                var transform = function() {
                    return $.param($scope.postData);
                }

                $http.post("http://localhost:9000/api/tasks/", $scope.postData, {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                        transformRequest: transform
                    }).success(function(responseData) {
                        console.log("okkk", responseData);
                        window.location.reload();
                    })
                    .error(function(error) {
                        console.log(error);
                    });

            }

        }
    ]);
}());
