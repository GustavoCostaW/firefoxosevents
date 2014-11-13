'use strict';

describe('Controller: EventosCtrl', function () {

  // load the controller's module
  beforeEach(module('firefoxoseventsApp'));

  var EventosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventosCtrl = $controller('EventosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
