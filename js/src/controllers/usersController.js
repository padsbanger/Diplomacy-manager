'use strict';

diplomacyManager.controller('usersController', ['$scope', 'UsersService', '$filter',
  function($scope, UsersService, $filter) {

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
      if ($scope.sort.column == column) {
        $scope.sort.descending = !$scope.sort.descending;
      } else {
        $scope.sort.column = column;
        $scope.sort.descending = false;
      }
    };

    $scope.removeUser = function(user) {
      // you can pass object to indexOf() ?
      var userId = $scope.users.indexOf(user);

      $scope.users.splice(userId, 1);
    };
  }
]);