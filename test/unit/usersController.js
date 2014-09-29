'use strict';

describe('Controller: AppCtrl', function() {

  // load the controller's module
  beforeEach(module('diplomacyManager'));

  var usersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($injector, $controller, $rootScope) {
    scope = $rootScope.$new();
    usersCtrl = $controller('usersController', {
      $scope: scope,
    });

  }));

  it('should get users from usersService', function() {
    expect(scope.users.length).toBe(5);
    expect(scope.users[0].name).toBe('Jim');
  });

  it('should contain all table headers', function() {
    expect(scope.head.a).toBe('name');
    expect(scope.head.b).toBe('alliance');
    expect(scope.head.c).toBe('status');
    expect(scope.head.d).toBe('date');
  });

  it('should by default sort by name and asc', function() {
    expect(scope.sort.column).toBe('name');

    expect(scope.sort.descending).toBe(false);
  });

  it('should set proper class for sorting', function() {
    var test = scope.selectedCls('name');

    expect(test).toBe('sort-false');
  });

  it('should set sorting to desc if clicked on the same column', function() {
    scope.changeSorting('name');

    expect(scope.sort.descending).toBe(true);
  });

  it('should set sorting to asc and sort by clicked column', function() {
    scope.changeSorting('alliance');

    expect(scope.sort.column).toBe('alliance');
    expect(scope.sort.descending).toBe(false);
  });

});