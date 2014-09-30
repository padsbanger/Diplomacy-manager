'use strict';

describe('Controller: UsersCtrl', function() {

  // load the controller's module
  beforeEach(module('diplomacyManager'));

  var usersCtrl, scope, location, localStorage, UserService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($injector, $controller, $rootScope, $location, $localStorage) {
    location = $location;
    UserService = $injector.get('UserService');
    localStorage = $localStorage;
    scope = $rootScope.$new();
    usersCtrl = $controller('usersController', {
      $scope: scope,
      $location: location
    });

  }));

  it('should get username from localStorage', function() {
    localStorage.username = 'test';
    scope.username = UserService.getUserName();

    expect(scope.username).toBe('test');

  });

  it('should redirect to login if no username is set', function() {
    location.path('/users');
    scope.username = undefined;
    scope.$apply();

    expect(location.path()).toBe('/');
  });

  it('should redirect to login if no username is set', function() {
    scope.username = 'Test';
    scope.$apply();
    location.path('/users');

    expect(location.path()).toBe('/users');
  });

  it('should get users from usersService', function() {
    expect(scope.users.length).toBe(5);
    expect(scope.users[0].name).toBe('Jim');
  });

  it('should have no error by default', function() {
    expect(scope.error).toBe(false);
  });

  it('should have statuses array', function() {
    expect(scope.statuses.length).toBe(4);
  });

  it('should add user if no errors', function() {

    scope.username = "Test name";

    var userMock = {
      alliance: 'Test alliance',
      status: 'ally'
    };

    expect(scope.error).toBe(false);

    scope.addUser(userMock);

    expect(scope.users.length).toBe(6);
    expect(scope.error).toBe(false);
    expect(scope.users[5].name).toBe('Test name');
    expect(scope.users[5].alliance).toBe('Test alliance');
    expect(scope.users[5].status).toBe('ally');
    expect(scope.user.alliance).toBe(undefined);
    expect(scope.user.status).toBe(undefined);
  });

  it('should pop an error if no alliance status is selected', function() {
    var userMock = {
      alliance: 'Test alliance'
    };

    expect(scope.error).toBe(false);

    scope.addUser(userMock);

    expect(scope.error).toBe('Please select Alliance status.');
  });

  it('should contain all table headers', function() {
    expect(scope.head.a).toBe('name');
    expect(scope.head.b).toBe('alliance');
    expect(scope.head.c).toBe('status');
    expect(scope.head.d).toBe('date');
  });

  it('should by default sort by name and asc', function() {
    expect(scope.sort.column).toBe('date');

    expect(scope.sort.descending).toBe(false);
  });

  it('should set proper class for sorting', function() {
    var test = scope.selectedCls('date');

    expect(test).toBe('sort-false');
  });

  it('should set sorting to desc if clicked on the same column', function() {
    scope.changeSorting('date');

    expect(scope.sort.descending).toBe(true);
  });

  it('should set sorting to asc and sort by clicked column', function() {
    scope.changeSorting('alliance');

    expect(scope.sort.column).toBe('alliance');
    expect(scope.sort.descending).toBe(false);
  });

});