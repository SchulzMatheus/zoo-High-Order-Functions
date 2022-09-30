const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const newArray = [];
  if (isManager(managerId)) {
    employees.forEach((e) => {
      if (e.managers.includes(managerId)) newArray.push(`${e.firstName} ${e.lastName}`);
    });
    return newArray;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
