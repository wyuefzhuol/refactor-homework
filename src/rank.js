function voyageRisk (voyage) {
  let result = 1;
  result += voyage.length > 4 ? (voyage.length > 8 ? voyage.length - 6 : 2) : 0;
  result = [ 'china', 'east-indies' ].includes(voyage.zone) ? result + 4 : result;
  return Math.max(result, 0);
}

function hasChina (history) {
  return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk (voyage, history) {
  let result = 1;
  result += history.length < 5 ? 4 : 0;
  result += history.filter(v => v.profit < 0).length;
  result += voyage.zone === 'china' && hasChina(history) ? -2 : 0;
  return Math.max(result, 0);
}

function calcResultWhenZoneIsChinaAndHasChina(result, history, voyage) {
  result += 3;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12) {
    result += 1;
  }
  if (voyage.length > 18) {
    result -= 1;
  }
  return result;
}

function calcResultWhenZoneNotChinaOrNotHasChina(history, result, voyage) {
  if (history.length > 8) {
    result += 1;
  }
  if (voyage.length > 14) {
    result -= 1;
  }
  return result;
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') {
    result += 1;
  }
  if (voyage.zone === 'east-indies') {
    result += 1;
  }
  if (voyage.zone === 'china' && hasChina(history)) {
    result = calcResultWhenZoneIsChinaAndHasChina(result, history, voyage);
  }
  else {
    result = calcResultWhenZoneNotChinaOrNotHasChina(history, result, voyage);
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  rating,
  voyageRisk,
  voyageProfitFactor,
  captainHistoryRisk
};

const voyage = {
  zone: 'west-indies',
  length: 10,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },{
    zone: 'west-indies',
    profit: 15,
  },{
    zone: 'china',
    profit: -2,
  },{
    zone: 'west-africa',
    profit: 7,
  }
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);
