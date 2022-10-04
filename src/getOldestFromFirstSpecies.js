const data = require('../data/zoo_data');

const { employees, species } = data;
const getList = (id) => {
  const emp = employees.find((employee) => employee.id === id);
  // return emp;
  const animalsList = species.find((specie) => specie.id === emp.responsibleFor[0]);
  // return animalsList;
  const oldestSorOrder = animalsList.residents.sort((x1, x2) => x2.age - x1.age)[0];
  return oldestSorOrder;
};
const getOldestFromFirstSpecies = (id) => [getList(id).name, getList(id).sex, getList(id).age];

console.log(getList('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = getOldestFromFirstSpecies;
