const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const array = [];
  if (ids.length !== 0) ids.forEach((id) => array.push(data.species.find((ele) => ele.id === id)));
  return array;
};
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getSpeciesByIds;
