'use strict';

diplomacyManager.factory('UsersService', [

  function() {

    var users = [{

    }];

    return {
      getUsers: function() {
        return users;
      },
    };
  }
]);