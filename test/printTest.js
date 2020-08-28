const printTest = require('ava');
const {printOwing} = require('../src/print');

printTest('Test1: given invoice customer eric when print owing then return amount info', t => {
  //given
  let invoice = {
    customer: "eric",
    borderSpacing: [{ amount: 10 }, { amount: 5 }],
    dueDate: null
  }
  //when
  const result = printOwing(invoice);
  //then
  t.is(result, "***********************\n**** Customer Owes ****\n***********************\n" +
    "name: eric\namount: 15\namount: " +
    (new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate() + 30)).toLocaleDateString());
});

printTest('Test2: given invoice customer eric no border spacing when print owing then return amount info', t => {
  //given
  let invoice = {
    customer: "eric",
    borderSpacing: [],
    dueDate: null
  }
  //when
  const result = printOwing(invoice);
  //then
  t.is(result, "***********************\n**** Customer Owes ****\n***********************\n" +
    "name: eric\namount: 0\namount: " +
    (new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate() + 30)).toLocaleDateString());
});