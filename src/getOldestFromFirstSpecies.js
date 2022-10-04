const data = require('../data/zoo_data');

const { employees, species } = data;
const getList = (id) => {
  const emp = employees.find((employee) => employee.id === id);
  const animalsList = species.find((specie) => specie.id === emp.responsibleFor[0]);
  const oldestSorOrder = animalsList.residents.sort((x1, x2) => x2.age - x1.age)[0];
  return oldestSorOrder;
};
const getOldestFromFirstSpecies = (id) => [getList(id).name, getList(id).sex, getList(id).age];

module.exports = getOldestFromFirstSpecies;
