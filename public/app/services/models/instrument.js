'use strict';

var Instrument = function(player, inst) {
  var audioPlayer = player;
  var name = inst.name;
  var description = inst.description;
  
  function getName() {
    return name;
  }

  function getDescription() {
    return description;
  }

  function play() {
    try {
      audioPlayer.play();
      return true;
    } catch(e) {
      console.log("Unable to play sound", e);
      return false;
    }
  };

  // Return public functions
  return {
    getName: getName,
    getDescription: getDescription,
    play: play
  }
};
