'use strict';

var Row = function(player, instrument, initialBeats) {
  var instrument = instrument;
  var beats = [];

  //var = muted = false;
  //var = volume = 100;

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

  return {
    getInstrument: getInstrument,
    getBeats: getBeats,
    addBeats: addBeats,
    reset: reset,
    playSound: playSound
  }
};
