'use strict';

// Kit Model
app.service('kitModel', function() {
  this.instruments = [
    { 'name' : 'Kick',
      'order' : 0,
      'sound' : new Howl({ urls : ['/audio/CYCdh_AcouKick-01.mp3']}) },
    { 'name' : 'Snare',
      'order' : 1,
      'sound' : new Howl({ urls : ['/audio/CYCdh_LudFlamA-01.mp3']}) },
    { 'name' : 'Hi-Hat',
      'description' : 'closed',
      'order' : 2,
      'sound' : new Howl({ urls : ['/audio/KHats Clsd-08.mp3']}) },
    { 'name' : 'Hi-Hat',
      'description' : 'open',
      'order' : 3,
      'sound' : new Howl({ urls : ['/audio/KHats Open-04.mp3']}) }
  ];
});
