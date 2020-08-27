const rankTest = require('ava');
const {voyageRisk, captainHistoryRisk, voyageProfitFactor, rating} = require('../src/rank');

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

rankTest('Test16: given voyage zone china length 13 history length 1 not has china when voyage profit factor then return 3', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 13,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 3);
});

rankTest('Test17: given voyage zone china length 15 history length 1 not has china when voyage profit factor then return 2', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 15,
  }
  let history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 2);
});

rankTest('Test18: given voyage zone china length 11 history length 1 has china when voyage profit factor then return 6', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 11,
  }
  let history = [
    {
      zone: 'china',
      profit: 5,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 6);
});

rankTest('Test19: given voyage zone china length 13 history length 1 has china when voyage profit factor then return 7', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 13,
  }
  let history = [
    {
      zone: 'china',
      profit: 5,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 7);
});

rankTest('Test20: given voyage zone china length 19 history length 1 has china when voyage profit factor then return 6', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 19,
  }
  let history = [
    {
      zone: 'china',
      profit: 5,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 6);
});

rankTest('Test21: given voyage zone china length 19 history length 11 has china when voyage profit factor then return 7', t => {
  //given
  let voyage = {
    zone: 'china',
    length: 19,
  }
  let history = [
    {
      zone: 'china',
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
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'west-indies',
      profit: 15,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 7);
});

rankTest('Test22: given voyage zone west-indies length 13 history length 11 when voyage profit factor then return 3', t => {
  //given
  let voyage = {
    zone: 'west-indies',
    length: 11,
  }
  let history = [
    {
      zone: 'china',
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
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'west-indies',
      profit: 15,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 3);
});

rankTest('Test23: given voyage zone west-indies length 15 history length 11 when voyage profit factor then return 2', t => {
  //given
  let voyage = {
    zone: 'west-indies',
    length: 15,
  }
  let history = [
    {
      zone: 'china',
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
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'west-indies',
      profit: 15,
    }
  ]
  //when
  let result = voyageProfitFactor(voyage, history);
  //then
  t.is(result, 2);
});

rankTest('test24: given voyage with china 19 history length 5 when rating return A', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'china',
      profit: 5,
    }
  ];
  //when
  let result = rating(voyage, history);
  //then
  t.is('B', result);
})
