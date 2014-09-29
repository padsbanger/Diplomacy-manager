'use strict';

describe('Service: usersService', function() {

  var UsersService;

  beforeEach(module('diplomacyManager'));

  // Initialize the service and a mock backend
  beforeEach(inject(function($injector) {
    UsersService = $injector.get('UsersService');


  }));

  it('should return an array of users', function() {
    var test = UsersService.getUsers();

    expect(test[0].name).toBe('Jim');
    expect(test.length).toBe(5);

  });

});
