const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter(({ id }) => ids.includes(id));

console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getSpeciesByIds;
