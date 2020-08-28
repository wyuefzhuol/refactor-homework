const deliveryTest = require('ava');
const {deliveryDate} = require('../src/delivery');

deliveryTest('Test1: given is rush an order MA when delivery date then return 2', t => {
  //given
  let isRush = true;
  let anOrder = {
    deliveryState: 'MA', placedOn: {
      plusDays: (x) => {
        return x
      }
    }
  }
  //when
  const result = deliveryDate(anOrder, isRush);
  //then
  t.is(result, 2);
});

deliveryTest('Test2: given is rush an order NY when delivery date then return 3', t => {
  //given
  let isRush = true;
  let anOrder = {
    deliveryState: 'NY', placedOn: {
      plusDays: (x) => {
        return x
      }
    }
  }
  //when
  const result = deliveryDate(anOrder, isRush);
  //then
  t.is(result, 3);
});

deliveryTest('Test3: given is rush an order ME when delivery date then return 4', t => {
  //given
  let isRush = true;
  let anOrder = {
    deliveryState: 'ME', placedOn: {
      plusDays: (x) => {
        return x
      }
    }
  }
  //when
  const result = deliveryDate(anOrder, isRush);
  //then
  t.is(result, 4);
});

deliveryTest('Test4: given is not rush an order CT when delivery date then return 4', t => {
  //given
  let isRush = false;
  let anOrder = {
    deliveryState: 'CT', placedOn: {
      plusDays: (x) => {
        return x
      }
    }
  }
  //when
  const result = deliveryDate(anOrder, isRush);
  //then
  t.is(result, 4);
});

deliveryTest('Test5: given is not rush an order NH when delivery date then return 5', t => {
  //given
  let isRush = false;
  let anOrder = {
    deliveryState: 'NH', placedOn: {
      plusDays: (x) => {
        return x
      }
    }
  }
  //when
  const result = deliveryDate(anOrder, isRush);
  //then
  t.is(result, 5);
});