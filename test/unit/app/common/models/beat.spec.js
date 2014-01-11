'use strict';

describe('Beat', function() {
  var beat;

  beforeEach(function() {
    beat = new Beat();
  });

  it('should be defined', function() {
    expect(beat).toBeDefined();
  });

  describe('toggle function', function() {
    it('should activate an inactive beat', function() {
      expect(beat.active).toBe(false);
      beat.toggle();
      expect(beat.active).toBe(true);
    });

    it('should deactivate an active beat', function() {
      beat.active = true;
      expect(beat.active).toBe(true);
      beat.toggle();
      expect(beat.active).toBe(false);
    });
  });

  describe('deactivate function', function() {
    it('should deactivate an active beat', function() {
      beat.active = true;
      expect(beat.active).toBe(true);
      beat.deactivate();
      expect(beat.active).toBe(false);
    });
  });
});
