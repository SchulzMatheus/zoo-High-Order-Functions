const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees
      .filter((ele) => ele.managers.includes(managerId))
      .map((ele) => `${ele.firstName} ${ele.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
