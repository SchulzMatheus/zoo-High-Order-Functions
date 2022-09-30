const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (
  (animal, age) => species.find((s) => s.name === animal).residents.every((r) => r.age >= age)
);

module.exports = getAnimalsOlderThan;
