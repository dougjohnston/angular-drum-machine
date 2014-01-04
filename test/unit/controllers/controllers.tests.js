'use strict';

describe('DrumController', function() {
  var scope, timeout, ctrl;

  beforeEach(module('DrumMachine'));

  beforeEach(inject(function($rootScope, $injector, $controller) {
    scope = $rootScope.$new();
    timeout = $injector.get('$timeout');
    ctrl = $controller('DrumController', {$scope: scope, $timeout: timeout});
  }));

  it('should set up a machine model', function() {
    expect(scope.machine).toEqual(jasmine.any(Object));
  });

  it('should set up an array of instruments', function() {
    expect(scope.instruments).toEqual(jasmine.any(Array));
  });

  it('should have an empty timers array', function() {
    expect(scope.timers.length).toBe(0);
  });

  describe('method stopLoop', function() {
    it('should reset the current measure', function() {
      scope.machine.currentMeasure = 50;
      scope.stopLoop();
      expect(scope.machine.currentMeasure).toEqual(0);
    });

    it('should reset the current beat', function() {
      scope.machine.currentBeat = 8;
      scope.stopLoop();
      expect(scope.machine.currentBeat).toEqual(0);
    });

    it('should clear any outstanding timers', function() {
      scope.timers.push(timeout(function() { }, 50));
      scope.timers.push(timeout(function() { }, 100));

      expect(scope.timers.length).toEqual(2);
      expect(function() { timeout.flush() }).not.toThrowError;

      scope.timers.push(timeout(function() { }, 50));
      scope.timers.push(timeout(function() { }, 100));

      scope.stopLoop();
      expect(function() { timeout.flush() }).toThrowError;
    });

    it('should clear the timers array', function() {
      scope.timers = [1,2,3];
      scope.stopLoop();
      expect(scope.timers.length).toEqual(0);
    });
  });
});
