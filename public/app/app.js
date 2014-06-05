'use strict';

//var app = angular.module('AngularDrumMachine', ['ngRoute']);
var app = angular.module('AngularDrumMachine', []);

app.run(['drumMachine', '$q', '$rootScope', '$timeout', function(drumMachine, $q, $rootScope, $timeout) {
  $rootScope.loading = true;

  $q.all([drumMachine.loadInstruments(), drumMachine.loadSequence()])
    .then(function(result) {
      $timeout(function() {
        $rootScope.machine = drumMachine;
        $rootScope.tempo = drumMachine.tempo.call(this);
        $rootScope.loading = false;
      }, 2500);
    }, function(reason) {
      console.log("Failed to load JSON data.");
    });
}]);
