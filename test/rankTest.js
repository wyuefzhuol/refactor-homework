const rankTest = require('ava');
const {voyageRisk, captainHistoryRisk} = require('../src/rank');

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

rankTest('Test5: given voyage zone east-indies length 5 when voyage risk then return 7', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 5,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 7);
});

rankTest('Test6: given voyage zone west-africa length 5 when voyage risk then return 3', t => {
  //given
  let voyage = {
    zone: 'west-africa',
    length: 5,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 3);
});

rankTest('Test7: given voyage zone china length 9 when voyage risk then return 8', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 9,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 8);
});

rankTest('Test8: given voyage zone east-indies length 9 when voyage risk then return 8', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 9,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 8);
});

rankTest('Test9: given voyage zone west-africa length 9 when voyage risk then return 4', t => {
  //given
  let voyage = {
    zone: 'west-africa',
    length: 9,
  }
  //when
  let result = voyageRisk(voyage);
  //then
  t.is(result, 4);
});

rankTest('Test10: given voyage zone china history length 1 not has china when captain history risk then return 5', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 9,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ]
  //when
  let result = captainHistoryRisk(voyage, history);
  //then
  t.is(result, 5);
});

rankTest('Test11: given voyage zone china history length 6 not has china when captain history risk then return 1', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 9,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'east-africa',
      profit: 4,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'north-africa',
      profit: 4,
    },{
      zone: 'north-indies',
      profit: 15,
    }
  ]
  //when
  let result = captainHistoryRisk(voyage, history);
  //then
  t.is(result, 1);
});

rankTest('Test12: given voyage zone china history length 1 has china when captain history risk then return 3', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 9,
  }
  let history = [
    {
      zone: 'china',
      profit: 5,
    }
  ]
  //when
  let result = captainHistoryRisk(voyage, history);
  //then
  t.is(result, 3);
});

rankTest('Test13: given voyage zone china history length 6 has china when captain history risk then return 0', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 9,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'east-africa',
      profit: 4,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'north-africa',
      profit: 4,
    },{
      zone: 'china',
      profit: 15,
    }
  ]
  //when
  let result = captainHistoryRisk(voyage, history);
  //then
  t.is(result, 0);
});

rankTest('Test14: given voyage zone east-indies history length 1 when captain history risk then return 5', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 9,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ]
  //when
  let result = captainHistoryRisk(voyage, history);
  //then
  t.is(result, 5);
});

rankTest('Test15: given voyage zone east-indies history length 6 when captain history risk then return 1', t => {
  //given
  let voyage = {
    zone: 'east-indies',
    length: 9,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'east-africa',
      profit: 4,
    },{
      zone: 'west-africa',
      profit: 7,
    },{
      zone: 'north-africa',
      profit: 4,
    },{
      zone: 'china',
      profit: 15,
    }
  ]
  //when
  let result = captainHistoryRisk(voyage, history);
  //then
  t.is(result, 1);
});