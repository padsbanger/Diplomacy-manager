'use strict';

describe('Controller: mainCtrl', function() {

  // load the controller's module
  beforeEach(module('diplomacyManager'));

  var mainCtrl, scope, location, localStorage;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($injector, $controller, $rootScope, $location, $localStorage) {
    location = $location;
    localStorage = $localStorage;
    scope = $rootScope.$new();
    mainCtrl = $controller('mainController', {
      $localStorage: localStorage,
      $scope: scope,
      $location: location
    });

  }));

  it('should log user in', function() {
    location.path('/');
    scope.signIn('testUser');

    expect(localStorage.username).toBe('testUser');
    expect(location.path()).toBe('/users');
  });

});