'use strict';

describe('drumMachine', function() {
  var machine;

  beforeEach(module('AngularDrumMachine'));

  beforeEach(inject(function(_drumMachine_) {
    machine = _drumMachine_;
  }));

  it('should have zero rows', function() {
    expect(machine.rows().length).toEqual(0);
  });

  //it('should set up a beats array', function() {
    //expect(machine.beats).toEqual(jasmine.any(Object));
  //});

  //describe('method reset()', function() {
    //it('should set the current measure to zero', function() {
      //machine.currentMeasure = 50;
      //machine.reset();
      //expect(machine.currentMeasure).toEqual(0);
    //});

    //it('should set the current beat to zero', function() {
      //machine.currentBeat = 8;
      //machine.reset();
      //expect(machine.currentBeat).toEqual(0);
    //});

    //xit('should clear the beats array', function() {
      //pending();
      ////machine.beats = [[true,true,true,true,true]];
      ////machine.reset();
      ////expect(machine.beats).toEqual(0);
    //});
  //});
});
