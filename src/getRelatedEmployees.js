const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.includes(id));

const filteredEmployers = (id) => (
  employees.filter((e) => e.managers.includes(id)).map((e) => `${e.firstName} ${e.lastName}`)
);

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) return filteredEmployers(managerId);
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
