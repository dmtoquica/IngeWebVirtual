const { esReservaValida } = require('./utils/validador');

describe('Pruebas Unitarias: Validador de Reservas', () => {
    test('Debe retornar true para un ID numérico válido', () => {
        expect(esReservaValida(101)).toBe(true);
    });

    test('Debe retornar false si el ID es un texto', () => {
        expect(esReservaValida("101")).toBe(false);
    });
});