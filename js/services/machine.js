'use strict';

// Machine Model
//
app.service('machineModel', function(kitModel) {
  this.kit = kitModel;
  this.timeSignature = 4;
  this.beatsPerMeasure = 8;
  this.currentMeasure = 0;
  this.currentBeat = 0;
  this.loops = 100;
  this.tempo = 120;

  this.beatRange = function() {
    return new Array(this.beatsPerMeasure);
  }

  // Initialize beats array
  var beatsArray = [];
  this.resetBeats = function() {
    for(var i = 0; i < this.kit.instruments.length; i++) {
      for(var j = 0; j < this.beatsPerMeasure; j++) {
        if (!beatsArray[i]) {
          beatsArray[i] = [];
        }
        beatsArray[i][j] = false;
      }
    }
  };

  // Get the proper delay in milliseconds
  this.delay = function() {
    return (1000 / (this.tempo * (this.beatsPerMeasure / this.timeSignature)) * 60);
  }

  this.resetBeats();
  this.beats = beatsArray;
});
