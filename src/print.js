function calcOutstanding(invoice, outstanding) {
  // calculate outstanding
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function printOwing (invoice) {
  let outstanding = 0;
  let result = '***********************\n**** Customer Owes ****\n***********************\n';

  outstanding = calcOutstanding(invoice, outstanding);

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  // print details
  result += `name: ${invoice.customer}\namount: ${outstanding}\namount: ${invoice.dueDate.toLocaleDateString()}`
  return result;
}

module.exports = {
  printOwing
};
