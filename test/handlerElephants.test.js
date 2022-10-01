const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names').includes(['Jefferson', 'Ilana', 'Bea', 'Jefferson']));
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability').includes(['Friday', 'Saturday', 'Sunday', 'Tuesday']));
  });
  it('se passar um parametro vazio retorna null', () => {
    expect(handlerElephants('')).toEqual(null);
  });
  it('se passar um parametro vazio retorna undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });
  it('se passar um parametro diferente de string retorna undefined', () => {
    expect(handlerElephants(!String)).toBe('Parâmetro inválido, é necessário uma string');
  });
});
