'use strict';

var Row = function(instrument, initialBeats) {
  var instrument = instrument;
  var beats = [];

  // Add initial beats
  addBeats(initialBeats);

  function getInstrument() {
    return instrument;
  }

  function getBeats() {
    return beats;
  }

  function addBeats(num) {
    for(var i = 0; i < num; i++) {
      beats.push(new Beat());
    }
  }

  function reset() {
    for(var i = 0; i < beats.length; i++) {
      beats[i].deactivate();
    }
  }

  function playSound(index) {
    if (beats[index].isActive()) {
      return instrument.play();
    }
    return false;
  }

  // Return public functions
  return {
    getInstrument: getInstrument,
    getBeats: getBeats,
    addBeats: addBeats,
    reset: reset,
    playSound: playSound
  }
};
