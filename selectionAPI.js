function runOOPMobiles(stringArray) {
  var newVehiculars = [];
  for(var i = 0; i < stringArray.length; i++) {
    switch(stringArray[i].toLowerCase()) {
      case 'full' :
        newVehiculars[i] = new Full('Dodge Status', 'red', 'manual', 'unleaded');
      break;
      case 'compact' :
        newVehiculars[i] = new Compact('Toyota Corolla', 'red', 5, 'manual', 'unleaded');
      break;
      case 'truck' :
        newVehiculars[i] = new Truck('Chevrolet Avalanche', 'blue', '4', 8, 6, 'automatic', 'unleaded');
      break;
      case 'suv' :
        newVehiculars[i] = new SUV('Honda CR-V', 'Orange', 4, 6, 7, 'manual', 'unleaded');
      break;
      case 'semi' :
        newVehiculars[i] = new Semi('Peterbit 379', 'red', 6);
      break;
      case 'bus' :
        newVehiculars[i] = new Bus('PartyBus', 'Neon Tyedye', 6, 'deisel');
      break;
      case false :

      break;
      default:
        alert('Unknown vehicular class designation');
    }
  }
  return newVehiculars;
}




// switch(desired) {
//   case 'full' :

//   break;
//   case 'compact' :

//   break;
//   case 'truck' :

//   break;
//   case 'suv' :

//   break;
//   case 'semi' :

//   break;
//   case 'bus' :

//   break;
//   case false :

//   break;
//   default:
//   alert ('Unknown vehicular class designation');
// }