'use strict';

// drumMachine Model
app.factory('drumMachine', function($http, $q, timerQueue) {
  // Private variables
  var _playing = false;
  var _currentBeat = 0;
  var _delay = 100;
  var _timers = timerQueue;
  var _rows = [];

  // Public variables
  var timeSignature = 4;
  var gridLength = 16;
  var tempo = 120;

  var instrumentsDeferred = $q.defer();
  var sequenceDeferred = $q.defer();

  function loadInstruments(instrumentFile) {
    var item, player, instrument;
    var file = instrumentFile || "/app/services/data/instruments/kit-1.json";

    var promise = $http.get(file).success(function(data, status, headers, config) {
      for(var i = 0; i < 4; i++) {
        item = data.instruments[i];
        player = new Howl({ urls: ["assets/audio/" + item.file] });
        instrument = new Instrument(player, item);

        _rows.push(new Row(instrument, gridLength));
      }
    });
    return promise;
  }

  function loadSequence(sequenceFile) {
    var file = sequenceFile || "/app/services/data/sequences/seq-1.json";

    reset();

    var promise = $http.get(file).success(function(data, status, headers, config) {
      gridLength = data.gridLength;
      setTempo(data.tempo);
      for(var i = 0; i < 4; i++) {
        for(var j = 0; j < gridLength; j++) {
          if (data.rows[i][j] === "1") {
            _rows[i].getBeats()[j].activate();
          } else {
            _rows[i].getBeats()[j].deactivate();
          }
        }
      }
    });

    return promise;
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
    return (1000 / (tempo * 2) * 60);
  }

  // Return public functions
  return {
    loadInstruments: loadInstruments,
    loadSequence: loadSequence,
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
