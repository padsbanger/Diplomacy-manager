'use strict';

diplomacyManager.controller('mainController', ['$scope', '$location',
  function($scope, $location) {

    $scope.signIn = function(username) {
      $location.path('/users');
    };
  }
]);