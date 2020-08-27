const rankTest = require('ava');
const {voyageRisk} = require('../src/rank');

rankTest('Test1: given voyage zone china length 3 when voyage risk then return 5', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 3,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 5);
});

rankTest('Test2: given voyage zone east-indies length 3 when voyage risk then return 5', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 3,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 5);
});

rankTest('Test3: given voyage zone west-africa length 3 when voyage risk then return 1', t => {
  //given
  let voyage = {
    zone: 'west-africa',
    length: 3,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 1);
});

rankTest('Test4: given voyage zone china length 5 when voyage risk then return 7', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 5,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 7);
});