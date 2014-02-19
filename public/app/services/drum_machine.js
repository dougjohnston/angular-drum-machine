'use strict';

// drumMachine Model
app.factory('drumMachine', function($http, timerQueue) {
  var _playing = false;
  var _currentBeat = 0;
  var _delay = 100;
  var _timers = timerQueue;
  var _rows = [];
  var timeSignature = 4;
  var gridLength = 8;
  var tempo = 120;

  function init() {
    var item, player, instrument;

    $http.get('/app/services/data/instruments.json').success(function(data) {
      for(var i = 0; i < 4; i++) {
        item = data[0]["default"][i];
        player = new Howl({ urls: ["assets/audio/" + item.file] });
        instrument = new Instrument(player, item);

        _rows.push(new Row(instrument, gridLength));
      }
    });
    _delay = beatDelay();
  }

  function rows() {
    return _rows;
  }

  function setTempo(newTempo) {
    tempo = newTempo;
    _delay = beatDelay();
  }

  function currentBeat() {
    return _currentBeat;
  }

  function play() {
    _playing = true;
    _timers.add(playBeat(), beatDelay());
  }

  function stop() {
    _playing = false;
    _timers.clear();
  }

  function reset() {
    stop();
    _currentBeat = 0;
    resetAllRows();
  }

  // Benchmark Code
  //var lastTime = new Date().getTime();
  function playBeat() {
    return function() {
      //var thisTime = new Date().getTime();
      //console.log("Delay: " + _delay + " Diff: " + (thisTime - lastTime));
      //lastTime = thisTime;
      if (_currentBeat >= gridLength) {
        _currentBeat = 0;
      }

      for (var i = 0; i < _rows.length; i++) {
        _rows[i].playSound(_currentBeat);
      }
      _currentBeat += 1;
      _timers.add(playBeat(), _delay);
    };
  }

  function resetAllRows() {
    for(var i = 0; i < _rows.length; i++) {
      _rows[i].reset();
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
    currentBeat: currentBeat,
    rows: rows,
    tempo: tempo,
    setTempo: setTempo,
    play: play,
    stop: stop,
    reset: reset
  }
});
