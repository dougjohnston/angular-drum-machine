'use strict';

var Instrument = function(player, inst) {
  var audioPlayer = player;
  var name = inst.name;
  
  function getName() {
    return name;
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

  return {
    getName: getName,
    play: play
  }
};
