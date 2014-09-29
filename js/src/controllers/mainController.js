'use strict';

diplomacyManager.controller('mainController', ['$scope', '$location', '$localStorage',
  function($scope, $location, $localStorage) {

    $scope.username = '';

    $scope.signIn = function(username) {
      $localStorage.username = $scope.username;
      $location.path('/users');
    };
  }
]);