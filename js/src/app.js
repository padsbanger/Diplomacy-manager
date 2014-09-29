'use strict';

var diplomacyManager = angular.module('diplomacyManager', [
  'ngRoute',
  'ngStorage'
]);
/**
 * Configure the routing of the application
 */
diplomacyManager.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', {
        controller: 'mainController',
        templateUrl: 'views/mainView.html',
      })
      .when('/users', {
        controller: 'usersController',
        templateUrl: 'views/usersView.html',
      })
      .otherwise({
        redirectTo: '/'
      });

  }
]);