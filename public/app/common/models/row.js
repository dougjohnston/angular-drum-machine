'use strict';

var Row = function(inst, initialBeats) {
  var self = this;
  var sound = null;

  self.muted = false;
  self.volume = 100;
  self.instrument = new Instrument(inst);
  self.beats = [];

  self.addBeats = function(num) {
    for(var i = 0; i < num; i++) {
      self.beats.push(new Beat());
    }
  }

  self.reset = function() {
    for(var i = 0; i < self.beats.length; i++) {
      self.beats[i].deactivate();
    }
  }

  self.playSound = function(index) {
    if (self.beats[index].active) {
      self.instrument.play();
    }
  }

  // Add initial beats
  self.addBeats(initialBeats);

  return self;
};
