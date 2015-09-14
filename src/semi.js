import Truck from './truck.js';
export default class Semi extends Truck{
  constructor (model, color, engineCyl) {
    super(model, color, 2, engineCyl, 2, 'manual', 'diesel'); {

    }
  }
}