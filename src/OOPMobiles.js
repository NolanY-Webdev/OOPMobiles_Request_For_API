export default class AutoMobile{

  constructor (model, color, doors, engineCyl, seating, transmission, gas) {
    this._model = model;
    this._color = color;
    this._doors = doors;
    this._engineCyl = engineCyl;
    this._seating = seating;
    this._brakes = true;
    this._transmission = transmission;
    this._gas = gas;
  }

get model(){
    return this._model;
  }

  set model( model ){
    this._model = model;
  }

get color(){
  return this._color;
}

set color(color){
  this._color = color;
}

get doors(){
  return this._doors;
}

set doors(doors){
  this._doors = doors;
}

get engineCyl(){
  return this._engineCyl;
}

set engineCyl(engineCyl){
  this._engineCyl = engineCyl;
}

get seating(){
    return this._seating;
  }

  set seating( seating ){
    this._seating = seating;
  }

get brakes(){
    return this._brakes;
  }

get transmission(){
    return this._transmission;
  }

  set transmission( transmission ){
    this._transmission = transmission;
  }

get gas(){
    return this._gas;
  }

  set gas( gas ){
    this._gas = gas;
  }

}