'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _OOPMobilesJs = require('./OOPMobiles.js');

var _OOPMobilesJs2 = _interopRequireDefault(_OOPMobilesJs);

var myFlyingcar = new _OOPMobilesJs2['default']('Flying Car', 'Black', 8, 2600, 7, 'autopilot', 'false');

console.log('model: ', myFlyingcar.model);
console.log('color: ', myFlyingcar.color);
console.log('doors: ', myFlyingcar.doors);
console.log('engineCyl: ', myFlyingcar.engineCyl);
console.log('seating: ', myFlyingcar.seating);
console.log('transmission: ', myFlyingcar.transmission);
console.log('gas: ', myFlyingcar.gas);