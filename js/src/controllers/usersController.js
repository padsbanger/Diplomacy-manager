'use strict';

diplomacyManager.controller('usersController', ['$scope', 'UsersService',
  function($scope, UsersService) {

    $scope.users = UsersService.getUsers();

    $scope.head = {
      a: "name",
      b: "alliance",
      c: "status",
      d: "date",
    };

    $scope.sort = {
      column: 'name',
      descending: false
    };

    $scope.selectedCls = function(column) {
      return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
    };

    $scope.changeSorting = function(column) {
      var sort = $scope.sort;
      if ($scope.sort.column == column) {
        $scope.sort.descending = !$scope.sort.descending;
      } else {
        $scope.sort.column = column;
        $scope.sort.descending = false;
      }
      console.log($scope.sort.descending);
      console.log($scope.sort.column);
    };



    $scope.removeUser = function(userId) {
      $scope.users.splice(userId, 1);
    };
  }
]);