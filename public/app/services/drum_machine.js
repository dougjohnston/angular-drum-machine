'use strict';

// drumMachine Model
app.factory('drumMachine', function($http, timerQueue) {
  var _playing = false;
  var _timers = timerQueue;

  var drumMachine = {
    timeSignature: 4,
    gridLength: 8,
    tempo: 120,
    rows: [],

    init: function() {
      var item, player, instrument;

      $http.get('/app/services/data/instruments.json').success(function(data) {
        for(var i = 0; i < 4; i++) {
          item = data[0]["default"][i];
          player = new Howl({ urls: ["assets/audio/" + item.file] });
          instrument = new Instrument(player, item);

          drumMachine.rows.push(new Row(player, instrument, drumMachine.gridLength));
        }
      });
    },

    play: function() {
      _playing = true;
      var x = 0, delay = 0;

      // TODO: Make this infinite
      for (var i = 0; i < 500; i++) {
        delay = x * (drumMachine.gridLength * drumMachine.beatDelay());
        _timers.add(drumMachine.playMeasure(), delay);
        x++;
      }
    },

    stop: function() {
      _playing = false;
      drumMachine.clearTimers();
    },

    reset: function() {
      drumMachine.stop();
      drumMachine.resetAllRows();
    },

    playMeasure: function() {
      return function() {
        for (var i = 0; i < drumMachine.gridLength; i++) {
          _timers.add(drumMachine.playBeat(i), i * drumMachine.beatDelay());
        }
      };
    },

    playBeat: function(index) {
      return function() {
        for (var i = 0; i < drumMachine.rows.length; i++) {
          drumMachine.rows[i].playSound(index);
        }
      };
    },

    clearTimers: function() {
      _timers.clear();
    },

    //addRow: function() {
      //drumMachine.rows.push(new Row());
    //},

    resetAllRows: function() {
      for(var i = 0; i < drumMachine.rows.length; i++) {
        drumMachine.rows[i].reset();
      }
    },
  
    beatDelay: function() {
      return (1000 / (drumMachine.tempo * (drumMachine.gridLength / drumMachine.timeSignature)) * 60);
    }
  }

  return drumMachine;
});
