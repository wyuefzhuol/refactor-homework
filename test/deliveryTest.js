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