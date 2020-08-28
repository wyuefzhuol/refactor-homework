const employeeTest = require('ava');
const {Employee} = require('../src/employee');

employeeTest('Test1: given name eric type engineer when new employee then return eric (engineer)', t => {
  //given
  let name = "eric";
  let type = "engineer"
  //when
  const result = new Employee(name, type);
  //then
  t.is(result.toString(), "eric (engineer)");
});

employeeTest('Test2: given name eric type doctor when new employee then return Employee cannot be of type doctor', t => {
  //given
  let name = "eric";
  let type = "doctor"
  try {
    //when
    const result = new Employee(name, type);
    t.fail();
  } catch (e) {
    //then
    t.is(e.message, "Employee cannot be of type doctor");
  }
});