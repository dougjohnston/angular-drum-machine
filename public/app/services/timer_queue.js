'use strict';

// Timer Queue Model
app.factory('timerQueue', function($timeout) {
  var _queue = [];

  var timerqueue = {
    add: function(fn, delay) {
      _queue.push($timeout(fn, delay));
    },

    clear: function() {
      for (var i = 0; i < _queue.length; i++) {
        $timeout.cancel(_queue[i]);
      }
      _queue = [];
    }
  }

  return timerqueue;
});

