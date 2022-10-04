const { species, hours } = require('../data/zoo_data');

const animals = species.map((specie) => specie.name);
const days = Object.keys(hours).map((day) => day);
const openClose = Object.entries(hours).map((oc) => oc);

const createObjectNoParam = () => {
  const obj = {};
  openClose.forEach((entries) => {
    if (entries[0] !== 'Monday') {
      obj[entries[0]] = {
        officeHour: `Open from ${entries[1].open}am until ${entries[1].close}pm`,
        exhibition: species.filter((specie) => specie.availability
          .includes(entries[0]))
          .map((daysAvailable) => daysAvailable.name),
      };
    } else {
      obj[entries[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });
  return obj;
};
const createObjectWithParam = (param) => {
  const obj = {};
  if (param === 'Monday') {
    obj[param] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else if (days.some((entries) => entries.includes(param))) {
    const horas = openClose.find((entries) => entries[0] === param);
    obj[param] = {
      officeHour: `Open from ${horas[1].open}am until ${horas[1].close}pm`,
      exhibition: species
        .filter((specie) => specie.availability.includes(param)).map((animal) => animal.name),
    };
  } else {
    return species.find((specie) => specie.name === param).availability.map((dias) => dias);
  }
  return obj;
};

const getSchedule = (scheduleTarget) => ((scheduleTarget === undefined
  || !([days, animals]
    .some((e) => e
      .includes(scheduleTarget)))) ? createObjectNoParam() : createObjectWithParam(scheduleTarget));

module.exports = getSchedule;
