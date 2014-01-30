'use strict';

describe('Instrument', function() {
  var instrument;

  beforeEach(function() {
    var inst = { 'file': 'test.mp3', 'name': 'Fat Kick', 'description': 'It is fat.' };
    var howler = { play: function() {}, urls: [] };
    //spyOn(howler, 'play');

    instrument = new Instrument(howler, inst);
  });

  it('should be defined', function() {
    expect(instrument).toBeDefined();
  });

  describe('getName()', function() {
    it('should return the name', function() {
      expect(instrument.getName()).toEqual('Fat Kick');
    });
  });

  describe('getDescription()', function() {
    it('should return the description', function() {
      expect(instrument.getDescription()).toEqual('It is fat.');
    });
  });

  describe('play()', function() {
    it('should attempt to play the sound', function() {
      expect(instrument.play()).toBe(true);
    });
  });
});
