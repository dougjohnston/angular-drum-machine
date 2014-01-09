'use strict';

var Beat = function() {
  var self = this;

  self.active = false;

  self.toggle = function() {
    self.active = (self.active ? false : true);
  }

  self.deactivate = function() {
    self.active = false
  }
};
