'use strict';

diplomacyManager.controller('usersController', ['$scope', 'UsersService', '$filter', '$localStorage', 'UserService', '$location',
  function($scope, UsersService, $filter, $localStorage, UserService, $location) {

    $scope.users = UsersService.getUsers();
    $scope.username = UserService.getUserName();
    $scope.error = false;

    // "naive" logged user check
    $scope.$watch('username', function(newValue, oldValue) {
      if(newValue === oldValue && newValue === undefined) {
        $location.path('/');
      }
    });

    $scope.head = {
      a: "name",
      b: "alliance",
      c: "status",
      d: "date",
    };

    $scope.statuses = ['vassal', 'ally', 'enemy', 'nap'];

    $scope.sort = {
      column: 'date',
      descending: false
    };

    $scope.selectedCls = function(column) {
      return column == $scope.sort.column && 'sort-' + $scope.sort.descending;
    };

    $scope.addUser = function(user) {

      var newUser = {
        name: $scope.username,
        alliance: user.alliance,
        status: user.status,
        date: new Date().getTime()
      };

      if(newUser.status === undefined) {
        $scope.error = 'Please select Alliance status.';
      } else {
        $scope.users.push(newUser);
        $scope.error = false;
        $scope.user = {};
      }
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