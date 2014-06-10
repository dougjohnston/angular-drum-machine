'use strict';

describe('DrumMachineCtrl', function() {
  var scope, ctrl, drumMachine;

  beforeEach(function() {
    module('AngularDrumMachine');

    inject(function($rootScope, $injector, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('DrumMachineCtrl', {$scope: scope});
    });

    inject(function(_drumMachine_) {
      drumMachine = _drumMachine_;
      scope.machine = drumMachine;
    });
  });

  it('should set up a drum machine service', function() {
    expect(drumMachine).toEqual(jasmine.any(Object));
    expect(scope.machine).toEqual(jasmine.any(Object));
  });

  describe('method playLoop', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'play');
    });

    it('should tell the machine to start playing', function() {
      scope.playLoop();
      expect(scope.machine.play).toHaveBeenCalled();
    });
  });

  describe('method stopLoop', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'stop');
    });

    it('should tell the machine to stop', function() {
      scope.stopLoop();
      expect(scope.machine.stop).toHaveBeenCalled();
    });
  });

  describe('method resetLoop', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'reset');
    });

    it('should tell the machine to reset itself', function() {
      scope.resetLoop();
      expect(scope.machine.reset).toHaveBeenCalled();
    });
  });

  describe('method updateTempo', function() {
    beforeEach(function() {
      spyOn(scope.machine, 'setTempo');
    });

    it('should tell the machine to update the tempo', function() {
      scope.tempo = 120;
      scope.updateTempo();
      expect(scope.machine.setTempo).toHaveBeenCalledWith(120);
    });
  });

  //it('should have an empty timers array', function() {
    //expect(scope.timers.length).toBe(0);
  //});

  //describe('method resetLoop', function() {
    //it('should reset the current measure', function() {
      //scope.machine.currentMeasure = 50;
      //scope.resetLoop();
      //expect(scope.machine.currentMeasure).toEqual(0);
    //});

    //it('should reset the current beat', function() {
      //scope.machine.currentBeat = 8;
      //scope.resetLoop();
      //expect(scope.machine.currentBeat).toEqual(0);
    //});

    //it('should clear any outstanding timers', function() {
      //scope.timers.push(timeout(function() { }, 50));
      //scope.timers.push(timeout(function() { }, 100));

      //expect(scope.timers.length).toEqual(2);
      //expect(function() { timeout.flush() }).not.toThrowError;

      //scope.timers.push(timeout(function() { }, 50));
      //scope.timers.push(timeout(function() { }, 100));

      //scope.resetLoop();
      //expect(function() { timeout.flush() }).toThrowError;
    //});

    //it('should clear the timers array', function() {
      //scope.timers = [1,2,3];
      //scope.resetLoop();
      //expect(scope.timers.length).toEqual(0);
    //});
  //});
});
