'use strict';

describe('Filter: filters', function() {

  // load the service's module
  beforeEach(module('diplomacyManager'));

  var filters;

  // Initialize the service and a mock backend
  beforeEach(inject(function($injector, $filter) {
    filters = $filter;
  }));

  describe('Capitalize', function() {

    it('should capitalize first letter in a string', function() {
      var test = filters('capitalize')('somestring');
      expect(test).toEqual('Somestring');
    });

    it('should do nothing', function() {
      var test = filters('capitalize')(' ');
      var test1 = filters('capitalize')('123');
      var test2 = filters('capitalize')('@#$%^/');

      expect(test).toEqual(' ');
      expect(test1).toEqual('123');
      expect(test2).toEqual('@#$%^/');
    });

  });


});