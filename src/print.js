function calcOutstanding(invoice, outstanding) {
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function recordDueDate(invoice) {
  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printOwingTxt (invoice, outstanding) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function getOwing(invoice) {
  let outstanding = 0;
  let result = '***********************\n**** Customer Owes ****\n***********************\n';
  outstanding = calcOutstanding(invoice, outstanding);
  recordDueDate(invoice);
  // print details
  result += `name: ${invoice.customer}\namount: ${outstanding}\namount: ${invoice.dueDate.toLocaleDateString()}`
  return {outstanding, result};
}

function printOwing (invoice) {
  let {outstanding, result} = getOwing(invoice);
  printOwingTxt(invoice, outstanding);
  return result;
}

module.exports = {
  printOwing
};
