const data = require('../data/zoo_data');

const x = 0;

const entrantsx = [
  { name: 'marcio', age: 5 },
  { name: 'marcio', age: 5 },
  { name: 'marcio', age: 5 },
  { name: 'marcio', age: 18 },
  { name: 'marcio', age: 18 },
  { name: 'marcio', age: 50 },
];

const ifIsnotNull = (array) => {
  const obj = { adult: 0, child: 0, senior: 0 };
  array.forEach((entrant) => {
    if (entrant.age < 18) obj.child += 1;
    else if (entrant.age >= 18 && entrant.age < 50) obj.adult += 1;
    else obj.senior += 1;
  });
  return obj;
};

const countEntrants = (entrants) => ((entrants !== null) ? ifIsnotNull(entrants) : x);

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  let totalValue = 0;
  const newObj = countEntrants(entrants);
  totalValue += (newObj.child * data.prices.child)
  + (newObj.adult * data.prices.adult)
  + (newObj.senior * data.prices.senior);
  return totalValue;
}
console.log(countEntrants(entrantsx));
module.exports = { calculateEntry, countEntrants };
