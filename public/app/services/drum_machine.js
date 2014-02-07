'use strict';

// drumMachine Model
app.factory('drumMachine', function($http, timerQueue) {
  var _playing = false;
  var _timers = timerQueue;
  var timeSignature = 4;
  var gridLength = 8;
  var tempo = 120;
  var rows = [];

  function init() {
    var item, player, instrument;

    $http.get('/app/services/data/instruments.json').success(function(data) {
      for(var i = 0; i < 4; i++) {
        item = data[0]["default"][i];
        player = new Howl({ urls: ["assets/audio/" + item.file] });
        instrument = new Instrument(player, item);

        rows.push(new Row(instrument, gridLength));
      }
    });
  }

  function getRows() {
    return rows;
  }

  function play() {
    _playing = true;
    var x = 0, delay = 0;

    // TODO: Make this infinite
    for (var i = 0; i < 500; i++) {
      delay = x * (gridLength * beatDelay());
      _timers.add(playMeasure(), delay);
      x++;
    }
  }

  function stop() {
    _playing = false;
    clearTimers();
  }

  function reset() {
    stop();
    resetAllRows();
  }

  function playMeasure() {
    return function() {
      for (var i = 0; i < gridLength; i++) {
        _timers.add(playBeat(i), i * beatDelay());
      }
    };
  }

  function playBeat(index) {
    return function() {
      for (var i = 0; i < rows.length; i++) {
        rows[i].playSound(index);
      }
    };
  }

  function clearTimers() {
    _timers.clear();
  }

  function resetAllRows() {
    for(var i = 0; i < rows.length; i++) {
      rows[i].reset();
    }
  }

  function beatDelay() {
    return (1000 / (tempo * (gridLength / timeSignature)) * 60);
  }

  // Return public functions
  return {
    init: init,
    gridLength: gridLength,
    timeSignature: timeSignature,
    tempo: tempo,
    getRows: getRows,
    play: play,
    stop: stop,
    reset: reset
  }
});
