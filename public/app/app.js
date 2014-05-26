'use strict';

var app = angular.module('AngularDrumMachine', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index.html', 
    controller: 'DrumMachineCtrl',
    resolve: {
      instruments: function(drumMachine) {
        return drumMachine.loadInstruments();
      },
      sequence: function(drumMachine) {
        return drumMachine.loadSequence();
      }
    }
  });
  
  $routeProvider.otherwise({redirectTo: '/'});
}]);

