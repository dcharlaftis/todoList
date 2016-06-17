(function() {
    'use strict';

    app.controller('taskController', ['$scope', '$route', '$location', '$http', '$rootScope', '$state',
        function($scope, $route, $location, $http, $rootScope, $state) {

            $scope.tasks = [];
            $scope.showTable = false;
            $scope.canEdit = false;

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
                description: "",
                //completed: true
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

            $scope.deleteTask = function(index) {
                //console.log("dddddd", index);
                var ind = $scope.tasks[index].id;
                var deleteUrl = 'http://localhost:9000/api/tasks/' + ind;
                $http({
                    method: 'DELETE',
                    url: deleteUrl
                }).then(function successCallback(response) {
                    console.log("delete it", response);
                    window.location.reload();

                }, function errorCallback(error) {
                    console.log("error", error);
                });
            }

            $scope.saveData = {
                title: "",
                description: ""                
            };
             
            $scope.pos = -1;
             
            $scope.editTask = function(index) {
                $scope.canEdit = true;
                $scope.saveData.title = $scope.tasks[index].title;
                $scope.saveData.description = $scope.tasks[index].description;
                $scope.pos = $scope.tasks[index].id;

            }

            $scope.saveTask = function() {

                var transform = function() {
                    return $.param($scope.saveData);
                }
                var indx = $scope.pos;
                var putUrl = 'http://localhost:9000/api/tasks/' + indx;

                $http.put(putUrl, $scope.saveData, {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                        transformRequest: transform
                    }).success(function(responseData) {
                        console.log("okkk put", responseData);
                        window.location.reload();
                    })
                    .error(function(error) {
                        console.log(error);
                    });             
            }

        }
    ]);
}());
