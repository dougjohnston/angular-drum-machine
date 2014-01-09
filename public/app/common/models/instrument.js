'use strict';

var Instrument = function(inst) {
  var self = this;

  var sound = new Howl({ urls: ["assets/audio/" + inst.file]});
  self.name = inst.name;

  self.play = function() {
    sound.play();
  }

  return self;
};

