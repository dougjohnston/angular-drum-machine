// Controllers

app.controller('DrumController', function($scope, $timeout, machineModel) {
  'use strict';
  
  // Set up the machine, instruments, and other variables
  $scope.machine = machineModel;
  $scope.instruments = $scope.machine.kit.instruments;
  $scope.timers = [];

  $scope.isOn = function(instrument, beat) {
    return $scope.machine.beats[instrument.order][beat];
  };

  $scope.toggleBeat = function(instrument, beat) {
    $scope.machine.beats[instrument.order][beat] = !$scope.machine.beats[instrument.order][beat];
  };


  $scope.playLoop = function() {
    var x = 0;
    var measureDelay = 0;
    while(x < $scope.machine.loops) {
      measureDelay = x * ($scope.machine.beats[0].length * $scope.machine.delay());
      $scope.timers.push($timeout(playMeasure(), measureDelay));
      x++;
    }
  };

  var playMeasure = function() {
    return function() {
      $scope.machine.currentMeasure++;
      for (var i = 0; i < $scope.machine.beatsPerMeasure; i++) {
        $scope.timers.push($timeout(playBeat(i), i * $scope.machine.delay()));
      }
      $scope.machine.currentBeat = 0;
    };
  };

  var playBeat = function(currentBeat) {
    return function() {
      $scope.machine.currentBeat++;
      for (var i = 0; i < $scope.instruments.length; i++) {
        if ($scope.machine.beats[i][currentBeat]) {
          $scope.instruments[i].sound.play();
        }
      }
    };
  };

  // Stop all scheduled timers, bringing everything to a halt
  $scope.stopLoop = function() {
    $scope.machine.currentMeasure = 0;
    $scope.machine.currentBeat = 0;
    for (var i = 0; i < $scope.timers.length; i++) {
      $timeout.cancel($scope.timers[i]);
    }
    $scope.timers = [];
  };
});
