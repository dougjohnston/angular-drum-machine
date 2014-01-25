'use strict';

var Beat = function() {
  var active = false;

  function isActive() {
    return active;
  }

  function activate() {
    active = true;
  }

  function deactivate() {
    active = false;
  }

  function toggle() {
    active = (active ? false : true);
  }

  // Return public functions
  return {
    isActive: isActive,
    activate: activate,
    deactivate: deactivate,
    toggle: toggle
  }
};
