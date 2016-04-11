'use strict';

// Drum Controller
app.controller('DrumMachineCtrl', function($scope) {
  //variable to prevent multiple playloops
    $scope.lock = true;

    // Start playback
  $scope.playLoop = function () {
      if ($scope.lock) {
        $scope.machine.play();
        $scope.fade_msg_play = true;
        console.log('Playing');
        $scope.lock = false;
      }

  };

  // Halt playback
  $scope.stopLoop = function () {
      $scope.lock = true;
      $scope.machine.stop();
      
  };

  // Reset the machine to its original state
  $scope.resetLoop = function() {
    $scope.machine.reset();
  };

  // Update the tempo
  $scope.updateTempo = function() {
      $scope.machine.setTempo($scope.tempo);
      
  };
});
