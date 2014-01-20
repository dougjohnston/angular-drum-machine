'use strict';

// Drum Controller
app.controller('DrumMachineCtrl', function($scope, drumMachine) {

  // Set up the machine service
  drumMachine.build();
  $scope.machine = drumMachine;

  // Start playback
  $scope.playLoop = function() {
    $scope.machine.play();
  };

  // Halt playback
  $scope.stopLoop = function() {
    $scope.machine.stop();
  };

  // Reset the machine to its original state
  $scope.resetLoop = function() {
    $scope.machine.reset();
  };
});
