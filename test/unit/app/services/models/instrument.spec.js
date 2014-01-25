'use strict';

describe('Instrument', function() {
  var instrument;

  beforeEach(function() {
    var inst = { 'file': 'test.mp3', 'name': 'Fat Kick' };
    spyOn(window, 'Howl');

    instrument = new Instrument(inst);
  });

  //it('should be defined', function() {
    //expect(instrument).toBeDefined();
  //});

  //it('should create a new Howl object', function() {
    //var params = { urls: ["assets/audio/test.mp3"] };
    //expect(window.Howl).toHaveBeenCalledWith(params);
    //expect(instrument.sound).toBeDefined();
  //});

  //it('should set the name', function() {
    //expect(instrument.name).toEqual('Fat Kick');
  //});

  //describe('play function', function() {
    //it('should play the sound', function() {
      //instrument.play;
      //expect(instrument.sound.play).toHaveBeenCalled();
    //});
  //});
});
