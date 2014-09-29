'use strict';

diplomacyManager.controller('mainController', ['$scope', '$location', '$localStorage',
  function($scope, $location, $localStorage) {

    $scope.signIn = function(username) {
      $localStorage.username = $scope.username;
      $location.path('/users');
    };
  }
]);