'use strict';

describe('Beat', function() {
  var beat;

  beforeEach(function() {
    beat = new Beat();
  });

  it('should be defined', function() {
    expect(beat).toBeDefined();
  });

  describe('isActive()', function() {
    it('should tell if the beat is active', function() {
      expect(beat.isActive()).toBe(false);
      beat.toggle();
      expect(beat.isActive()).toBe(true);
    });
  });

  describe('activate()', function() {
    it('should activate an inactive beat', function() {
      expect(beat.isActive()).toBe(false);
      beat.activate();
      expect(beat.isActive()).toBe(true);
    });
  });
  
  describe('deactivate()', function() {
    it('should deactivate an active beat', function() {
      beat.activate();
      expect(beat.isActive()).toBe(true);
      beat.deactivate();
      expect(beat.isActive()).toBe(false);
    });
  });
  
  describe('toggle function', function() {
    it('should activate an inactive beat', function() {
      expect(beat.isActive()).toBe(false);
      beat.toggle();
      expect(beat.isActive()).toBe(true);
    });

    it('should deactivate an active beat', function() {
      beat.activate();
      expect(beat.isActive()).toBe(true);
      beat.toggle();
      expect(beat.isActive()).toBe(false);
    });
  });
});
