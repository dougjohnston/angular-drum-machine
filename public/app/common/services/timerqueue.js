'use strict';

// Machine Model
//
app.factory('timerqueue', function($timeout) {
  var queue = [];

  var timerqueue = {
    add: function(fn, delay) {
      queue.push($timeout(fn, delay));
    },

    clear: function() {
      for (var i = 0; i < queue.length; i++) {
        $timeout.cancel(queue[i]);
      }
      queue = [];
    }
  }

  return timerqueue;
});

