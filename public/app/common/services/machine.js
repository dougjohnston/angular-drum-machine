'use strict';

// Machine Model
//
app.factory('machine', function($http, timerqueue) {
  var playing = false;
  var timers = timerqueue;

  var machine = {
    timeSignature: 4,
    gridLength: 8,
    tempo: 120,
    rows: [],

    build: function() {
      $http.get('/app/common/data/instruments.json').success(function(data) {
        for(var i = 0; i < 4; i++) {
          machine.rows.push(new Row(data[0]["default"][i], machine.gridLength));
        }
      });
    },

    play: function() {
      playing = true;
      var x = 0, delay = 0;

      // TODO: Make this infinite
      for (var i = 0; i < 500; i++) {
        delay = x * (machine.gridLength * machine.beatDelay());
        timers.add(machine.playMeasure(), delay);
        x++;
      }
    },

    stop: function() {
      playing = false;
      machine.clearTimers();
    },

    reset: function() {
      machine.stop();
      machine.resetAllRows();
    },

    playMeasure: function() {
      return function() {
        for (var i = 0; i < machine.gridLength; i++) {
          timers.add(machine.playBeat(i), i * machine.beatDelay());
        }
      };
    },

    playBeat: function(index) {
      return function() {
        for (var i = 0; i < machine.rows.length; i++) {
          machine.rows[i].playSound(index);
        }
      };
    },

    clearTimers: function() {
      timers.clear();
    },

    //addRow: function() {
      //machine.rows.push(new Row());
    //},

    resetAllRows: function() {
      for(var i = 0; i < machine.rows.length; i++) {
        machine.rows[i].reset();
      }
    },
  
    beatDelay: function() {
      return (1000 / (machine.tempo * (machine.gridLength / machine.timeSignature)) * 60);
    }
  }

  return machine;
});
