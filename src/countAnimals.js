const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const withParameters = (animal) => {
  if (animal.sex) {
    return species.find((e) => e.name === animal.specie).residents
      .filter((e) => e.sex === animal.sex).length;
  }
  const especie = species.find((e) => e.name === animal.specie);
  return especie.residents.length;
};
const withoutParameters = () => {
  const array = {};
  species.forEach((e) => {
    array[e.name] = e.residents.length;
  });
  return array;
};
const countAnimals = (animal) => ((!animal) ? withoutParameters() : withParameters(animal));

console.log(countAnimals({ specie: 'bears' }));
module.exports = countAnimals;

// if (animal.sex !== undefined) {
//   return species
//     .find((e) => e.name === animal.specie)
//     .residents.filter((e) => e.sex === animal.sex)
//     .length;
// }
// return species
//   .find((e) => e.name === animal.specie)
//   .residents.length;
