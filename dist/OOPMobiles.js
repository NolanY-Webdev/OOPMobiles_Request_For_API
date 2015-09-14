"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoMobile = (function () {
  function AutoMobile(model, color, doors, engineCyl, seating, transmission, gas) {
    _classCallCheck(this, AutoMobile);

    this._model = model;
    this._color = color;
    this._doors = doors;
    this._engineCyl = engineCyl;
    this._seating = seating;
    this._brakes = true;
    this._transmission = transmission;
    this._gas = gas;
  }

  _createClass(AutoMobile, [{
    key: "model",
    get: function get() {
      return this._model;
    },
    set: function set(model) {
      this._model = model;
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = color;
    }
  }, {
    key: "doors",
    get: function get() {
      return this._doors;
    },
    set: function set(doors) {
      this._doors = doors;
    }
  }, {
    key: "engineCyl",
    get: function get() {
      return this._engineCyl;
    },
    set: function set(engineCyl) {
      this._engineCyl = engineCyl;
    }
  }, {
    key: "seating",
    get: function get() {
      return this._seating;
    },
    set: function set(seating) {
      this._seating = seating;
    }
  }, {
    key: "brakes",
    get: function get() {
      return this._brakes;
    }
  }, {
    key: "transmission",
    get: function get() {
      return this._transmission;
    },
    set: function set(transmission) {
      this._transmission = transmission;
    }
  }, {
    key: "gas",
    get: function get() {
      return this._gas;
    },
    set: function set(gas) {
      this._gas = gas;
    }
  }]);

  return AutoMobile;
})();

exports["default"] = AutoMobile;
module.exports = exports["default"];