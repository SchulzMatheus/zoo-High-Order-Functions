const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const withParameters = (animal) => {
  if (animal.sex) {
    return species.find((e) => e.name === animal.specie).residents
      .filter((e) => e.sex === animal.sex).length;
  }
  return species.find((e) => e.name === animal.specie).residents.length;
};
const withoutParameters = () => {
  const objeto = {};
  species.forEach((e) => {
    objeto[e.name] = e.residents.length;
  });
  return objeto;
};
const countAnimals = (animal) => ((!animal) ? withoutParameters() : withParameters(animal));

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
