'use strict';

// Timer Queue Model
app.factory('timerQueue', function($timeout) {
  var _queue = new Array();

  function queue() {
    return _queue;
  }

  function add(fn, delay) {
    _queue.push($timeout(fn, delay));
  }
  
  function clear() {
    for (var i = 0; i < _queue.length; i++) {
      $timeout.cancel(_queue[i]);
    }
    _queue = [];
  }

  return {
    queue: queue,
    add: add,
    clear: clear
  };
});

