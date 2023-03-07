const data = require('../data/zoo_data');

const getEmployeer = (fullNameId) => data.employees.find(({ firstName, lastName, id }) =>
  firstName === fullNameId || lastName === fullNameId || id === fullNameId);
const speciesAndLocation = (responsibleFor) => {
  const arrayOfSpecie = [];
  const arrayOfLocation = [];

  responsibleFor.forEach((employeeSpecieId) => {
    const animal = data.species.find(({ id: specieId }) => specieId === employeeSpecieId);
    arrayOfLocation.push(animal.location);
    arrayOfSpecie.push(animal.name);
  });

  return [arrayOfSpecie, arrayOfLocation];
};

const createObj = ({ id, firstName, lastName, responsibleFor }) => {
  const [species, locations] = speciesAndLocation(responsibleFor);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species,
    locations,
  };
};

function getEmployeesCoverage(searchFor) {
  if (searchFor) {
    const [search] = Object.values(searchFor);
    const employee = getEmployeer(search);
    if (!employee) throw new Error('Informações inválidas');
    return createObj(employee);
  }
  return data.employees.map((employee) => createObj(employee));
}

module.exports = getEmployeesCoverage;
