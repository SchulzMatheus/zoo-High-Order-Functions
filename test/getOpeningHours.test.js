const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const x = 'The zoo is open';
  it('Quando não passado nem um parametro a função deve retornar um objeto', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Verifica se o dia deve está escrito em inglês', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('quarta-feira', '09:00-AM')).toThrowError(new Error(expected));
  });
  it('Verifica se o formato da hora está correto', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('friday', '09:00:AM')).toThrowError(new Error(expected));
  });
  it('Verifica se a hora passada tem a abreviação correta', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('friday', '09:00-AP')).toThrowError(new Error(expected));
  });
  it('Verifica se a função retorna corretamente quando os character estão em lowerCase', () => {
    expect(getOpeningHours('friday', '11:15-am')).toEqual(x);
  });
  it('Verifica se a função retorna corretamente quando os character estão em upperCase', () => {
    expect(getOpeningHours('FRIDAY', '11:15-AM')).toEqual(x);
  });
  it('Se o segundo parametro não representar um número a função deve retornar um erro', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('friday', 'OiTo:00-AM')).toThrowError(new Error(expected));
  });
  it('Se a hora for maior que 12 ou menor que 0 a função retorna um erro', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('friday', '13:00-AM')).toThrowError(new Error(expected));
  });
  it('Se a o minuto for maior que 59 ou menor que 0 a função retorna um erro', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('friday', '12:63-AM')).toThrowError(new Error(expected));
  });
  it('Se o dia e hora que foram passados como parametros forem dias que o zologico ta aberto verifica se a função tem retorno correto', () => {
    expect(getOpeningHours('friday', '03:00-PM')).toEqual(x);
  });
  it('Se o dia e hora que foram passados como parametros forem dias que o zologico ta fechado verifica se a função tem retorno correto', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '3:00-AM')).toEqual(expected);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string \'The zoo is closed\'', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '12:00-AM')).toEqual(expected);
  });
});
