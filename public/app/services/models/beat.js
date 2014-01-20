'use strict';

//var Beat = {
  //active: false,

  //toggle: function() {
    //Beat.active = (Beat.active ? false : true);
  //},

  //deactivate: function() {
    //Beat.active = false;
  //}
//};

function Beat() {
  this.active = false;
}

Beat.prototype.toggle = function() {
  this.active = (this.active ? false : true);
};

Beat.prototype.deactivate = function() {
  this.active = false;
};

