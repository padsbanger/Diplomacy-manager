'use strict';

diplomacyManager.factory('UserService', [ '$localStorage',
  function($localStorage) {
    return {
      getUserName: function() {
        return $localStorage.username;
      }
    };
  }
]);