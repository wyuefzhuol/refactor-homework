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
