// Drum Controller

app.controller('DrumController', function($scope, machine) {
  'use strict';
  
  // Set up the machine service
  $scope.machine = machine;
  $scope.machine.build();

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
