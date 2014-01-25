'use strict';

function Row(inst, initialBeats) {
  this.instrument = new Instrument(new Howl({ urls: ["assets/audio/" + inst.file] }), inst);
  this.beats = [];

  this.muted = false;
  this.volume = 100;

  // Add initial beats
  this.addBeats(initialBeats);
};

Row.prototype.addBeats = function(num) {
  for(var i = 0; i < num; i++) {
    this.beats.push(new Beat());
  }
}

Row.prototype.reset = function() {
  for(var i = 0; i < this.beats.length; i++) {
    this.beats[i].deactivate();
  }
}

Row.prototype.playSound = function(index) {
  if (this.beats[index].isActive()) {
    this.instrument.play();
  }
}
