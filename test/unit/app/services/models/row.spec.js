'use strict';

describe('Row', function() {
  var row;

  beforeEach(function() {
    var instrument = { getName: function() { return "Crash" }, play: function() { return true; } };
    row = new Row(instrument, 8);
  });

  it('should be defined', function() {
    expect(row).toBeDefined();
  });

  describe('getInstrument()', function() {
    it('should return an instrument with a name', function() {
      // TODO: It would be better if this worked, but how do we mock an Instrument and have it return the proper type
      //expect(row.getInstrument()).toEqual(jasmine.any(Instrument));
      expect(row.getInstrument().getName()).toEqual("Crash");
    });
  });

  describe('getBeats()', function() {
    it('should return an array', function() {
      expect(row.getBeats()).toEqual(jasmine.any(Array));
    });

    it('should default to 8 beats', function() {
      expect(row.getBeats().length).toEqual(8);
    });
  });

  describe('addBeats()', function() {
    it('should add a single beat', function() {
      expect(row.getBeats().length).toEqual(8);
      row.addBeats(1);
      expect(row.getBeats().length).toEqual(9);
    });

    it('should add multiple beats', function() {
      expect(row.getBeats().length).toEqual(8);
      row.addBeats(8);
      expect(row.getBeats().length).toEqual(16);
    });
  });

  describe('reset()', function() {
    it('should deactivate all beats', function() {
      row.getBeats()[0].activate();
      expect(row.getBeats()[0].isActive()).toBe(true);
      row.getBeats()[6].activate();
      expect(row.getBeats()[6].isActive()).toBe(true);

      row.reset();
      expect(row.getBeats()[0].isActive()).toBe(false);
      expect(row.getBeats()[0].isActive()).toBe(false);
    });
  });

  describe('playSound()', function() {
    it('should play the sound if the beat is active', function() {
      row.getBeats()[0].activate();
      expect(row.getBeats()[0].isActive()).toBe(true);
      expect(row.playSound(0)).toBe(true);
    });

    it('should do nothing if beat is inactive', function() {
      expect(row.getBeats()[0].isActive()).toBe(false);
      expect(row.playSound(0)).toBe(false);
    });
  });
});

