function isInclude(deliveryStates, actualDeliveryState) {
  return deliveryStates.includes(actualDeliveryState);
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime;
    if (isInclude([
      'MA',
      'CT',
    ], anOrder.deliveryState)) {
      deliveryTime = 1;
    }
    else if (isInclude([
      'NY',
      'NH',
    ], anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime;
    if (isInclude([
      'MA',
      'CT',
      'NY',
    ], anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if (isInclude([
      'ME',
      'NH',
    ], anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
}