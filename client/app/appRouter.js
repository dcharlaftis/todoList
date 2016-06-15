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
          })
          .state('lala.add', {
            url: "add",
            templateUrl: "app/views/addTask.html",
            controller: 'addTaskController'
          })           
          ;
      }
    ]);
}());
