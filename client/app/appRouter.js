(function() {
  'use strict';

  app
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
          .state('lala', {
            url: "/",
            templateUrl: "app/views/tasksView.html",
            controller: 'taskController'
          })          ;
      }
    ]);
}());
