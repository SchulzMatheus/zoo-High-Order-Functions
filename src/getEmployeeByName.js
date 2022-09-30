const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => (
  employees.find((e) => e.firstName === employeeName || e.lastName === employeeName)) || {};

console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
