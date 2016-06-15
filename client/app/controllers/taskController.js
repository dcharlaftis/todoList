(function() {
    'use strict';

    app.controller('taskController', ['$scope', '$route', '$location', '$http', '$rootScope',
        function($scope, $route, $location, $http, $rootScope) {

            $http({
                method: 'GET',
                url: 'http://localhost:9000/api/tasks/'
            }).then(function successCallback(response) {
                console.log("ok", response);
                $(document).ready(function() {
                    $('#taskTable').DataTable();
                });

            }, function errorCallback(error) {
                console.log("error", error);
            });



        }
    ]);
}());
